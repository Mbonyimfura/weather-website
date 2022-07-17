 const path= require('path')
 const express=require('express');
 const hbs=require('hbs');
 const geocode=require('./utils/geocode');
 const forecast=require('./utils/forecast')
//const { title } = require('process');
 const app=express();
 const port=process.env.PORT ||3000
 //Define path for Express config
 const publicDirectoryPath=path.join(__dirname,'../public')
 const viewPath=path.join(__dirname,'../templates/views')
 const partialsPath=path.join(__dirname,'../templates/partials');
 hbs.registerPartials(partialsPath)
 //Setup handlebars and view location
 app.set('view engine','hbs')
 app.set('views',viewPath)
 app.get('',(req,res)=>{
   res.render('index',{
      title:'Weather',
      name:' tresor'
   })
 })
 app.get('/about',(req,res)=>{
   res.render('about',{
      title:'About',
      name:'Created by Shaun',
      age:42
   })
 })
 app.get('/help',(req,res)=>{
   res.render('help',{
      pageTitle:'Help page',
      question:'please provide your questions',
      title:'Help title',
      name:'Xerox'
   })
 })
 app.use(express.static(publicDirectoryPath))
 app.get('/weather',(req,res)=>{
   if(!req.query.address){
      return res.send({
         error:'please provide the addess'
      })
   }
   geocode(req.query.address,(error,{latitude,longitude,location}={})=>{
      if(error){
         return res.send({error})
      }
      forecast(latitude,longitude,(error,forecastData)=>{
      if(error){
         return res.send({error})
      }
      res.send({
         forecast:forecastData,
         location,
         address:req.query.address
      })
      })
  
   })
 
 })
 app.get('/products',(req,res)=>{
  if(!req.query.key){
  return res.send({
   error:'please provide a search term'
  })
  }
  console.log(req.query.key)
  res.send({
   products:{}
  })
  
 })
 app.get('/help/*',(req,res)=>{
   res.render('404-page',{
      title:404,
      name:'tresor',
      errorMessage:'Help article not found'
      
   })
 })
app.get('*',(req,res)=>{
   res.render('404-page',{
      title:404,
      name:'tresor',
      errorMessage:'My page not found'
   })
})
 app.listen(port,()=>{
    console.log('the server is starting up on port `${port}` ')
 })
