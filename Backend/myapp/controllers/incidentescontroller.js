const Incidente = require('../model/incidentesmodel');

exports.createIncidente = async( req, res) =>{
    try {
        let incidentes;
        //Create Usuario
        incidentes = new Incidente(req.body);

        await incidentes.save();
        res.send(incidentes);
    }   catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getIncidentes = async(req, res) =>{
    try {
        const incidente = await Incidente.find();
        res.json(incidente);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}

exports.updateIncidente = async (req, res) =>{
    try {
        const { tipoIncidente, descripcion, fecha, accionTomada } = req.body;
        let incidente = await Incidente.findById(req.params.id);

        if(!incidente){
            res.status(404).json({msg:'Incid not found, try with other Incid'})
        }
        incidente.tipoIncidente = tipoIncidente;
        incidente.descripcion = descripcion;
        incidente.fecha = fecha;
        incidente.accionTomada = accionTomada;

        incidente = await Incidente.findOneAndUpdate({_id : req.params.id}, incidente, {new:true})
        res.json(incidente);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getIncidente = async (req, res) => {
    try {
        let incidente = await Incidente.findById(req.params.id);
        if(!incidente){
            res.status(404).json({msg:'Incidente not found, try with other Inci'})
        }
        res.json(incidente);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteIncidente = async (req, res) => {
    try {
        let incidente = await Incidente.findById(req.params.id);

        if(!incidente){
            res.status(404).json({msg:'Inci not found, try with other Inci'})
        }
        await Incidente.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Inci deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

