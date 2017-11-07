var bio = {
    name: "Kerensa Mathews",
    role: "Front End Web Developer",
    contacts: {
        mobile: "719-890-0244",
        email: "kerensa.mathews@gmail",
        github: "KerensaMathews",
        twitter: "@KerensaMathews",
        blog: "kerensamathews.com",
        location: "Aguilar, CO, US"
    },
    welcomeMessage: "Hello! I am a front end web developer based in southern Colorado, USA. I'm available to work on-site or remotely. Thank you for visiting!",
    skills: ["HTML5", "CSS3", "JavaScript", "jQuery", "Bootstrap", "Responsive Web Design", "Website Optimization"],
    biopic: "images/resume-profile.jpg",
    display: function() {

        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedHeader = formattedName + formattedRole;
        $("#header").prepend(formattedHeader);

        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
        var formattedBlog = HTMLblog.replace("%data%", bio.contacts.blog);
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var formattedContacts = formattedMobile + formattedEmail + formattedGithub + formattedTwitter + formattedBlog + formattedLocation;
        $("#topContacts").append(formattedContacts);
        $("#footerContacts").append(formattedContacts);

        var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);

        if (bio.skills.length > 0) {
            $("#header").append(HTMLskillsStart);
            for (var i = 0; i < bio.skills.length; i++) {
                var formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
                $("#skills").append(formattedSkill);
            }
        }

        var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
        $("#header").prepend(formattedBioPic);

    }

};

var education = {
    schools: [{
            name: "Binghamton University",
            location: "Vestal, NY, US",
            degree: "1 Year Completed",
            majors: ["English", " Creative Writing Minor"],
            dates: "2005-2006",
            url: "https://www.binghamton.edu"
        },
        {
            name: "Lord Fairfax Community College",
            location: "Middletown, VA, US",
            degree: "Associate of Arts & Sciences",
            majors: ["Liberal Arts"],
            dates: "2003-2005",
            url: "https://www.lfcc.edu"
        }
    ],
    onlineCourses: [{
        title: "Front End Web Development Nanodegree Program",
        school: "Udacity",
        dates: "2016-Present",
        url: "http://www.udacity.com"
    }],
    display: function() {
        education.schools.forEach(function(school) {
            $("#education").append(HTMLschoolStart);
            var formattedName = HTMLschoolName.replace("%data%", school.name).replace("#", school.url);
            var formattedDegree = HTMLschoolDegree.replace("%data%", school.degree);
            var formattedDates = HTMLschoolDates.replace("%data%", school.dates);
            var formattedMajor = HTMLschoolMajor.replace("%data%", school.majors);
            var formattedLocation = HTMLschoolLocation.replace("%data%", school.location);
            var formattedSchoolInfo = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMajor;
            $(".education-entry:last").append(formattedSchoolInfo);
        });
        $("#education").append(HTMLonlineCourses);
        $("#education").append(HTMLschoolStart);
        education.onlineCourses.forEach(function(course) {
            var formattedTitle = HTMLonlineTitle.replace("%data%", course.title).replace("#", course.url);
            var formattedSchool = HTMLonlineSchool.replace("%data%", course.school);
            var formattedDates = HTMLonlineDates.replace("%data%", course.dates);
            var formattedURL = HTMLonlineURL.replace("%data%", course.url).replace("#", course.url);
            var formattedOnlineInfo = formattedTitle + formattedSchool + formattedDates + formattedURL;
            $(".education-entry:last").append(formattedOnlineInfo);
        });
    }
};

var work = {
    jobs: [{
            employer: "Ultius",
            title: "Content Writer",
            location: "Aguilar, CO, US",
            dates: "2014-Present",
            description: "Responsibilities include researching and writing academic content for clients, communicating with clients and editors, and meeting strict deadlines."
        },
        {
            employer: "Wayside Inn",
            title: "Social Media Manager",
            location: "Middletown, VA, US",
            dates: "2013-2014",
            description: "Responsibilities included establishing and maintaining social media accounts, regularly creating interactive content, communicating with potential and existing clients, and coordinating with vendors and entertainment on matters of mutual promotion."
        },
        {
            employer: "Carousel Child Care Center",
            title: "Program Director",
            location: "Endicott, NY, US",
            dates: "2006-2007",
            description: "Responsibilities included designing and approving childcare programs for infants, toddlers, preschoolers, and school-age children on a daily and weekly basis; creating and maintaining client and employee accounts; and a wide variety of other administrative tasks."
        },
        {
            employer: "Cub Care Children's Center",
            title: "Assistant Teacher",
            location: "Vestal, NY, US",
            dates: "2006-2007",
            description: "Responsibilities included designing activities and caring for school-age children in a before-school childcare program."
        },
        {
            employer: "Shenandoah Exonumia",
            title: "Administrative Assistant",
            location: "Middletown, VA, US",
            dates: "2002-2006",
            description: "Responsibilities included entering product information into a company database, writing and scheduling auctions and online store listings, and communicating with and shipping products to customers. (Worked remotely from 2005-2006.)"
        }
    ],
    display: function() {
        work.jobs.forEach(function(job) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
            var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
            var formattedDates = HTMLworkDates.replace("%data%", job.dates);
            var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
            var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
            var formattedWorkInfo = formattedEmployer + formattedTitle + formattedDates + formattedLocation + formattedDescription;
            $(".work-entry:last").append(formattedWorkInfo);
        });
    }
};

var projects = {
    projects: [{
            title: "Aguilar, Colorado",
            dates: "2017",
            description: "A website for the small town of Aguilar, Colorado, and an example of a community website. Created as an online hub to share town news, details on local events, and information about Aguilar and surrounding areas. Other significant goals are to increase tourism and to provide a community portal for citizens and visitors.",
            images: ["images/community-resume.png"]
        },
        {
            title: "Attention Deficit Order",
            dates: "2017",
            description: "A website for those afflicted with ADD/ADHD, and an example of a self-help website. Features include articles, tips, step-by-step coping mechanisms, and in-depth personalized services upon request.",
            images: ["images/self-help-resume.png"]
        },
        {
            title: "Ladybugger",
            dates: "2017",
            description: "A two-dimensional game reminiscient of the arcade game 'Frogger.' Built with JavaScript on HTML canvas; playable in browser. Future expansion to include character selection, scoring, and multiple levels with storyline.",
            images: ["images/ladybugger-resume.png"]
        }
    ],
    display: function() {
        projects.projects.forEach(function(project) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", project.title);
            var formattedDates = HTMLprojectDates.replace("%data%", project.dates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", project.description);
            var formattedProjectInfo = formattedTitle + formattedDates + formattedDescription;
            $(".project-entry:last").append(formattedProjectInfo);
            if (project.images.length > 0) {
                for (i = 0; i < project.images.length; i++) {
                var formattedImage = HTMLprojectImage.replace("%data%", project.images[i]);
                $(".project-entry:last").append(formattedImage);
                }
            }
        });
    }
};

$("#mapDiv").append(googleMap);

bio.display();

education.display();

work.display();

projects.display();
