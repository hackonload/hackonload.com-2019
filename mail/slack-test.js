const mailer = require("./mailer");

const callback = (err, info) => {
	if (err) {
		console.log(err);
	} else {
		console.log(info.envelope);
		console.log(info.messageId);
	}
};

mailer.sendSlackInviteEmail("Pushkar", "anandpushkar088@gmail.com");