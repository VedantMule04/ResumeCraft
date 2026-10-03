let imageData = "";

document
.getElementById("photo")
.addEventListener("change", function(e){

    const file = e.target.files[0];

    const reader = new FileReader();

    reader.onload = function(){

        imageData = reader.result;

        const img =
        document.getElementById(
            "previewImage"
        );

        img.src = imageData;
        img.style.display = "block";
    };

    reader.readAsDataURL(file);
});

document
.getElementById("continueBtn")
.addEventListener("click", function(){

    const resumeData = {

        photo:imageData,

        name:
        document.getElementById("name").value,

        title:
        document.getElementById("title").value,

        email:
        document.getElementById("email").value,

        phone:
        document.getElementById("phone").value,

        address:
        document.getElementById("address").value,

        linkedin:
        document.getElementById("linkedin").value,

        github:
        document.getElementById("github").value,

        objective:
        document.getElementById("objective").value,

        college:
        document.getElementById("college").value,

        degree:
        document.getElementById("degree").value,

        branch:
        document.getElementById("branch").value,

        cgpa:
        document.getElementById("cgpa").value,

        year:
        document.getElementById("year").value,

        hardSkills:
        document.getElementById("hardSkills").value,

        softSkills:
        document.getElementById("softSkills").value,

        experience:
        document.getElementById("experience").value,

        projects:
        document.getElementById("projects").value,

        certifications:
        document.getElementById("certifications").value,

        languages:
        document.getElementById("languages").value,

        interests:
        document.getElementById("interests").value
    };

   localStorage.setItem(
    "resumeData",
    JSON.stringify(resumeData)
);

alert("Data Saved Successfully");

window.location.href =
"templates.html";
});