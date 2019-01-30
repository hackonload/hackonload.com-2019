const nodemailer = require("nodemailer");
const hbs = require('nodemailer-express-handlebars');

let transporter = nodemailer.createTransport({
	sendmail: true,
	newline: 'unix',
	path: '/usr/sbin/sendmail'
});

const hbsOptions = {
	viewPath: 'mail/templates/',
	extName: '.hbs'
};

transporter.use('compile', hbs(hbsOptions));

module.exports = transporter;

