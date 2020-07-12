"use strict";
exports.__esModule = true;
exports.Professional = void 0;
var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weigth, height, hairColor, eyeColor, race, isRetired, nationality, oscarNumber, profession) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weigth;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarNumber = oscarNumber;
        this.profession = profession;
    }
    Professional.prototype.MostrarAtributos = function () {
        return "Name: " + this.name + " \n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight + "\n" + "Height" + this.height + "\n" + "Hair Color: " + this.hairColor + "\n" + "Eyes Color: " + this.eyeColor + "\n" + "Race: " + this.race + "\n" + "Retired?: " + this.isRetired + "\n" + "Nationality: " + this.nationality + "\n" + "Oscars: " + this.oscarNumber + "\n" + "Profession: " + this.profession;
    };
    return Professional;
}());
exports.Professional = Professional;
