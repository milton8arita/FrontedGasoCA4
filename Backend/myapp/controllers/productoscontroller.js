const Producto = require('../model/productosmodel');


exports.createProducto = async (req, res) =>{
    try {
        let producto;
        producto = new Producto(req, res);
        await producto.save();
        res.send(producto);

    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}

exports.getProductos = async(req, res) =>{
    try {
        const producto = await Producto.find();
        res.json(producto); 
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server')
    }
    }


exports.updateUsuario = async (req, res) =>{
        try {
    
            const { nombre, descripcion, precio } = req.body;
            let producto = await Producto.findById(req.params.id);
    
            if(!producto){
                res.status(404).json({msg:'Product not found, try with other Product'})
            }
            producto.nombre = nombre;
            producto.descripcion = descripcion;
            producto.precio = precio;
    
            producto = await Producto.findOneAndUpdate({_id : req.params.id}, producto, {new:true})
            res.json(producto);
    
        } catch (error) {
            console.log(error);
            res.status(500).send('There was an error on the server');
        }
    }    


exports.getProducto = async (req, res) => {

    try {
        let producto = await Producto.findById(req.params.id);
        if(!producto){
            res.status(404).json({msg:'Produc not found, try with other User'})
        }
        res.json(producto);
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}


exports.deleteProducto = async (req, res) => {
    try {

        let producto = await Producto.findById(req.params.id);

        if(!producto){
            res.status(404).json({msg:'Product not found, try with other product'})
        }

        await Producto.findOneAndRemove({_id: req.params.id})
        res.json({msg:"Produc deleted successfully"})
        
    } catch (error) {
        console.log(error);
        res.status(500).send('There was an error on the server');
    }
}
