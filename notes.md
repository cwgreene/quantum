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

## Potentials

Potentials are kind of a weird thing in standard QM. Fundamentally, potential energy is the way we assert
"There is energy inherent in this specific configuration of the system." As a result, it's a function of
configuration. The wacky thing is that this allows us to dramatically simplify our Hamiltonians in certain
situations. In two states systems, we can adopt the center of mass frame so that what would have been
a two dimensional wave function. This trick also allows us to talk about a wide range of phenomenon. Don't
want to talk about photons? No problem! Focus on the electron, and just toss the energy

A key aspsect of the hamiltonian is that it, unlike the Lagrangian, it doesn't care if energy is potential
or kinetic, it just cares about the total. So ignoring kinetic energy associated with the photon and
treating it as 'potential' energy is A-OK as far as time evolution is concerned.

Again, this works because since we're not treating the photons as particles (rather, as just a background
energy thing, like the proton in the central potential) we don't have to worry about it's ill defined mass.

Likely, this suggests that there are higher order energy terms that the potential doesn't represent correctly,
but hey, as we discussed previously, those terms start small and stay small. :)
