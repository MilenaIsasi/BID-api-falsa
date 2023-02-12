
const { faker } = require('@faker-js/faker');


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

console.log(usuario);
console.log(companies);

const newUserCompany =  (req, res) => {
    res.json( [usuario , companies]);
};

module.exports= {
    newUserCompany
}