const { faker } = require('@faker-js/faker');
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

console.log(usuario);

const newUser = (req, res) => {
    res.json( usuario );
};

module.exports = {
    newUser
}