
const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );


let usuario = [];
let companies = [];

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

function crearEmpresa(){
  return{
    _id : faker.datatype.uuid(),
    name : faker.company.name(),
    streetAddress : faker.address.streetAddress(),
    city : faker.address.city(),
    state : faker.address.state(),
    zipCode : faker.address.zipCode(),
    country : faker.address.country(),
  }
}

function inicio(cantidad){
    for(var i = 0; i < cantidad ; i++){
      usuario.push(crearUsuario());
      companies.push(crearEmpresa());
    };
};

inicio(1);

// console.log(usuario);
// console.log(companies);
// console.log(userCompanies);



//Devulve nuevo usuario

app.get("/api/users/new", (req, res) => {
  res.json( usuario );
});

//devuelve nueva compañia

app.get("/api/companies/new", (req, res) => {
  res.json( companies );
});

app.get("/api/user/company", (req, res) => {
  res.json( [usuario , companies]);
});


app.listen( port, () => console.log(`Listening on port: ${port}`) );

















