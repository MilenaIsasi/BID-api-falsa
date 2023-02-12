const { faker } = require('@faker-js/faker');


let companies = [];

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
    companies.push(crearEmpresa());
    };
};
inicio(1);
console.log(companies)

const newCompanies = (req, res) => {
    res.json( companies );
    };

module.exports = {
    newCompanies
}