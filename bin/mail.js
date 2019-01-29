const mailer = require("./../mail/mailer");

const callback = (err, info) => {
	if (err) {
		console.log(err);
	} else {
		console.log(info.envelope);
		console.log(info.messageId);
	}
};

mailer.htmlMail("anandpushkar088@gmail.com", "Test mail", "<h1>Welcome</h1><p>That was easy!</p>", callback);

mailer.textMail("anandpushkar088@gmail.com", "Test mail", "Text", callback);