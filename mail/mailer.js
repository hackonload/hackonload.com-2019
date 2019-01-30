const transporter = require('./mail-config');

const htmlMail = (to, subject, body, callback) => {

	const data = {
		from: "OnLoad Hackathon <contact@hackonload.com>",
		to: to,
		subject: subject,
		html: body
	};

	transporter.sendMail(data, callback);
};

const textMail = (to, subject, body, callback) => {

	const data = {
		from: "OnLoad Hackathon <contact@hackonload.com>",
		to: to,
		subject: subject,
		text: body
	};

	transporter.sendMail(data, callback);
};

const sendSlackInviteEmail = (toName, toEmail) => {

	const data = {
		from: "OnLoad Hackathon <contact@hackonload.com>",
		to: toEmail,
		subject: "Slack Invite",
		template: 'slack-invite',
		context: {
			name: toName,
		}
	};

	return transporter.sendMail(data);
};

module.exports = {
	textMail,
	htmlMail,
	sendSlackInviteEmail
};