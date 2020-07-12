export class Professional{
    public name:string;
    public age:number;
    public genre:string;
    public weight:number;
    public height:number;
    public hairColor:string;
    public eyeColor:string;
    public race:string;
    public isRetired:boolean;
    public nationality:string;
    public oscarNumber:number;
    public profession:string;

    constructor(name:string, age:number, genre:string, weigth:number, height:number, hairColor:string,eyeColor:string,race:string, isRetired:boolean,nationality:string, oscarNumber:number,profession:string){

        this.name = name;
        this.age  = age;
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

    public MostrarAtributos():string{
                   
        return "Name: " + this.name + " \n" + "Age: " + this.age + "\n" + "Genre: " + this.genre + "\n" + "Weight: " + this.weight + "\n" + "Height" + this.height + "\n" + "Hair Color: " + this.hairColor + "\n" + "Eyes Color: " + this.eyeColor + "\n" + "Race: " + this.race +"\n" +"Retired?: " + this.isRetired + "\n" + "Nationality: " +  this.nationality + "\n" + "Oscars: " + this.oscarNumber + "\n"+ "Profession: " + this.profession;
    }
}

export class Movie {
    public title:string;
    public releaseYear:number;
    public actors:string;
    public nationality:string;
    public director:string;
    public writer:string;
    public language:string;
    public platform:string;
    public isMCU:boolean;
    public mainCharacterName:string;
    public producer:string;
    public distributor:string;
    public genre:string;

    constructor (title:string, nationality:string, releaseYear:number,genre:string){

        this.title = title;
        this.nationality = nationality;
        this.releaseYear = releaseYear;
        this.genre = genre;
        
    
        
    }
    public filmData():string{
        
        return this.title + " " + this.nationality + " " + this.releaseYear + " " + this.genre; 
    }
}

export class IMDB{
    public peliculas: Movie[];

    constructor(peliculas:Movie[]){
        this.peliculas = peliculas;
    }

    
}