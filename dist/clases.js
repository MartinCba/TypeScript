"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
class Picture {
    constructor(id, title, orientation) {
        this.id = id;
        this.title = title;
        this.orientation = orientation;
    }
    //Comportamiento de nuestra clase que estara definido por funciones
    toString() {
        return `[id ${this.id},
            title: ${this.title},
            orientation: ${this.orientation}]`;
    }
}
class Album {
    //Usamos el constructor el cual nos permitira crear objetos de esta clase
    constructor(id, title) {
        this.id = id;
        this.title = title;
        this.pictures = [];
    }
    addPicture(picture) {
        this.pictures.push(picture);
    }
}
//Creamos un nuevo a partir de la instancia de la clase
const album = new Album(1, "personal pictures");
const picture = new Picture(1, "Platzi session", PhotoOrientation.Panorama);
album.addPicture(picture);
console.log(album);
//accediendo a los miembros publicos
picture.id = 100; //public
picture.title = "Another title"; //public
album.title = "Personal Activities";
console.log("Albun: ", album);
