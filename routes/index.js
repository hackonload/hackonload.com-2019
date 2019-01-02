const express = require("express");
const router = express.Router();
const faqs = require("./../data/faqs");
const schedule = require("./../data/schedule");
const teams = require("./../data/team");

const homePageLinks = [
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

const teamPageLinks = [
	{
		title: "Home",
		link: "/",
		internal: false
	},
	{
		title: "Core",
		link: "#core-team",
		internal: true
	},
	{
		title: "PR",
		link: "#pr",
		internal: true
	},
	{
		title: "Volunteers",
		link: "#volunteers",
		internal: true
	}
];

/* GET home page. */
// noinspection JSUnusedLocalSymbols,JSUnresolvedFunction
router.get('/', (req, res, next) => {
	const data = {
		title: "OnLoad: Load your code",
		description: "A 30hr intense,  fun-filled, rewarding convergence of programmers, designers and developers to build something amazing.",
		links: homePageLinks,
		schedule: schedule,
		faqs: faqs,
		home: true
	};
	res.render('index', data);
});

// noinspection JSUnusedLocalSymbols,JSUnresolvedFunction
router.get('/team', (req, res, next) => {
	const data = {
		title: "OnLoad: The Team",
		description: "Meet the team behind OnLoad",
		links: teamPageLinks,
		coreTeam: teams.coreTeam,
		prTeam: teams.prTeam,
		volunteers: teams.volunteers,
		home: false
	};
	res.render('team', data);
});

module.exports = router;
