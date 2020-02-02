var express= require('express')
const app =express()
app.set('view engine','ejs');
app.use('/assets',express.static('assets'));
const path=require('path');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

var {home,loader}=require('./getroutes')
var {search}=require('./postroutes')

app.get('/',home)

app.get('/loader',loader)



loader_string='<div id="loading" class="preloader-wrapper big active" style="visibility: visible;top:50;left:50;"><div class="spinner-layer spinner-blue-only"><div class="circle-clipper left"> <div class="circle"></div></div><div class="gap-patch"><div class="circle"></div></div><div class="circle-clipper right">  <div class="circle"></div>  </div></div></div> <link rel="stylesheet" href="/assets/css/materialize.min.css"><script src="/assets/js/materialize.min.js"></script><link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">'


button='<a href="/perform"><button  class="btn" >Ok</button></a> '


app.get('/perform',urlencodedParser, async(req,res)=>{
   
    res.write(loader_string)

    async function write(){
        await new Promise((resolve,reject)=> {resolve(res.write(loader_string));
                
        })
    }

    
    async function loop(){
        await new Promise((resolve,reject)=>{
                for(var i=0;i<100000;i++)console.log(i);

        })
        
    }

    
    async function remove(){
        await new Promise(resolve=>{res.write('<script> document.getElementById("loading").style.visibility="hidden"; </script>');})
    }


    async function button(){
        await new Promise(resolve=>{res.write(button);res.end()})
    }

    write().then((resolve,reject)=>{
        console.log("YES")
    })
    
       
  
})

app.post('/search',urlencodedParser,search)
app.listen(process.env.PORT || 9201)
//270985
