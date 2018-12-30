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
router.get('/', (req, res, next) => {
	const data = {
		title: "OnLoad: Load your code",
		description: "A 30hr intense,  fun-filled, rewarding convergence of programmers, designers and developers to build something amazing.",
		links: linksArray,
		faqs: faqs
	};
	res.render('index', data);
});

router.get('/team', (req, res, next) => {
	const data = {
		title: "OnLoad: The Team",
		description: "Meet the team behind OnLoad"
	};
	res.render('team', data);
});

module.exports = router;
