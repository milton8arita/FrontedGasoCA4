const Usuario = require('../model/usuariomodel');


exports.createUsuario = async (req, res) => {

    try {
        let usuario;
        //Create Usuario
        usuario = new Usuario(req.body);

        await usuario.save();
        res.send(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getUsuarios = async(req, res) =>{
try {
    const usuario = await Usuario.find();
    res.json(usuario); //recibiendo en formato json
} catch (error) {
    console.log(error);
    res.status(500).send('There was an error on the server')
}
}

exports.updateUsuario = async (req, res) =>{
    try {

        const { username, email, password, roles } = req.body;
        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'User not found, try with other user'})
        }
        usuario.username = username;
        usuario.email = email;
        usuario.password = password;
        usuario.roles = roles;

        usuario = await Usuario.findOneAndUpdate({_id : req.params.id}, usuario, {new:true})
        res.json(usuario);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.getUsuario = async (req, res) => {

    try {
        let usuario = await Usuario.findById(req.params.id);
        if(!usuario){
            res.status(404).json({msg:'User not found, try with other User'})
        }
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.deleteUsuario = async (req, res) => {
    try {

        let usuario = await Usuario.findById(req.params.id);

        if(!usuario){
            res.status(404).json({msg:'User not found, try with other product'})
        }

        await Usuario.findOneAndRemove({_id: req.params.id})
        res.json({msg:"User deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}
