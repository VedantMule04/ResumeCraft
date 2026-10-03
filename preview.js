const template = localStorage.getItem("selectedTemplate");
const data = JSON.parse(localStorage.getItem("resumeData"));

document.getElementById("photo").src = data.photo;
document.getElementById("name").innerText = data.name;
document.getElementById("title").innerText = data.title;

document.getElementById("email").innerText =
"Email: " + data.email;

document.getElementById("phone").innerText =
"Phone: " + data.phone;

document.getElementById("address").innerText =
"Address: " + data.address;

document.getElementById("linkedin").innerText =
"LinkedIn: " + data.linkedin;

document.getElementById("github").innerText =
"GitHub: " + data.github;

document.getElementById("objective").innerText =
data.objective;

document.getElementById("education").innerHTML =
`
${data.degree}<br>
${data.branch}<br>
${data.college}<br>
CGPA : ${data.cgpa}<br>
Passing Year : ${data.year}
`;

document.getElementById("hardSkills").innerText =
data.hardSkills;

document.getElementById("softSkills").innerText =
data.softSkills;

document.getElementById("experience").innerText =
data.experience;

document.getElementById("projects").innerHTML =
"• " + data.projects.replace(/\n/g, "<br>• ");

document.getElementById("certifications").innerText =
data.certifications;

document.getElementById("languages").innerText =
data.languages;

document.getElementById("interests").innerText =
data.interests;

if(template === "professional"){

document.getElementById("resume").innerHTML = `

<div class="pro-header">

    <div class="pro-left">
        <h1>${data.name}</h1>
        <h3>${data.title}</h3>

        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Address:</b> ${data.address}</p>
    </div>

    <div class="pro-right">
        <img src="${data.photo}" class="pro-photo">
    </div>

</div>

<div class="pro-body">

    <div class="pro-main">

        <h2>Career Objective</h2>
        <p>${data.objective}</p>

        <h2>Education</h2>
        <p>
        ${data.degree}<br>
        ${data.branch}<br>
        ${data.college}<br>
        CGPA : ${data.cgpa}<br>
        Passing Year : ${data.year}
        </p>

        <h2>Experience</h2>
        <p>${data.experience}</p>

        <h2>Projects</h2>
        <p>${data.projects}</p>

    </div>

    <div class="pro-sidebar">

        <h2>Hard Skills</h2>
        <p>${data.hardSkills}</p>

        <h2>Soft Skills</h2>
        <p>${data.softSkills}</p>

        <h2>Languages</h2>
        <p>${data.languages}</p>

        <h2>Certifications</h2>
        <p>${data.certifications}</p>

        <h2>Interests</h2>
        <p>${data.interests}</p>

    </div>

</div>

`;
}
else if(template === "modern"){

    document.body.classList.add("modern");

    document.getElementById("resume").innerHTML = `
    
    <div class="left-side">

        <img src="${data.photo}" id="photo">

        <h3 class="sidebar-heading">Contact</h3>

        <p>${data.email}</p>
        <p>${data.phone}</p>
        <p>${data.address}</p>

        <h3 class="sidebar-heading">Skills</h3>

        <p>${data.hardSkills}</p>

        <h3 class="sidebar-heading">Languages</h3>

        <p>${data.languages}</p>

        <h3 class="sidebar-heading">Interests</h3>

        <p>${data.interests}</p>

    </div>

    <div class="right-side">

        <h1>${data.name}</h1>

        <p>${data.title}</p>

        <h2>Profile</h2>
        <p>${data.objective}</p>

        <h2>Education</h2>

        <p>
        ${data.degree}<br>
        ${data.branch}<br>
        ${data.college}<br>
        CGPA : ${data.cgpa}<br>
        Year : ${data.year}
        </p>

        <h2>Projects</h2>
        <p>${data.projects}</p>

        <h2>Experience</h2>
        <p>${data.experience}</p>

        <h2>Certifications</h2>
        <p>${data.certifications}</p>

    </div>

    `;
}
else if(template === "student"){

    document.body.classList.add("student");

    document.getElementById("resume").innerHTML = `

    <div class="student-left">

        <img src="${data.photo}" id="photo">

        <h3>CONTACT</h3>

<p>${data.email}</p>
<p>${data.phone}</p>
<p>${data.address}</p>

<p>${data.linkedin}</p>
<p>${data.github}</p>

<h3>HARD SKILLS</h3>
<p>${data.hardSkills}</p>
        <h3>SOFT SKILLS</h3>
        <p>${data.softSkills}</p>

        <h3>LANGUAGES</h3>
        <p>${data.languages}</p>

        <h3>INTERESTS</h3>
        <p>${data.interests}</p>

    </div>

    <div class="student-right">

        <h1>${data.name}</h1>
        <p>${data.title}</p>

        <h2>PROFILE</h2>
        <p>${data.objective}</p>

        <h2>EDUCATION</h2>

        <p>
        ${data.degree}<br>
        ${data.branch}<br>
        ${data.college}<br>
        CGPA : ${data.cgpa}<br>
        Year : ${data.year}
        </p>

        <h2>PROJECTS</h2>
        <p>${data.projects}</p>

        <h2>EXPERIENCE</h2>
        <p>${data.experience}</p>

        <h2>CERTIFICATIONS</h2>
        <p>${data.certifications}</p>

    </div>

    `;
}
else if(template === "hybrid"){
  document.body.classList.add("hybrid");

document.getElementById("resume").innerHTML = `

<div class="hybrid-header">

    <img src="${data.photo}" id="photo">

    <div>
        <h1>${data.name}</h1>
        <h3>${data.title}</h3>
    </div>

</div>

<div class="hybrid-body">

    <div class="hybrid-left">

        <h3>Contact</h3>
        <p>${data.email}</p>
        <p>${data.phone}</p>
        <p>${data.address}</p>

        <h3>Skills</h3>
        <p>${data.hardSkills}</p>

        <h3>Languages</h3>
        <p>${data.languages}</p>

        <h3>Certifications</h3>
        <p>${data.certifications}</p>

        <h3>Interests</h3>
        <p>${data.interests}</p>

    </div>

    <div class="hybrid-right">

        <h2>Profile</h2>
        <p>${data.objective}</p>

        <h2>Education</h2>
        <p>
        ${data.degree}<br>
        ${data.branch}<br>
        ${data.college}<br>
        CGPA : ${data.cgpa}<br>
        Year : ${data.year}
        </p>

        <h2>Projects</h2>
        <p>${data.projects}</p>

        <h2>Experience</h2>
        <p>${data.experience}</p>

    </div>

</div>
`;
}

document
.getElementById("downloadBtn")
.addEventListener("click", () => {

    html2pdf()
    .from(document.getElementById("resume"))
    .save("Resume.pdf");

});