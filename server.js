const express = require('express')
const app = express()

//importar conx mongodb
const archivoDB = require('./conexion')
//importacion de archivos de rutas 

const rutausuario = require('./rutas/usuario')

//importacion del archivo de rutas y modelos

//const rutausuario = require('body-parser')
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:'true'}))

app.use('/api/usuario', rutausuario)


app.get('/',(req, res) => {
    res.end ('Bienvenidos Al servidor node')

})
//configuracion del server
app.listen(5000, function(){
    console.log('El servidor corre')
})

