const mongoose = require('mongoose');
const url = 'mongodb://127.0.0.1:27017/Proyecto';

const DBconnection = async () => {

    try {

        await mongoose.connect(url, {
            //ESTAS OPCIONES EN LA NUEVA VERSION DE MONGO NO TIENEN FUNCIONAMIENTO
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('BD Conectada');
        
    } catch (error) {
        console.log(error);
        process.exit(1); // Detenemos la app
    }

}

module.exports = DBconnection