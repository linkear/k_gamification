const golesCtrl = {}

const hellowda = require('../database')

golesCtrl.renderGoles = (req,res) =>{
    res.render('goles/golesadd') 
}

golesCtrl.addGoles = async(req,res) =>{
    const {gol,jugador,amarillas,rojas,gol1,jugador1,amarillas1,rojas1} = req.body;

    const newgol = {
        gol,
        jugador,
        amarillas,
        rojas,
        gol1,
        jugador1,
        amarillas1,
        rojas1,
        usuario:req.user.id
    };
    await hellowda.query('INSERT INTO estadisticas set ?',[newgol]);
    req.flash('guardado exitosamente');
    res.redirect('/goles/list')
}

golesCtrl.renderlist = async(req,res) =>{
    const arreglo = await hellowda.query('SELECT * FROM estadisticas WHERE usuario=?',[req.user.id])
    res.render('goles/goleslist',{arreglo})
}
module.exports= golesCtrl