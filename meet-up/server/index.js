const express = require('express');
const axios = require('axios');
const url = require('url');
const path = require('path');
const fs = require('fs');
var admin = require("firebase-admin");
var serviceAccount = require("./meet-up-hackathon-firebase-adminsdk-qt4mo-ba0b44d904.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
    databaseURL:" https://meet-up-hackatho.firebaseio.com"
});

var app = express();

// Allows you to set port in the project properties.
app.set('port', process.env.PORT || 3001);

app.get('/firebase/notification/:registrationToken', (req, res) => {
    const  registrationToken = req.params.registrationToken
    let message = {
        notification:{
            title: 'Wooohooo!',
            body: 'Someone subscribe to your event'
        },
        token: registrationToken
    }

      admin.messaging().send(message)
      .then( response => {

       res.status(200).send("Notification sent successfully")

      })
      .catch( error => {
          console.log(error);
      });

});

app.listen(app.get('port'), () => {
    console.log('Listening on ' + app.get('port'));
});