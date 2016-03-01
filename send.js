/*
* @Author: saurabh-ariyan
* @Date:   2016-02-29 12:40:28
* @Last Modified by:   sariyan
* @Last Modified time: 2016-02-29 21:04:31
*/


var amqp = require('amqplib/callback_api');
var email =
 '{"params" :{"from":"from_email@gmail.com","to":"to_email@anything.com","subject":"Hello World!","text":"Hello world ","html":"<i> This is a test mail </i> "}}'

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'queue_name';

    ch.assertQueue(q, {durable: false});
    ch.sendToQueue(q, new Buffer(email));
    console.log(" [x] Sent ", email);
 });
  setTimeout(function() { conn.close(); process.exit(0) }, 500);
});

