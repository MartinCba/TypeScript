"use strict";
// Tipo explicito
let idUser;
idUser = 1; // number
idUser = "1"; // string
idUser = true; // boolean
console.log("idUser", idUser);
// Tipo Inferido
let anotherId;
anotherId = 1;
anotherId = "1";
console.log("anotherId", anotherId);
let surprise = "Hello typeScript";
//surprise.sayHello(); //Error!
const res = surprise.substring(6); //Error!
console.log("res", res);
