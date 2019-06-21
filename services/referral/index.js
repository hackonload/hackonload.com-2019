const recaptcha = require("./../recaptcha");
const utilities = require("./../utils");
const fs = require("fs");
const jsonFile = require("jsonfile");

const referralFile = __dirname + "/../../referral.json";


const referralRequest = async (req) => {

	const name = req.body.name;
	const email = req.body.email;
	const recaptchaResponse = req.body["g-recaptcha-response"];
	const refEmails = req.body.ref;

	if (name === "" || name === null) {
		throw new Error("Enter your name.");
	} else if (email === "" || email === null) {
		throw new Error("Enter a valid email.");
	} else if (refEmails === "" || refEmails === null) {
		throw new Error("Enter a email to refer.");
	} else if (recaptchaResponse === "" || recaptchaResponse === null) {
		throw new Error("Please tick the recaptcha checkbox.");
	}

	try {
		await recaptcha(recaptchaResponse);
	} catch (e) {
		throw new Error(e);
	}

	let emails = refEmails.split(";");

	const refEntry = {
		name: name,
		email: email,
		refEmails: emails,
	};

	try {
		fs.accessSync(referralFile, fs.constants.F_OK);
		let json = jsonFile.readFileSync(referralFile);

		let flag = false;

		for (let i = 0; i < json.length; i++) {
			let obj = json[i];
			if (obj.email === email) {
				obj.refEmails.concat(emails);
				json[i] = obj;
				flag = true;
				break;
			}
		}
		if (!flag) {
			json.push(refEntry);
		}
		await jsonFile.writeFile(referralFile, json);
	} catch (e) {
		let obj = [];
		obj.push(refEntry);
		await jsonFile.writeFile(referralFile, obj);
	}

};

module.exports = referralRequest;
