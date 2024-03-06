const Evento = require('../model/eventosmodel');

exports.createEvento = async (req, res) => {
    try {
        let evento;
        evento = new Evento(req.body);

        await evento.save();
        res.send(evento);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getEventos = async(req, res) =>{
    try {
        const evento = await Evento.find();
        res.json(evento);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
}

exports.updateEvento = async (req, res) =>{
    try {
        const { id_gasolinera, fecha_inicio, fecha_cierre, descripcion } = req.body;
        let evento = await Evento.findById(req.params.id);

        if(!evento){
            res.status(404).json({msg:'Event not found, try with other event'})
        }
        evento.id_gasolinera = id_gasolinera;
        evento.fecha_inicio = fecha_inicio;
        evento.fecha_cierre = fecha_cierre;
        evento.descripcion = descripcion;

        evento = await Evento.findOneAndUpdate({_id : req.params.id}, evento, {new:true})
        res.json(evento);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getEvento = async (req, res) => {

    try {
        let evento = await Evento.findById(req.params.id);
        if(!evento){
            res.status(404).json({msg:'Event not found, try with other event'})
        }
        res.json(evento);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteEvento = async (req, res) => {
    try {

        let evento = await Evento.findById(req.params.id);

        if(!evento){
            res.status(404).json({msg:'Event not found, try with other evento'})
        }

        await Evento.findOneAndRemove({_id: req.params.id})
        res.json({msg:"evento deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


