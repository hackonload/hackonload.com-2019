const express = require('express');
const router = express.Router();

const remindRequest = require("./../services/remind");

/* GET home page. */
router.get('/', function (req, res, next) {
	res.render('index', {title: 'Express'});
});

router.post("/remind", (req, res) => {

	remindRequest(req, res).then(
		() => {

		},
		(err) => {

		}
	)

});

module.exports = router;
