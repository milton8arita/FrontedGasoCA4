const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const eventosSchema = new Schema({
    id_gasolinera: [{ type: Schema.Types.ObjectId, ref: 'gasolineras' }] ,
    fecha_inicio: {type: Date, require: true},
    fecha_cierre: {type: Date, require: true},
    descripcion: {type: String, require: true}
})


module.exports = mongoose.model('eventos', eventosSchema);
