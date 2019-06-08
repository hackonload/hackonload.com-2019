const recaptchaErrors = {
	"missing-input-secret": {
		desc: "The secret parameter is missing.",
		user_err: false
	},
	"invalid-input-secret": {
		desc: "The secret parameter is invalid or malformed.",
		user_err: false
	},
	"missing-input-response": {
		desc: "The response parameter is missing.",
		user_err: true
	},
	"invalid-input-response": {
		desc: "The request is invalid or malformed.",
		user_err: true
	},
	"timeout-or-duplicate": {
		desc: "The response is no longer valid: either is too old or has been used previously.",
		user_err: true
	}
};

module.exports = recaptchaErrors;
