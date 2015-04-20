//var name = "Apostolis Gouvalas";
//var formattedName = HTMLheaderName.replace("%data%", name);

//var role = "Front-end Developer";
//var formattedRole = HTMLheaderRole.replace("%data%", role);

/*
*	bio Obj that contains my personal information: contact details, specialty, skills etc...
*/
var bio = {
	"name" : "Apostolis Gouvalas",
	"gender" : "male",
	"role" : "Front-end Developer",
	"contactInfo" : {
		"mobile" : "697-881-1469",
		"email" : "apo.gouv@gmail.com",
		"github" : "apogouv",
		"location" : "Greece",
		"address" : "Gianni Ritsou 14, Lárisa 41335"
	},
	"welcomeMessage" : "Please explore my CV & do not hesitate to contact me!",
	"skills" : {
		"code" : ["html", "css", "javascript", "PHP"],
		"CMS" : ["Joomla!", "WordPress"],
		"graphics" : ["photoshop", "GIMP"],
		"languages" : ["English", "Spanish"]
	},
	"bioPicURL" : "images/forCv.png",
	"display" : function(){

		/*  
		*	- prepend() adds our code to the beginning of our selector, exactly after its declaration 
		*	- append() adds our code after all elements inside our selector
		*/

		/* Name and role */
		var formattedName = HTMLheaderName.replace("%data%", bio.name);
		var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
		 
		$("#header").prepend(formattedRole);
		$("#header").prepend(formattedName);

		/* Bio Picture */
		var formattedBioPic = HTMLbioPic.replace("%data%", bio.bioPicURL);

		$("#header").append(formattedBioPic);

		/* Welcome Message */
		var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

		$("#header").append(formattedWelcomeMsg);

		/* ContactInfo */
		var formattedMobile = HTMLmobile.replace("%data%", bio.contactInfo.mobile);
		var formattedEmail = HTMLemail.replace("%data%", bio.contactInfo.email);
		var formattedGithub = HTMLgithub.replace("%data%", bio.contactInfo.github);
		var formattedLocation = HTMLlocation.replace("%data%", bio.contactInfo.location);

		/* to Top */
		$("#topContacts").append(formattedMobile);
		$("#topContacts").append(formattedEmail);
		$("#topContacts").append(formattedGithub);
		$("#topContacts").append(formattedLocation);

		/* to Bottom */
		$("#footerContacts").append(formattedMobile);
		$("#footerContacts").append(formattedEmail);
		$("#footerContacts").append(formattedGithub);
		$("#footerContacts").append(formattedLocation);

		/* Skills */
		if (!jQuery.isEmptyObject(bio.skills)){

			$("#header").append(HTMLskillsStart);

			var formattedSkills = HTMLskills.replace("%data%", bio.skills.code);
			$("#skills").append("Code: ").append(formattedSkills);
			var formattedSkills = HTMLskills.replace("%data%", bio.skills.CMS);
			$("#skills").append("CMSs: ").append(formattedSkills);
			var formattedSkills = HTMLskills.replace("%data%", bio.skills.graphics);
			$("#skills").append("Graphics: ").append(formattedSkills);
			var formattedSkills = HTMLskills.replace("%data%", bio.skills.languages);
			$("#skills").append("Languages: ").append(formattedSkills);
		}// End if - has skills?

	}// End of bio display() function
};


/*
*	education Obj that contains my education background: degrees, certificates etc...
*/
var education = {
	"schools" : [
		{
			"name" : "Univercity of Piraeus",
			"department" : "Digital Systems",
			"city" : "Piraeus, Ath, GR",
			"location" : "Καραολή και Δημητρίου 80, Πειραιάς, 18534, Ελλάδα",
			"degree" : "ΒΑ",
			"majors" : "Computer Science",
			"startDate" : "2004",
			"endDate" : "2014",
			"url" : "http://www.ds.unipi.gr/"
		},
		{
			"name" : "3ο Γενικό Λύκειο",
			"city" : "Λάρισα, Ελλάδα",
			"location" : "Karditsis 193, Lárisa 41335",
			"degree" : "Απολυτήριο Λύκείου",
			"endDate" : "2004",
			"url" : "http://3lyk-laris.lar.sch.gr/"
		}
	],
	"display" : function(){
		/*
			var HTMLschoolStart = '<div class="education-entry"></div>';
			var HTMLschoolName = '<a href="#">%data%';
			var HTMLschoolDegree = ' -- %data%</a>';
			var HTMLschoolDates = '<div class="date-text">%data%</div>';
			var HTMLschoolLocation = '<div class="location-text">%data%</div>';
			var HTMLschoolMajor = '<em><br>Major: %data%</em>';
		*/
		for (school in education.schools){
			$("#education").append(HTMLschoolStart);

			/* Dates */
			if('startDate' in education.schools[school]){
				var formattedDateDuration = education.schools[school].startDate + " - " + education.schools[school].endDate;
			}
			var formattedDate = education.schools[school].endDate;
			var formattedDates = HTMLschoolDates.replace("%data%", formattedDate);

			$(".education-entry:last").append(formattedDates);

			/* School Name */
			var formattedSchoolName = HTMLschoolName.replace("%urldata%", education.schools[school].url).replace("%data%", education.schools[school].name);

			$(".education-entry:last").append(formattedSchoolName);

			/* Degree + if has department */
			var formattedDegreeName = HTMLschoolDegree.replace("%data%", education.schools[school].degree);

			if('department' in education.schools[school]){
				$(".education-entry:last").append(formattedDegreeName + " in " + education.schools[school].department);
			} /* End if - department exists */ else {
				$(".education-entry:last").append(formattedDegreeName);
			} // End else - department does not exist

			/* Location */
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);

			$(".education-entry:last").append(formattedLocation);

			/* if has Majors */
			if('majors' in education.schools[school]){
				var formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajors);
			}
		} // End of for... in  loop
	}// End of education display() function
};

/*
*	work Obj that contains my work experience: positions, employers etc...
*/
var work = {
	"jobs":[
		{
			"position" : "Website Optimization & Marketing",
			"employer" : "ΚΕΚ Ευρωπληροφόρηση Α.Ε. Κε.Δι.Βι.Μ. 2",
			"employerURL" : "http://www.kekeuropliroforissi.gr/",
			"location" : "Σωκράτους 111, 413 36, Λάρισα (Ελλάδα)",
			"startDate" : "10 Νοεμβρίου 2014",
			"endDate" : "έως Σήμερα",
			"description" : "- Manage the Joomla! based website of the company, adding new materials and optimized them for social media.<br /> - Webpage performance optimization, based on YSlow and Pagespeed Insights reports.<br /> - Promote the company through social media, like Facebook, Twitter and Google+, by running advertisements and posting relevant material."
		},
		{
			"position" : "Front-end Developer",
			"employer" : "igraphics.gr",
			"employerURL" : "http://www.igraphics.gr",
			"location" : "Πλατεία Καρύτση 10, 105 61, Αθήνα (Ελλάδα)",
			"startDate" : "Απρίλιος 2014",
			"endDate" : "Μάιος 2014",
			"description" : "- Front-end development για εφαρμογές οπτικοποίησης των  αποτελεσμάτων των ιταλικών ευρωεκλογών 2014 και οπτικοποίησης παλαιότερων ιταλικών εκλογικών αποτελεσμάτων, από την εταιρία igraphics.<br /> - Πιο συγκεκριμένα έγινε η οπτικοποίηση των εφαρμογών με βάση τα mockup σχέδια της εταιρίας igraphics, χρησιμοποιώντας html, css για το οπτικό αποτέλεσμα και javascript για την λειτουργικότητα, όπως transitions, pop-ups, fade-in/out και άλλων εφέ.<br /> Δείγματα των εφαρμογών:<br /> &#8226  http://www.lastampa.it/italia/speciali/elezioni/2014/mappe/europee#/e/2014-05-25/r/italy <br /> &#8226  http://www.lastampa.it/italia/speciali/elezioni/2014/mappe/piemonte#/r.pie/2014-05-26/1-p/piemonte <br /> &#8226  http://youtrend.it/m/mappa-elettorale/#/c/2013-02-24/r/italy <br /> &#8226  http://www.lastampa.it/italia/speciali/elezioni-politiche-2013/elezioni-2008#/c/2013-02-24/r/italy"
		},
		{
			"position" : "Junior Web Developer/ πρακτική άσκηση  ",
			"employer" : "WOW-group",
			"employerURL" : "http://www.wow.gr/",
			"location" : "Φλέμινγκ, 14, Μαρούσι, 15 123 Αθήνα (Ελλάδα) ",
			"startDate" : "01 Ιουνίου 2010",
			"endDate" : "31 Αυγούστου 2010",
			"description" : "- Διαχείριση περιεχομένου ιστοσελίδων, με το FlexionPro (cms της εταιρείας). <br /> - Διαχείριση προϊόντων ηλεκτρονικού καταστήματος, με το Magento (πρόγραμμα ηλεκτρονικού επιχειρείν). <br /> - Διαχείριση υλικού online μαθημάτων, με το πλατφόρμα εκμάθησης (όπως το Moodle)"
		}
	],
	"display" : function(){
		for (job in work.jobs){
			$("#workExperience").append(HTMLworkStart);

			var formattedEmployer = HTMLworkEmployer.replace("%urldata%", work.jobs[job].employerURL).replace("%data%", work.jobs[job].employer);
			var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].position);

			$(".work-entry:last").append(formattedEmployer + formattedWorkTitle);

			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);

			$(".work-entry:last").append(formattedLocation);

			var formattedDate = work.jobs[job].startDate + " - " + work.jobs[job].endDate;
			var formattedDates = HTMLworkDates.replace("%data%", formattedDate);

			$(".work-entry:last").append(formattedDates);

			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);

			$(".work-entry:last").append(formattedDescription);
		} // End of for... in  loop
	}// End of work display() function
};

/*
*	project Obj that contains my work experience: positions, employers etc...
*/
var projects = {
	"projects" : [
		{
			"title" : "Italian elections display app - Front-end Developer",
			"startDate" : "Απρίλιος 2014",
			"endDate" : "Μάιος 2014",
			"description" : "- Front-end development για εφαρμογές οπτικοποίησης των  αποτελεσμάτων των ιταλικών ευρωεκλογών 2014 και οπτικοποίησης παλαιότερων ιταλικών εκλογικών αποτελεσμάτων, από την εταιρία igraphics.<br /> - Πιο συγκεκριμένα έγινε η οπτικοποίηση των εφαρμογών με βάση τα mockup σχέδια της εταιρίας igraphics, χρησιμοποιώντας html, css για το οπτικό αποτέλεσμα και javascript για την λειτουργικότητα, όπως transitions, pop-ups, fade-in/out και άλλων εφέ.<br />",
			"projectImgs" : ["images/project-images/proj-election-01.PNG","images/project-images/proj-election-02.PNG","images/project-images/proj-election-03.PNG", "images/project-images/proj-election-04.PNG", "images/project-images/proj-election-05.PNG"]
		}
	],
	"display" : function(){
		for (project in projects.projects){
			$("#projects").append(HTMLprojectStart);

			var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);

			$(".project-entry:last").append(formattedProjectTitle);

			var formattedDate = projects.projects[project].startDate + " - " + projects.projects[project].endDate;
			var formattedDates = HTMLprojectDates.replace("%data%", formattedDate);

			$(".project-entry:last").append(formattedDates);

			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);

			$(".project-entry:last").append(formattedDescription);

			$(".project-entry:last").append(HTMLprojectImageGrid);
			
			if (projects.projects[project].projectImgs.length>0){
				for (var i=0; i < projects.projects[project].projectImgs.length; i++){
					var formattedProjImg = HTMLprojectImage.replace("%data%", projects.projects[project].projectImgs[i]);

					$(".grided").append(formattedProjImg);
				} // End of for loop
			}// End of if
		} // End of for... in  loop
	}// End of projects display() function
};





function inName(fullName){
	var seperatedNames = fullName.trim().split(" ");
	var firstName = seperatedNames[0];
	var lastName = seperatedNames[1];
	firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();;
	lastName = lastName.toUpperCase();
	var internasionalName = firstName + " " + lastName;
	return internasionalName;
}

$("#main").prepend(internationalizeButton);


bio.display();

work.display();

projects.display();

education.display();


$("#mapDiv").append(googleMap);