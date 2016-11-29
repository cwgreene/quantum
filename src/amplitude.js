"use strict";
var Amplitude = function (real, imag) {
    this.real = real;
    this.imag = imag;
};
Amplitude.prototype.add = function (amplitude) {
    var newAmplitude = new Amplitude(0, 0);
    if (typeof (amplitude) === "number") {
        newAmplitude.real = this.real + amplitude;
        newAmplitude.imag = this.imag;
    }
    else {
        newAmplitude.real = this.real + amplitude.real;
        newAmplitude.imag = this.imag + amplitude.imag;
    }
    return newAmplitude;
};
Amplitude.prototype.multiply = function (amplitude) {
    var newAmplitude = new Amplitude(0, 0);
    if (typeof (amplitude) === "number") {
        newAmplitude.real = this.real * amplitude;
        newAmplitude.imag = this.imag * amplitude;
    }
    else {
        newAmplitude.real = this.real * amplitude.real - this.imag * amplitude.imag;
        newAmplitude.imag = this.imag * amplitude.real + amplitude.imag * this.real;
    }
    return newAmplitude;
};
Amplitude.prototype.equals = function (amplitude) {
    if (typeof (amplitude) === "number") {
        return this.real == amplitude && this.imag == 0;
    }
    return this.real == amplitude.real && this.imag == amplitude.imag;
};
Amplitude.prototype.angle = function () {
    var atan = Math.atan(this.imag / this.real);
    if (this.real < 0 && this.imag > 0) {
        return atan + Math.PI;
    }
    else if (this.real < 0) {
        return atan + Math.PI;
    }
    else if (this.real > 0 && this.imag < 0) {
        return atan + 2 * Math.PI;
    }
    return atan; // first quadrant
};
Amplitude.prototype.conj = function () {
    return new Amplitude(this.real, -this.imag);
};
Amplitude.prototype.inverse = function () {
    var r = this.radius();
    var r2 = r * r;
    return new Amplitude(this.real / r2, -this.imag / r2);
};
Amplitude.prototype.radius = function () {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
};
Amplitude.prototype.exponentiate = function (amplitude) {
    if (typeof (amplitude) === "number") {
        var amplitude = new Amplitude(amplitude, 0);
    }
    var this_r = this.radius();
    var this_theta = this.angle();
    var theta = amplitude.real * this_theta;
    var r = this_r * Math.exp(-this_theta * amplitude.imag);
    var newAmplitude = (new Amplitude(r * Math.cos(theta), r * Math.sin(theta)));
    return newAmplitude;
};
Amplitude.prototype.almostEquals = function (amplitude) {
    if (typeof (amplitude) === "number") {
        amplitude = new Amplitude(amplitude, 0);
    }
    var diff = this.add(amplitude.multiply(-1));
    return diff.radius() < .0001;
};
module.exports = {
    "I": new Amplitude(0, 1),
    "U": new Amplitude(1, 0),
    "Amplitude": Amplitude
};
