# The Importance of Energy Eigenstates So what's so great about
energy eigenstates?

## Numerical Nice Aspects

We can of course decompose the eigenfunction into *any* basis of
complete (potentially even non-orthogonal) functions. The catch is,
if we do this, we cannot say that a component that starts off having
a small amplitude will *keep* a small amplitude. As the system
evolves, the various amplitudes will mix.

Unless we have an energy eigenstate. The only change that an energy
eigenstate has is that of a phase change. The amplitude is constant.
So if you project a system into it's energy eigenstates and throw
out terms which have small contributions, you're guaranteed that
as you look at the position distribution at a later time, the
contributions from the originally small terms remains small.

## Conservation of Energy aspect and transitions

If you have a system S, and you interact with it, and it does
something like emit a photon, then you potentailly have a *lot* of
information about the state of S. Since in order to emit a photon
of a given Energy, it must have transistioned between two states
with that energy delta. If that is *unique* then the energy of the
system is now determined, and it's now stuck there until someone
bumps into it (granted, the whole CMBR kinda ensures that will
happen).

However, as we know, this won't work should we happen to have a
pure SHO (Simple Harmonic Oscillator), where all energy transitinos
are the same size.

## Decoherence

My understanding, however, is that because of decoherence, most
systems that are not carefully prepared, will in fact be in a definite
energy eigenstate. However, I suspect this claim is more complicated
and interesting then it appears. We seem to be asserting that for
very large systems, the Wavefunction factors cleanly into the cartesian
product of the subsystems energy eigenfunctions.

I have seen some mathematical arguments as to why this is the case,
but would like to break them down into something that could be
simulated on a computer.

