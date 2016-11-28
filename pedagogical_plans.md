# Plan 1
The issue which I dislike about the traditional approach to teaching
quantum mechanics is you very quickly jump into solving the schroedinger
equation via energy eigenstates without much motivation as to why you should
do it this way.

Yes, by "solving" the equation this way, you get a solution with a number of nice
properties, but why you want/need those properties is likely ignored by the
greater issue is that the only alternative is to manually crank the Schroedinger
Equation. An option that, until computers, was not feasible or really considered. Thus
a lot of what you can technically do is accidentally swept under the rug.

Another major issue is that the wave function is *not* a function of position. This
is one of the major confusing mistakes to make. The wave function is fundamentally a function
of basis states, and the position basis is only one of them. This is of utmost importance when
you start considering *systems* of particles, and the wave function becomes the probability
that the wave function is in one of many different configurations of the system.

Further complicating this mess of ideas is that the standard, 'position' based
schroedinger equation doesn't strictly operate on position states directly, rather
the basis of L^2 functions of position.

So to present in a clear way Quantum Mechanics, we adopt the following:

- Develop a framework that allows us to provide a set of basis states, and a way
    to switch to another basis in a clean, clear, and explainable manner.
- Visualizations!
- Clear walkthrough (tutorial) of the code and philosophy.
- Decoherence! Seriously, I want a clear, simulation argument as to how
    this actually works in practice. Some explanations seem to presuppose
    that thermodynamics happens, and it gets bolted into the system. If
    this is a necessary assumption, I want to call that out.

