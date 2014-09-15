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

var I = new Amplitude(0,1); // Sqrt(-1)
var U = new Amplitude(1,0); // Unity

// Unit Tests
I.multiply(I).equals(-1);
I.multiply(I).multiply(I).equals(I.multiply(-1));