const transporter = require('./mail-config');

const htmlMail = (to, subject, body, callback) => {

	const data = {
		from: 'contact@hackonload.com',
		to: to,
		subject: subject,
		html: body
	};

	transporter.sendMail(data, callback);
};

const textMail = (to, subject, body, callback) => {

	const data = {
		from: 'contact@hackonload.com',
		to: to,
		subject: subject,
		text: body
	};

	transporter.sendMail(data, callback);
};

module.exports = {
	textMail,
	htmlMail
};