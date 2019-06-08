const rp = require("request-promise");
const recaptchaErrors = require("./error");
const errorHandler = require("./../error-handler");

const RECAPTCHA_URL = "https://www.google.com/recaptcha/api/siteverify";
const recaptcha = async (resp) => {

	const options = {
		method: "POST",
		uri: RECAPTCHA_URL,
		form: {
			secret: process.env.RECAPTCHA_SITE_SECRET,
			response: resp
		},
		json: true
	};

	rp(options).then( (body) => {
		console.log(body);
		if (body.success !== true) {

			const errors = body["error-codes"];
			errors.forEach( (error) => {
				const err = recaptchaErrors[error];
				if (err.user_err) {
					throw new Error(err);
				} else {
					errorHandler.report(err);
					throw new Error("Some error occurred. This shouldn't have happened. Hold on we'll fix this ASAP.");
				}
			});
		}
	}).catch((err) => {
		console.log(err);
		errorHandler.report(err);
		throw new Error("Unable to contact recaptcha server. Try again later.");
	});

};

module.exports = recaptcha;
