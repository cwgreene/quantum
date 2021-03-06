#!/usr/bin/env python
import os
import shutil
import re
import sys
import subprocess

import colorama

# install git hooks.
shutil.copyfile("./githooks/pre-push", "./.git/hooks/pre-push")

for filename in os.listdir("tst/"):
    if not os.path.exists('build'):
        os.mkdir('build')
    if "unittest" in filename:
        coverage_dir = "build/%s_coverage" % filename
        coverage_file = "build/%s/coverage.json" % coverage_dir
        subprocess.check_call(["node_modules/.bin/istanbul", "cover", "tst/%s" % (filename), "--dir", coverage_dir])
        subprocess.check_call(["node_modules/.bin/istanbul", "report", "html", "--dir", coverage_dir, "--include", coverage_file])
