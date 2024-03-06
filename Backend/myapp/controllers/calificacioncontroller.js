const Calificaciones = require('../model/calificacionmodel');



exports.createCalificacion = async (req, res) => {
    try {
        let calificaciones;

        calificaciones = new Calificaciones(req.body);
        await calificaciones.save();
        res.send(calificaciones);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }}


exports.getCalificaciones = async(req, res) =>{
        try {
            const calificaciones = await Calificaciones.find();
            res.json(calificaciones); 

        } catch (error) {
            console.log(error);
            res.status(500).send('There was an error on the server')
        }
}

exports.updateCalificacion = async (req, res) =>{
    try {
        const { puntuacion, comentario, fechaCalificacion } = req.body;
        let calificaciones = await Calificaciones.findById(req.params.id);

        if(!calificaciones){
            res.status(404).json({msg:'Califica not found, try with other Califi'})
        }
        calificaciones.puntuacion = puntuacion;
        calificaciones.comentario = comentario;
        calificaciones.fechaCalificacion = fechaCalificacion;

        calificaciones = await Calificaciones.findOneAndUpdate({_id : req.params.id}, calificaciones, {new:true})
        res.json(calificaciones);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

function editar(req, res){
    const puntuacion = req.body.puntuacion_editar
    const comentario = req.body.comentario_editar
    const fechaCalificacion = req.body.fechaCalificacion_editar
    Calificacion.findByIdAndUpdate(id, {nombre:nombre, puntuacion:puntuacion, comentario:comentario,fechaCalificacion:fechaCalificacion}).then(
        res.redirect('/')
    ).catch(err => res.status(500).send({err}))
}




exports.getCalificacion = async (req, res) => {
    try {
        let calificaciones = await Calificaciones.findById(req.params.id);
        if(!calificaciones){
            res.status(404).json({msg:'The Califi not found, try with other Califi'})
        }
        res.json(calificaciones);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteCalificacion = async (req, res) => {
    try {
        let calificaciones = await Calificaciones.findById(req.params.id);

        if(!calificaciones){
            res.status(404).json({msg:'Calif not found, try with other Calif'})
        }

        await Calificaciones.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Calif deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}
