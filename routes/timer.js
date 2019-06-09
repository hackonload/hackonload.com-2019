const express = require('express');
const router = express.Router();
const timer = require("./../services/timer");

router.get('/', (req, res) => {
	res.render('timer', {title: 'Express'});
});

router.get("/start/check", async (req, res) => {
	const response = {};
	try {
		let ans = await timer.checkStart();
		if (ans === false) {
			response["started"] = true;
			response["startTime"] = ans;
		}
	} catch (e) {
		response["started"] = false;
	}
	res.json(response);
});

router.get("/start", async (req, res) => {

	try {
		await timer.start(req.body.time);
	} catch (e) {

	}

});

router.get("/get", (req, res) => {
	try {

	} catch (e) {

	}
});

module.exports = router;
