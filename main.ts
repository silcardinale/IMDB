import {Professional} from "./professional";

let actress1 = new Professional("Julia Roberts",52,"Female",63,170,"Red","Brown","White",false,"USA",1,"actress");

let actress2 = new Professional("Rachel Mcadams",41,"Female",52,163,"Brown","Brown","White",false,"Canadian",0,"actress");

let actor1 = new Professional("Ryan Reynolds",43,"Male",72,188,"Blonde","Brown","White",false,"Canadian",0,"actor");

let actor2 = new Professional("Tom Hanks",64,"Male",75,183,"Brown","Brown","White",false,"USA",2,"actor");


console.log(actress1.MostrarAtributos() +"\n" + actress2.MostrarAtributos()+ "\n" +actor1.MostrarAtributos() + "\n" + actor2.MostrarAtributos());