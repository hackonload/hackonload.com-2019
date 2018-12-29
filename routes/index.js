const express = require('express');
const router = express.Router();
const faqs = require('./../data/faqs');

const linksArray = [
	{
		title: "Home",
		link: "#home"
	},
	{
		title: "About",
		link: "#about"
	},
	{
		title: "Schedule",
		link: "#schedule"
	},
	{
		title: "Sponsors",
		link: "#sponsors"
	}
];

/* GET home page. */
router.get('/', function (req, res, next) {
	const data = {
		title: "onLoad: Load your code",
		links: linksArray,
		faqs: faqs
	};
	res.render('index', data);
});

module.exports = router;
