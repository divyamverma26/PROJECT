const express=require('express');
const app=express();
const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended:false}));

const { response } = require('express');
const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/Myclient");
const cSchema=new mongoose.Schema({
    country:String,
    email:String,
    pass:String,
    user:String,
    number:Number
});
const Client=mongoose.model('client',cSchema);

const cookieSession = require('cookie-session');
app.use(cookieSession({
    name:'session',
    keys:['key1','key2','key3'],
    secret:'key1',//used for encryption
    maxAge:15000
}));

app.use(express.static('public'));
app.get('/',function(req,res){  //do create a query string in url after submitting the form
    if(req.session.views){
        req.session.views++
        view=req.session.views
        //console.log(view);
        console.log("Number of views = "+view);
        res.sendFile(__dirname+'/public/'+'home.html') 
    }
    else{
        req.session.views=1;
        console.log("You are a first time user");
        res.sendFile(__dirname+'/public/'+'home.html') 
    }
})

app.post('/apply',function(req,res){   //no query string this time in the url
    let respon={
        country:req.body.name,
        email:req.body.email,
        pass:req.body.pass,
        user:req.body.user,
        number:req.body.number
    }
    let data= new Client({country:respon.country,email:respon.email,pass:respon.pass,user:respon.user,number:respon.number})
    data.save()
    .then(doc=>{
        console.log(doc);
    })
    .catch(err=>{
        console.error(err)
    })
    console.log("Sign-up successful");
    res.sendFile(__dirname+'/public/'+'home.html')
})

app.get('/apply',function(req,res){   //no query string this time in the url
    let respon={
        user1:req.body.user1,
        pass1:req.body.pass1,
    }

    Client.find({user:respon.user1})
    .then(doc=>{
        console.log(doc);
    })
    .catch(err=>{
        console.error(err);
    })
    console.log("Log-in successful");
    res.sendFile(__dirname+'/public/'+'home.html')
})

app.listen(2000);