//Express setting
const express=require('express')
const app=express();

//Config related setting
const config = require('config');
const appconfig= config.get('App.Config');
const port=appconfig.port;
const env_name=appconfig.env_name;

//Set routers
const clinic=require('./router/clinic');
const hospital=require('./router/hospital');

app.use(express.json())
app.use('/api/clinic',clinic)
app.use('/api/hospital',hospital)
app.listen(port,()=>console.log(`Nodejs on ${env_name} is listening to ${port}`))