"use strict";
/* En TypeScript se puede definir una variable con multiple tipos de datos: Union Type
 * - Se usa el simbolo de pipe ('|') entre los tipos
 */
// 10, '10'
//let idUser: number | string;
idUser = 10;
idUser = "10";
// Buscar username dado un ID
function getUsernameById(id) {
    // logica de negocio, find the user
    return "luixaviles";
}
getUsernameById(20);
getUsernameById("20");
//let idUser: IdUser;
idUser = 10;
idUser = "10";
// Buscar username dado un ID
//function getUsernameById(id: IdUser): Username {
// logica de negocio, find the user
//return "luixaviles";
//}
getUsernameById(20);
getUsernameById("20");
// let smallPicture: SquareSize = '200x200'; // --> Error
let smallPicture = "100x100";
let mediumPicture = "500x500";
