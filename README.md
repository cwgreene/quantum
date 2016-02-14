#Quantum.js
Javascript simulator for particles in a box.

#Getting Started
Currently, functionality is non-existent. Run
./run-tests.py to execute unit-tests. Eventually, you should run
some sort of standard setup script.

# How the simulator is supposed to work.
Still in implementation phase.

The simulator works by choosing an orthogonal basis of states, and
then computing the individual kinetic and potential energy contributions,
weighted by the coefficient of that state to the total Hamiltonian time step.

The basis that will be chosen is intented to be position based, however,
I'll have to figure out how to choose an appropriate basis function to
ensure each state has finite kinetic energy, and are all orthogonal to each
other.
