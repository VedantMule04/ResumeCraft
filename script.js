function generateResume(){

    let name =
    document.getElementById("name").value;

    let email =
    document.getElementById("email").value;

    let phone =
    document.getElementById("phone").value;

    let education =
    document.getElementById("education").value;

    let skills =
    document.getElementById("skills").value;

    let projects =
    document.getElementById("projects").value;

    document.getElementById("resume-preview").innerHTML = `
    
        <h1>${name}</h1>

        <p><strong>Email:</strong> ${email}</p>

        <p><strong>Phone:</strong> ${phone}</p>

        <hr>

        <h2>Education</h2>
        <p>${education}</p>

        <h2>Skills</h2>
        <p>${skills}</p>

        <h2>Projects</h2>
        <p>${projects}</p>

    `;
}
font-size: 70px;
font-weight: 800;