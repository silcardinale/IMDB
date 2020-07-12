"use strict";
exports.__esModule = true;
var professional_1 = require("./professional");
var actress1 = new professional_1.Professional("Julia Roberts", 52, "Female", 63, 170, "Red", "Brown", "White", false, "USA", 1, "actress");
var actress2 = new professional_1.Professional("Rachel Mcadams", 41, "Female", 52, 163, "Brown", "Brown", "White", false, "Canadian", 0, "actress");
var actor1 = new professional_1.Professional("Ryan Reynolds", 43, "Male", 72, 188, "Blonde", "Brown", "White", false, "Canadian", 0, "actor");
var actor2 = new professional_1.Professional("Tom Hanks", 64, "Male", 75, 183, "Brown", "Brown", "White", false, "USA", 2, "actor");
console.log(actress1.MostrarAtributos() + "\n" + actress2.MostrarAtributos() + "\n" + actor1.MostrarAtributos() + "\n" + actor2.MostrarAtributos());
