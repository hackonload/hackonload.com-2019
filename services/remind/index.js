const recaptcha = require("./../recaptcha");
const fs = require("fs");
const jsonFile = require("jsonfile");

const remindFile = __dirname + "/../../remind.json";

const remindRequest = async (req) => {
	console.log(req.body);
	const name = req.body.name;
	const email = req.body.email;
	const recaptchaResponse = req.body["g-recaptcha-response"];

	if (name === "" || name === null || name === undefined) {
		throw new Error("Enter your name.");
	} else if (email === "" || email === null || email === undefined) {
		throw new Error("Enter a valid email.");
	} else if (recaptchaResponse === "" || recaptchaResponse === null || recaptchaResponse === undefined) {
		throw new Error("Please tick the recaptcha.");
	}

	try {
		await recaptcha(recaptchaResponse);
	} catch (e) {
		throw new Error(e);
	}

	const writeObj = {
		name: name,
		email: email
	};

	try {
		fs.accessSync(remindFile, fs.constants.F_OK);
		let json = jsonFile.readFileSync(remindFile);
		json.push(writeObj);
		await jsonFile.writeFile(remindFile, json);
	} catch (e) {
		let obj = [];
		obj.push(writeObj);
		await jsonFile.writeFile(remindFile, obj);
	}
};

module.exports = remindRequest;
