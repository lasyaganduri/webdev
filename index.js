const express = require('express');
const app = express();
const path = require('path');
// const members = require('./Members');
const logger = require('./middleware/logger');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors')
// const members = require('./members');

const jsonParser = bodyParser.json()
//data parsing

/*app.use(express.urlencoded({
    extended: false

}))

app.use(express.json());

app.post('/email',(req,res)=>{

        res.json({message: 'message recieved'});

});*/



// static folder

app.use(express.static(path.join(__dirname,'files')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Credentials", true);
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
  next();
});
app.get('/api/members', (req,res) => {
        

        res.json(req.body);    
});


app.post('/api/members', (req,res) =>{

    
   
    let rawdata = fs.readFileSync('./files/data/Members.json');
    let members = JSON.parse(rawdata);
    console.log(members);
    console.log(req.body);
    if(members.length>0){
        id = members[members.length-1].id + 1;
    }
    else{
        id=1;
    }

    usr = req.body;
    usr.id=id;
    members.push(usr);
    const FileSystem = require("fs");
    FileSystem.writeFileSync('./files/data/Members.json', JSON.stringify(members), (error) => {
    if (error)
     throw error;
    });
    sendMail(usr.lastName, usr.email);
    res.send(members);

     
});

app.use(logger);


/*app.get('/',(req,res) => {

        res.sendFile(path.join(__dirname,'files','index.html'));


});*/


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log("server is running on port "+PORT));


function sendMail(name, email_id){
    var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'srilasyaganduri@gmail.com',
    pass: 'boiftfgbzpsrpcji'
  }
});

var mailOptions = {
  from: 'srilasyaganduri@gmail.com',
  to: email_id,
  subject: 'Feedback response',
  text: 'Dear '+name+', Thank you for your feedback! ??? From srilasya @ https://siu-webdev.herokuapp.com/'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
}