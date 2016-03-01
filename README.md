# Nodemailer-Redis
Nodemailer Consumer for Redis Queue

	1. The 'configAuth' file contains the credentials for the sender's email
	2. The 'send.js' file is the rabbit producer for the email; this email is published on a particular queue.
	3. The email published on the AMQP contains the all the details.  
	4. The 'mailer.js' consumes the rabbit queue message and also emails to the to field.

For this module to work with Gmail, you need to allow [access for less secure apps] (https://www.google.com/settings/security/lesssecureapps) in the sender's account.
