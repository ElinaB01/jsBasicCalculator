const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req, res) {
    //console.log(req.body);
    let num1 = Number(req.body.num1);
    let num2 = Number(req.body.num2);
    let sum = Number(num2 / ((num1/100) * (num1/100)));
    let fixed = Number(parseFloat(sum).toFixed(1));
    let status;

    if (fixed < 19)
        status = "Võiksid kaalu juurde võtta!";
    else if (fixed >= 19 && fixed < 25)
        status = "Oled heas vormis!";
    else if (fixed >= 25 && fixed < 30)
        status = "Võiksid kaalust alla võtta!";
    else if (fixed >= 30)
        status = "Sul on tõsiselt vaja oma ülekaalu vähendamisega tegeleda!";
    else status = "Something went wrong displaying the status message";

    // switch (fixed) {
    //     case (fixed < 19):
    //         status = "Võiksid kaalu juurde võtta!";
    //         break;
    //     case (fixed >= 19 && fixed < 25):
    //         status = "Oled heas vormis!";
    //         break;
    //     case (fixed >= 25 && fixed < 30):
    //         status = "Võiksid kaalust alla võtta!";
    //         break;
    //     case (fixed >= 30):
    //         status = "Sul on tõsiselt vaja oma ülekaalu vähendamisega tegeleda!";
    //         break;
    //     default:
    //         status = "Something went wrong displaying the status message";
    //         break;
    // }
    res.send(`Sinu kehamassiindeks on ${fixed} (kg/m2). Pikkus on ${num1} (cm) ja kaal on ${num2} (kg). ${status}`);
});

app.listen(5000, function() {
    console.log("Server is running on port 5000");
});