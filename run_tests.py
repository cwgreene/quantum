#!/usr/bin/env python
import os
import re
import sys
import subprocess

import colorama

def get_base_name(filename):
    """ example.unittest.js => example.js
        :type filename: str
    """
    index = filename.index(".unittest.js")
    return filename[:index] + ".js"

# hacky recursive solution
# doesn't cleanly return the dependency_list,
# just mutates it along the way instead. :(
def get_requirements(filename, dependency_list = None, file_set = None):
    """ // depends: chicken.js ,   doom.js => ["chicken.js", "doom.js"]
        :type filename: str
        :type file_set: set
    """
    if file_set == None:
        file_set = set()
    if dependency_list == None:
        dependency_list = []
    file_set.add(filename)
    dependency_list.append(filename)
    with open(filename) as afile:
        dependencies = re.findall("//.*depends:(.*)", afile.readline())
        if dependencies:
            dependencies = dependencies[0].split(",")
            dependencies = [d.strip() for d in dependencies]
        for dependency in dependencies:
            if dependency not in file_set:
                get_requirements(dependency, dependency_list, file_set)
        return dependency_list

for filename in os.listdir("."):
    if "unittest" in filename:
        base_file = get_base_name(filename)
        requirements = list(reversed(get_requirements(base_file)))
        print filename,":", requirements,
        if not os.path.exists("build"):
            os.mkdir("build")
        os.system("cat %s> build/%s.gen.js" % 
            (" ".join(requirements + [filename]), base_file))
        try:
            subprocess.check_call(["node", "build/%s" % (base_file+".gen.js")])
            print colorama.Fore.GREEN + "Success!" + colorama.Fore.RESET
        except subprocess.CalledProcessError as C:
            print colorama.Fore.RED + "Failure" + colorama.Fore.RESET
            print C
        subprocess.check_call(["istanbul", "cover", "build/%s" % (base_file+".gen.js")])
