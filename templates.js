function selectTemplate(template){

    localStorage.setItem(
        "selectedTemplate",
        template
    );

    window.location.href =
    "preview.html";
}