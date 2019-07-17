const express = require('express');
const router = express.Router();
const faqs = require("./../data/faqs");

const remindRequest = require("./../services/remind");
const referralRequest = require("./../services/referral");

/* GET home page. */
router.get('/', function (req, res, next) {
	const data = {
		title: "OnLoad",
		faqs: faqs
	};
	res.render('index', data);
});

router.post("/remind", async (req, res) => {

	const response = {};

	try {
		await remindRequest(req);
		response["success"] = true;
		response["msg"] = "Thank you for interest. You will receive a email when applications start.";
	} catch (e) {
		response["success"] = false;
		response["msg"] = e.message;
	}
	res.json(response);
});

router.post("/referral/new", async (req, res) => {

	const response = {};

	try {
		await referralRequest(req);
		response["success"] = true;
		response["msg"] = "Thank you for supporting us.";
	} catch (e) {
		response["success"] = false;
		response["msg"] = e.message;
	}
	res.json(response);
});

/*router.get("/remind", async (req, res) => {
	res.render("captcha", {RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY});
});*/

module.exports = router;
