function loadSkills(skills) {
    let i = 0;
    var skillsInnerHTML = '';
    while (i < skills.length) {
        var row = '<div class="row">';
        for (let j = i; j < i + 12 && j < skills.length; j++) {
            var skill = `
				<div class="col m1 s3 skill">
					<span class="icon"><i class="${skills[j][1]}"></i></span>
					<span>${skills[j][0]}</span>
				</div>`;
            row += skill;
        }
        row += '</div>';
        skillsInnerHTML += row;
        i += 12;
    }
    $('#skills').html(`<div class="row section"><h4>Tools</h4>${skillsInnerHTML}</div>`);
}

function loadProjects(projects) {
    projects.sort(function(a, b) {
        return a.sn - b.sn;
    });
    let projectsInnerHTML = '';
    projects = projects.filter((project) => project.show == true);
    for (let i = 0; i < projects.length; i++) {
        toolsUsed = ``;
        for (let j = 0; j < projects[i].toolsUsed.length; j++) {
            toolsUsed += projects[i].toolsUsed[j] + ' ';
        }
        projectInfo = ``;
        for (let k = 0; k < projects[i].info.length; ++k) {
            projectInfo += `<li>${projects[i].info[k]}</li>`;
        }
        projectLink = ``;
        if (projects[i].link != "#") {
            projectLink = `<a href="${projects[i].link}" target="_blank"><i class="material-icons">link</i></a>`;
        }
        project = `
			<div class="row project">
                <div class="row">
                    <span class="title">${projects[i].projectTitle}</span>
                    ${projectLink}
                </div>
                <div class="row golden">
                    <div class="col m8 s8">
                        <span>${toolsUsed}</span>
                    </div>
                    <div class="col m4 s4 period">
                        <span>${projects[i].periodStart}-${projects[i].periodEnd}</span>
                    </div>
                </div>
				<div class="row details">
					${projectInfo}
				</div>
			</div>`;
        projectsInnerHTML += project;
    }
    $('#projects').html(`<div class="row section"><h4>Projects</h4>${projectsInnerHTML}</div>`);
}

function loadCertificates(certificates) {
    var certificatesInnerHTML = '';
    console.log(certificates);
    // for (let i = 0; i < certificates.length; i++) {
    //     certificate = `<div class="row certificate">
	// 					<div class="row title"><span>${certificates[i].name}</span></div>
	// 					<div class="row golden">
	// 						<div class="col m8 s8"><span>${certificates[i].authority}</span></div>
	// 						<div class="col m4 s4 period">
	// 							<span>${certificates[i].date}</span>
	// 						</div>
	// 					</div>
	// 				</div>`;
    //                 certificatesInnerHTML += certificate;
    // }
    $('#certificate').html(`<div class="row section"><h4>Certificate</h4>${certificatesInnerHTML}</div>`);
}

function loadWorks(experince) {
    experince.sort(function(a, b) {
        return a.sn - b.sn;
    });
    const works = experince.filter((experince) => experince.type == "work");
    let worksInnerHTML = '';
    for (let i = 0; i < works.length; i++) {
        experienceDetails = ``;
        for (j = 0; j < works[i].experience.length; ++j) {
            team = works[i].experience[j];
            teamExpDetails = ``;
            for (k = 0; k < team.details.length; ++k) {
                teamExpDetails += `
					<span>- ${team.details[k]}</span>
				`;
            }
            experienceDetails += `
			<div class="row team">
				<span class="teamName">[${team.periodStart}-${team.periodEnd}] ${team.team}</span>
				<div class="row">${teamExpDetails}</div>
			</div>
			`;
        }

        worksInnerHTML += `
		<div class="row work">
			<div class="row">
				<div class="col m5 s5">
                    <span class="title">${works[i].organisation}</span>
                    <a href="${works[i].link}" target="_blank"><i class="material-icons">link</i></a>
                </div>
				<div class="col m7 s7 position"><span class="title">${works[i].workPosition}</span></div>
			</div>
			<div class="row golden">
				<div class="col m7 s5">${works[i].status} - ${works[i].location}</div>
				<div class="col m5 s7 period">${works[i].periodStart} - ${works[i].periodEnd}</div>
			</div>
			<div class="row details">${experienceDetails}</div>
		</div>`;
    }
    $('#experience').html(`<div class="row section"><h4>Experience</h4>${worksInnerHTML}</div>`);
}

function loadEducations(educations) {
    var educationsInnerHTML = '';
    for (let i = 0; i < educations.length; i++) {
        education = `<div class="row education">
						<div class="row title"><span>${educations[i].course}</span></div>
						<div class="row golden">
							<div class="col m8 s8"><span>${educations[i].inst}</span></div>
							<div class="col m4 s4 period">
								<span>${educations[i].periodStart}-${educations[i].periodEnd}</span>
							</div>
						</div>
						<div class="row">
							<div class="col m8 s8"><span>${educations[i].board}</span></div>
							<div class="col m4 s4 score">
								<span>${educations[i].score}</span>
							</div>
						</div>
					</div>`;
        educationsInnerHTML += education;
    }
    $('#education').html(`<div class="row section"><h4>Education</h4>${educationsInnerHTML}</div>`);
}

function loadLinks(profileLinks) {
    let i = 0;
    profileLinks.sort((a, b) => a.sn - b.sn);
    var profileLinksInnerHTML = '';
    while (i < profileLinks.length) {
        profileLinksInnerHTML += `<span> | <a href="${profileLinks[i].link}" target="_blank">${profileLinks[i].name}</a></span>`;
        ++i;
    }
    $('#tabs-links').append(profileLinksInnerHTML);
}

function loadLikes(likes) {
    likes = likes.sort(function(a, b) {
        return a.sn - b.sn;
    });
    let likesInnerHTML = '<h4 class="title">I like</h4>';
    for (let i = 0; i < likes.length; i++) {
        likesInnerHTML += '<object type="image/svg+xml" data="img/' + likes[i].icon + '">' + likes[i].name + '</object>'
    }
    $('#likes').html(likesInnerHTML);
}

function loadBlog() {
    var blogHtml = `<div class='sk-ww-medium-publication-feed' data-embed-id='26322'></div><script src='https://www.sociablekit.com/app/embed/medium-publication-feed/widget.js'></script>`;
    $('#blog').html(blogHtml);
}

function onBodyLoad() {
    $('div.progress').css('display', 'none');
    $('div.content').css('display', 'block');
}

// swal({
//         title: "Hello World!!!",
//         text: "Hello visitor, you have landed upon little webspace of Yeon-Woong. I hope you're doing well. \n Are you hiring ?",
//         buttons: {
//             confirm: {
//                 text: "Yes, I'm hiring.",
//                 value: true,
//                 visible: true,
//                 className: "button-confirm",
//                 closeModal: true
//             },
//             cancel: {
//                 text: "Nope :)",
//                 value: false,
//                 visible: true,
//                 className: "button-cancel",
//                 closeModal: true,
//             }
//         }
//     })
//     .then((value) => {
//         if (value === true) {
//             swal({
//                 title: "Hello Talent Scout,",
//                 text: "Thank you for visiting my webspace. I hope you'll find relevant information here. If you need any other information, kindly reach to me. \n\n Do you need my CV?",
//                 buttons: {
//                     confirm: {
//                         text: "Yes.",
//                         value: true,
//                         visible: true,
//                         className: "button-confirm",
//                         closeModal: true
//                     },
//                     cancel: {
//                         text: "I have it.",
//                         value: false,
//                         visible: true,
//                         className: "button-cancel",
//                         closeModal: true,
//                     }
//                 }
//             }).then((value) => {
//                 if (value === true) {
//                     window.open('/Shubham_Sawant_3YoE_SDE_Nov21.pdf');
//                 }
//             })
//         }
//     });


function loadMoghysSays() {
    const mySaysInnerHtml = `
	<div class="col m6 s12">
		<h6 class="title">직장 생활 신조:</h6>	
		<p>최고의 복지는 최고의 동료다. <br/>최고의 동료가 되자.</p>
	</div>
	<div class="col m6 s12 gratitudes">
		<h6 class="title">Warm Gratitudes</h6>
		<a href="https://github.com/moghya/moghya.github.io/">Shubham Sawant</a>
	</div>`;
    $('#mySays').html(mySaysInnerHtml);
}

$.get("/js/profile.json",
    function(data, status) {
        console.log('Got profile:', data, ' \nwith status:', status);
        if (status !== "success") {
            window.location.href = "/error.html";
        }
        let profile = data;
        let pInfo = profile.personalInfo;
        $('#name').html(`${pInfo.fname} ${pInfo.lname}<sub>&lt;${pInfo.nick}/&gt;`);
        $('#name').css(`float`,`right`);
        // $('#nick').html('&lt' + pInfo.nick + '/&gt');
        $('#image img').attr('src', 'img/' + pInfo.myimg);
        $('#contact').html(`<span>${pInfo.mob}</span></br><span><a href="mailto:${pInfo.email}">${pInfo.email}</a></span>`);
        $('#summary').html(profile.summary);
        loadLinks(profile.profileLinks);
        loadSkills(profile.skills);
        loadCertificates(profile.Certificates);
        loadProjects(profile.projects);
        loadWorks(profile.experince);
        loadEducations(profile.educations);
        loadMoghysSays();
        console.log('body loaded calling');
        onBodyLoad();
    }, $.get("https://woong-git.github.io/js/profile.json",
    function(data, status) {
        console.log('Got profile:', data, ' \nwith status:', status);
        if (status !== "success") {
            window.location.href = "/error.html";
        }
        let profile = data;
        let pInfo = profile.personalInfo;
        $('#name').html(`${pInfo.fname} ${pInfo.lname}<sub>&lt;${pInfo.nick}&gt;`);
        $('#name').css(`float`,`right`);
        // $('#nick').html('&lt' + pInfo.nick + '/&gt');
        $('#image img').attr('src', 'img/' + pInfo.myimg);
        $('#contact').html(`<span>${pInfo.mob}</span></br><span><a href="mailto:${pInfo.email}">${pInfo.email}</a></span>`);
        $('#summary').html(profile.summary);
        loadLinks(profile.profileLinks);
        loadSkills(profile.skills);
        loadCertificates(profile.Certificates);
        loadProjects(profile.projects);
        loadWorks(profile.experince);
        loadEducations(profile.educations);
        loadMoghysSays();
        console.log('body loaded calling');
        onBodyLoad();
    }));