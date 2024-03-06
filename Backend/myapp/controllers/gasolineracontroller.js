const Gasolinera = require('../model/gasolineramodel');


exports.createGasolineras = async (req, res) => {

    try {
        let gasolinera;
        
        gasolinera = new Gasolinera(req.body);

        await gasolinera.save();
        res.send(gasolinera);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getGasolineras = async(req, res) =>{
    try {
        const gasolinera = await Gasolinera.find();
        res.json(gasolinera); //recibiendo en formato json
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
    }

exports.updateGasolinera = async (req, res) =>{
        try {
            const { nombre, ubicacion:{latitud, longitud} } = req.body;
            let gasolinera = await Gasolinera.findById(req.params.id); 
        if (!gasolinera) {
            res.status(404).json({msg: 'Gasolinera not found, try wiyh other user'})
        }
        gasolinera.nombre = nombre;
        gasolinera.ubicacion.latitud = latitud;
        gasolinera.ubicacion.longitud = longitud;

        gasolinera = await Gasolinera.findOneAndUpdate({_id : req.params.id}, gasolinera, {new:true})
        res.json(gasolinera);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
    }


exports.getGasolinera = async (req, res) => {

        try {
            let gasolinera = await Gasolinera.findById(req.params.id);
            if(!gasolinera){
                res.status(404).json({msg:'Gasolinera not found, try with other User'})
            }
            res.json(gasolinera);
        } catch (error) {
            console.log(error);
            res.status(500).send('There was an error on the server');
        }
    }

exports.deleteGasolinera = async (req, res) => {
        try {
    
            let gasolinera = await Gasolinera.findById(req.params.id);
    
            if(!gasolinera){
                res.status(404).json({msg:'Gas not found, try with other Gasolinera'})
            }
    
            await Gasolinera.findOneAndRemove({_id: req.params.id})
            res.json({msg:"Gasolinera deleted successfully"})
            
        } catch (error) {
            console.log(error);
            res.status(500).send('There was an error on the server');
        }
    }