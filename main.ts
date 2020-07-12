import {Professional} from "./professional";
import {Movie} from "./professional";
import {IMDB} from "./professional";

let actress1 = new Professional("Julia Roberts",52,"Female",63,170,"Red","Brown","White",false,"USA",1,"actress");

let actress2 = new Professional("Rachel Mcadams",41,"Female",52,163,"Brown","Brown","White",false,"Canadian",0,"actress");

let actor1 = new Professional("Ryan Reynolds",43,"Male",72,188,"Blonde","Brown","White",false,"Canadian",0,"actor");

let actor2 = new Professional("Tom Hanks",64,"Male",75,183,"Brown","Brown","White",false,"USA",2,"actor");


console.log(actress1.MostrarAtributos() +"\n" + actress2.MostrarAtributos()+ "\n" +actor1.MostrarAtributos() + "\n" + actor2.MostrarAtributos());

let movie1 = new Movie("Pretty Woman","Hollywood",1990,"Romantic Comedy");
let movie2 = new Movie("Naufrago","Hollywood",2000,"Drama");
let movie3 = new Movie("Deadpool","Hollywood",2016,"Action, Adventure, Comedy");

console.log(movie1.filmData());


let peliculas= new IMDB([movie1,movie2,movie3]);

console.log(peliculas);

