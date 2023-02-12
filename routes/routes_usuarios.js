const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');
const { newUser } = require("../controllers/usuarios");


let usuario = [];

function crearUsuario(){
    return {
        _id : faker.datatype.uuid(),
        name : faker.name.firstName(),
        lastname : faker.name.lastName(),
        phone : faker.phone.number(),
        email : faker.internet.email(),
        password : faker.internet.password(),
    };
};
function inicio(cantidad){
    for(var i = 0; i < cantidad ; i++){
    usuario.push(crearUsuario());
    };
};

inicio(1);

console.log(usuario)

app.get("/api/users/new", newUser)

module.exports = app;