// ************************************* Date  *************************************
let current = new Date();
let cDate = current.getFullYear() + '/' + (current.getMonth() + 1) + '/' + current.getDate();
let cTime = current.getHours() + ":" + current.getMinutes();
let dateTime = cDate + ' ' + cTime;
console.log(dateTime);

// ************************************* API  *************************************
const { response } = require("express");
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");



const https = require("https");
const { json } = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function(req,res){

        res.sendFile(__dirname + "/index.html");
    });   

app.post("/", function(req,res){
    
    const apikey = "579b464db66ec23bdd0000018bd47eced35545527e84f40b7eb6cf1b";
    const url = "https://api.data.gov.in/resource/fced6df9-a360-4e08-8ca0-f283fc74ce15?api-key="+ apikey +"&format=json"

    // https://api.data.gov.in/resource/fced6df9-a360-4e08-8ca0-f283fc74ce15?api-key=579b464db66ec23bdd0000018bd47eced35545527e84f40b7eb6cf1b&format=json&offset=0&limit=10

    https.get(url, function(response){
        // console.log(response);
        console.log(response.statusCode);
        response.setEncoding('utf8');

        response.on("data", function(data){

            // console.log(data);
            // const bdata = JSON.stringify(data)
            // const bloodData = JSON.parse(bdata)
    
            // console.log(bloodData);
            // console.log(typeof(bloodData));


            // res.write(data)

        //     const state = bloodData.records[0]._blood_bank_name;
                                
        //                         const city = field[4].name;
        //                         const contact = field[7].name;
        //                         const mob = field[8].name;
        //                         const web = field[12].name;
        //                         const comp_available = field[19].name;

        //                         res.write("<p>Name: " + name + "</p>");
        //     res.write("<p>state: " + state + "</p>");
        //                         res.write("<p>city: " + city + "</p>");
        //                         res.write("<p>contact: " + contact + "</p>");
        //                         res.write("<p>Website: " + web + "</p>");
        //                         res.write("<p>Component Available: " + comp_available + "</p>");
    
        // res.send();
    })
})
})

app.get("/index", function(req, res){

    res.sendFile(__dirname + "/index.html");
});

app.get("/data", function(req, res){

    res.sendFile(__dirname + "/data.html");
});

app.get("/help", function(req, res){

    res.sendFile(__dirname + "/help.html");
});

app.get("/ps", function(req, res){

    res.sendFile(__dirname + "/ps.html");
});

app.get("/register", function(req, res){

    res.sendFile(__dirname + "/register.html");
});

app.get("/login", function(req, res){

    res.sendFile(__dirname + "/login.html");
});

app.get("/contacts", function(req, res){

    res.sendFile(__dirname + "/contacts.html");
});
app.listen(3000, function(){
    console.log("Server Started");
});