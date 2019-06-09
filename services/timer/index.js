const fs = require("fs");
const jsonFile = require("jsonfile");

const dataFile = __dirname + "./../../data.json";

const startKey = "started";
const timeKey = "startTime";

const timer = {

	get: () => {

	},

	start: async (timeInSeconds) => {
		let json;
		try {
			fs.accessSync(dataFile, fs.constants.F_OK);
			json = jsonFile.readFileSync(dataFile);
		} catch (e) {
			json = {};
		}
		json[timeKey] = timeInSeconds;
		json[startKey] = true;
		await jsonFile.writeFileSync(dataFile, json);
	},

	checkStart: async () => {
		try {
			fs.accessSync(dataFile, fs.constants.F_OK);
			let json = jsonFile.readFileSync(dataFile);
			let started = json[startKey];
			if (started === true) {
				return json[timeKey];
			}
			return false;
		} catch (e) {
			let obj = {};
			obj[startKey] = false;
			await jsonFile.writeFileSync(dataFile, obj);
			return false;
		}
	}

};

module.exports = timer;
