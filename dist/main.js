"use strict";
console.log("Welcome Martín");
//Number
//Explicito
let phone;
phone = 1;
phone = 5434567;
//phone = "hola"; //Error!
//Inferido
let phoneNumber = 351467805;
phoneNumber = 123;
//phoneNumber = true; //Error!
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
// Tipo: Boolean
// Tipado Explicito
let isPro;
isPro = true;
//isPro = 1; //error
// Inferido
let isUserPro = false;
isUserPro = true;
//isUserPro = 0; // Error!
// Strings
let userName = "Martin";
userName = "Hernandez";
//userName = 1;//Error!
// Template String
// Uso de back-Tick Alt + 96
let userInfo;
userInfo = `
    User info:
    username: ${userName}
    firsname: ${userName + 'aviles'}
    phone: ${phone}
    isPro: ${isPro}
`;
console.log('userInfo', userInfo);
