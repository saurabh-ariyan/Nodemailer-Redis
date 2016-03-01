/*
* @Author: saurabh-ariyan
* @Date:   2016-02-29 18:43:32
* @Last Modified by:   saurabh-ariyan
* @Last Modified time: 2016-03-01 14:49:12
*/

'use strict';


var nodemailer = require('nodemailer');
var amqp = require('amqplib/callback_api');

var email = {};
var configAuth ={};
var emailConfig = require('./configAuth');
configAuth ['service'] = emailConfig['service'];
configAuth['user'] = emailConfig['auth']['user'];
configAuth['pass'] = emailConfig['auth']['pass'];

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = '<queue_name>';

    ch.assertQueue(q, {durable: false});
    ch.consume(q, function(msg) {
      console.log(JSON.parse(msg.content)['params']);
      email = JSON.parse(msg.content)['params'] ;

      var transport = nodemailer.createTransport({
            service: configAuth['service'],
            auth: {
                user: configAuth['user'],
                pass: configAuth['pass']
            }
        });

    transport.sendMail(email, function(error){
      //console.log(email)
    if (error) console.log(error && error.stack);
    else console.log("check Email");
    });
    });

  })
})
