var Amplitude = function(real, imag) {
    this.real = real;
    this.imag = imag;
}

Amplitude.prototype.add = function(amplitude) {
    var newAmplitude = new Amplitude(0,0);
    if (typeof(amplitude) == "number") {
        newAmplitude.real = this.real + amplitude;
    } else {
        newAmplitude = this.real + amplitude.real;
        newAmplitude = this.imag + amplitude.imag;
    }
    return newAmplitude;
}

Amplitude.prototype.multiply = function(amplitude) {
    var newAmplitude = new Amplitude(0,0);
    if(typeof(amplitude) === "number") {
        newAmplitude.real = this.real * amplitude;
        newAmplitude.imag = this.imag * amplitude;
    } else {
        newAmplitude.real = this.real*amplitude.real - this.imag*amplitude.imag;
        newAmplitude.imag = this.imag*amplitude.real + amplitude.imag*this.real;
    }
    return newAmplitude;
}

Amplitude.prototype.equals = function(amplitude) {
    if(typeof(amplitude) === "number") {
        return this.real == amplitude && this.imag == 0
    }
    return this.real == amplitude.real && this.imag == amplitude.imag;
}

Amplitude.prototype.angle = function() {
    var atan = Math.atan(this.imag/this.real);
    if (this.real < 0 && this.imag > 0) {
        return atan + Math.PI;
    } else if (this.real < 0) { // Third quadrant
        return atan + Math.PI;
    } else if (this.real > 0 && this.imag < 0) {
        return atan + 2*Math.PI;
    }
    return atan; // first qudrant
}

Amplitude.prototype.exponentiate = function(amplitude) {
    var r = Math.exp(amplitude.real);
    var newAmplitude = new Amplitude(r*Math.cos(amplitude.imag), r*Math.sin(amplitude.imag));
    return newAmplitude;
}

var I = new Amplitude(0,1); // Sqrt(-1)
var U = new Amplitude(1,0); // Unity

