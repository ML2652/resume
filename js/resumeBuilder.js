/*
This is empty on purpose! Your code to build the resume will go here.
 */
//$(".super-header-wrapper").html("<img style='width:100%' src='http://goo.gl/WCrBmS'>");
//$("#header").append() 
//$("#main").append("Maricarmen Lafosse");

var firstName = 'Maricarmen Lafosse'
//console.log (HTMLheaderName);

var formattedName = HTMLheaderName.replace("%data%", firstName);
//console.log(formattedName);
$("#header").append(formattedName);

var role = 'Technical Manager'
//console.log (HTMLheaderRole);

var formattedRole = HTMLheaderRole.replace("%data%", role);
//console.log(formattedRole);
$("#header").append(formattedRole);

var skills = ['hard worker, ','quick learner, ','self-motivated'];
$("#main").append(skills);

var bio = {
	'name' : 'Maricarmen',
	'role' : 'Technical Manager',
	'contacts' : {
		'mobile' : '408-806-9265',
		'email' : 'maricarmenj@yahoo.com',
		'github' : 'maricarmenj@yahoo.com',
		'location' : 'San Jose, California'
	},	
	'welcomeMsg' : 'Thanks for the giving me this opportunity.',
	'skills' : ['hard worker, ','quick learner, ','self-motivated'],
	'biopic': 'images/me.jpg'
}

var formattedBiopic = HTMLbioPic.replace("%data%", bio.biopic);
$("#header").append(formattedBiopic)

//$("#main").append(bio.name);
//$("#main").append(bio.contacts);
//$("#main").append(bio.biopic);
//$("#main").append(bio.welcomeMsg);
//$("#main").append(bio.email);
//$("#main").append(bio.mobile);
//$("#main").append(bio.github);
//$("#main").append(bio.location);
//$("#main").append(bio.skills);

bio['location'] = ' San Jose California';
bio['email'] = 'maricarmenj@yahoo.com';
bio['mobile'] = '408-806-9265';
bio['welcomeMsg'] = 'Thanks for the giving me this opportunity.';

//$("#main").append(bio['email']);

var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#header").append(formattedEmail);

var formattedMobile = HTMLmobile.replace("%data%", bio.mobile);
$("#header").append(formattedMobile);

var formattedLocation = HTMLlocation.replace("%data%", bio.location);
$("#header").append(formattedLocation);

var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedWelcomeMsg);

varformattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedSkills);

varformattedSkillsStart = HTMLskillsStart.replace("%data%", bio.skills);
$("#header").append(formattedSkillsStart);

var work = {};
work.position = "Technical Manager";
work.employer = "AT&T";
work.years = "22 years";

var education = {};
education ["name"] = "Universidad Ricardo Palma";
education ["location"] = "Lima, Peru"
education ["degree"] = "B.S."
education ["major"] = "Industrial  Engineering"
education ["dates"] = "1985-1989";
education ["city"] = "Lima, Peru";
education ["url"] = "http://www.urp.edu.pe/";

$("#main").append(work["position"]);
$("#main").append(work["employer"]);
$("#main").append(work["years"]);
$("main").append(education.name);
$("main").append(education.years);
$("main").append(education.city);

//var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.position);
//$("#header").append(formattedWorkTitle);

//var education = {
//	"schools" : [
//		"name" : "Universidad Ricardo Palma",
//		"location" : "Lima, Peru",
//		"degree" : "B.S.",
//		"majors" : ["Industrial Engineering", "Spanish"],
//		"dates" : "1985-1989",
//		"url" : "http://www.urp.edu.pe/"
//	],
//	},
//	{
//		"onlineCourses" : [
//		"title" : "Technology Transformation",
//		"school" : "AT&T University",
//		"dates" : "May - June 2015",
//		"url" : "https://intra4.web.att.com/tuniversity/TU/SitePages/SPages/transforming_your_skills.cfm",
//		"title" : "Network Transformation ",
//		"school" : "Udacity",
//		"dates" : " January - February 2017",
//		"url" : "https://intra4.web.att.com/tuniversity/TU/SitePages/SPages/transforming_your_skills.cfm",
//		"title" : "Introduction to Programming",
//		"school" : "Udacity",
//		"dates" : "March - June 2017",
//		"url" : "https://www.udacity.com/"
//	]
//}; 