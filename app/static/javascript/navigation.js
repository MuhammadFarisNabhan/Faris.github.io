function updateNavDisplay() {
    const fullUrl = window.location.pathname;

    let nav = document.getElementById("text").innerHTML;
    let navUp = document.querySelector("#up");
    let navBottom = document.querySelector("#bottom");
    let textNav = document.querySelector('#text');
    
    if (fullUrl === "/") {
        navBottom.href = "/projects";

        navUp.style.display = "none";
        navBottom.style.display = "block";

        textNav.textContent = "PORTOFOLIO";
    } else if(fullUrl === "/projects") {
        navUp.href = "/";
        navBottom.href = "/contact";

        navUp.style.display = "block";
        navBottom.style.display = "block";

        textNav.textContent = "PROJECTS";
    } else if (fullUrl === "/contact") {
        navUp.href = "/projects";
        
        navUp.style.display = "block";
        navBottom.style.display = "none";
        textNav.textContent = "CONTACT";
    }

    console.log(fullUrl);
}



updateNavDisplay();