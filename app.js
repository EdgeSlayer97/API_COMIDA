const express=require('express');//importar express
const app = express();//uso de express
const port=3500;//definir el puerto
const comidaRouter = require('./routes/comidaRouter');

app.use(express.urlencoded({extended:false}));
app.use(express.json);

app.use(morgan('dev'));//Configura morgan para su uso unicamente en desarrollo

app.use('/API', comidaRouter);

app.use((req, res) => {
    console.log('End Point no encontrado')
    res.status(404).json({ mensaje: 'Ruta no encontrada'});
});

app.listen(port, () => {//el app listen ayuda a escuchar el puerto
    console.log('Listening on port '+port+' wiiiiiiiiii si jaleishon');//se envia un mensaje a la consola para saber que se está usando el puerto
});