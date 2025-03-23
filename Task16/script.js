const works = {
    "task1": { "title": "Project 1", "url": "task1/index.html" },
    "task2": { "title": "Project 2", "url": "task2/index.html" },
    "task3": { "title": "Project 3", "url": "task3/index.html" }
};

function loadNavigation() {
    const navPanel = document.getElementById("nav_panel");

    for (let key in works) {
        let button = document.createElement("button");
        button.className = "nav_button";
        button.textContent = works[key].title;
        button.onclick = function () {
            document.getElementById("content_frame").src = works[key].url;
        };
        navPanel.appendChild(button);
    }
}

window.onload = loadNavigation;
