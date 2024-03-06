const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const usuarioSchema = new Schema({
    username: {type: String, required: true},
    email: {type: String, unique: true, required: true}, //para que el usuario no sea duplicado
    password: {type: String, required: true},
    roles: {type: Array, required: true},
    calificaciones: [{ type: Schema.Types.ObjectId, ref: 'calificaciones' }] 

});


module.exports = mongoose.model('usuarios', usuarioSchema);


