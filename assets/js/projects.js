
const projects = [
    {
        title: "Gui IA",
        img: "assets/img/projects/gui.png",
        tags: ["Python", "GPT", "Hugchat", "Langchain", "Streamlit"],
        demoLink: "https://gui-ia.streamlit.app/",
        githubLink: "https://github.com/wendellast/Gui"
    },
    {
        title: "Adote Um Pet",
        img: "assets/img/projects/adote-um-pet.png",
        tags: ["Python", "Django", "Redis", "Postgresql", "JavaScript"],
        demoLink: "https://adoteumpet.up.railway.app/",
        githubLink: "https://github.com/Adote-um-Pet-Web/AdoteUmPet"
    },
    {
        title: "BookGuardian",
        img: "assets/img/projects/bookguardian.png",
        tags: ["Python", "Django", "Oauth2", "Postgresql", "JavaScript"],
        demoLink: "https://book-guardian-production.up.railway.app/",
        githubLink: "https://github.com/A3-P/Book-Guardian"
    },
    {
        title: "Sara IA",
        img: "assets/img/projects/sarah_example.png",
        tags: ["Python", "PyQt5", "ChaterBot", "Sqlite3", "SpeechRecognition"],
        demoLink: null,
        githubLink: "https://github.com/wendellast/Sara-IA-QT"
    },
    {
        title: "Roberto",
        img: "assets/img/projects/roberto.jpeg",
        tags: ["Go", "C++", "Arduino", "Esp32", "Gin-Gonic"],
        demoLink: null,
        githubLink: "https://github.com/wendellast/Roberto"
    },
    {
        title: "Phyrexia-Translate",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },

    {
        title: "Test1",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },
    {
        title: "Test2",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },
    {
        title: "Test3",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },
    {
        title: "Test4",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },
    {
        title: "Test5",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },
    {
        title: "Test6",
        img: "assets/img/projects/phyrexia.png",
        tags: ["Html", "Css", "JavaScript", "Glyphs"],
        demoLink: "https://phyrexia-font.vercel.app/",
        githubLink: "https://github.com/wendellast/Phyrexia-Font"
    },

];

let currentIndex = 0;


function displayProjects() {
const container = document.getElementById("projects-container");
const currentCards = container.querySelectorAll('.work__card');

currentCards.forEach(card => {
card.classList.add('hide');
});

setTimeout(() => {
container.innerHTML = "";

for (let i = 0; i < 6; i++) {
const index = (currentIndex + i) % projects.length;
const project = projects[index];

const projectCard = document.createElement("div");
projectCard.classList.add("work__card");
projectCard.innerHTML = `
    <img src="${project.img}" alt="${project.title}" class="work__img">
    <h3 class="work__title">${project.title}</h3>
    <hr class="gradient-hr">
    <div class="tags-container">
        ${project.tags.map(tag => `<a class="tag">${tag}</a>`).join('')}
    </div>
    <hr class="gradient-hr">
    ${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="work__button">Demo <i class='bx bx-right-arrow work__icon'></i></a>` : ''}
    <a href="${project.githubLink}" target="_blank" class="work__button">Github Link <i class='bx bxl-github'></i></a>
`;
container.appendChild(projectCard);
}


const newCards = container.querySelectorAll('.work__card');
newCards.forEach(card => {
card.classList.remove('hide');
});
}, 5000);
}

function displayProjects() {
const container = document.getElementById("projects-container");
container.innerHTML = "";

for (let i = 0; i < 6; i++) {
const index = (currentIndex + i) % projects.length;
const project = projects[index];

const projectCard = document.createElement("div");
projectCard.classList.add("work__card");

projectCard.innerHTML = `
<img src="${project.img}" alt="${project.title}" class="work__img">
<h3 class="work__title">${project.title}</h3>
<hr class="gradient-hr">
<div class="tags-container">
    ${project.tags.map(tag => `<a class="tag">${tag}</a>`).join('')}
</div>
<hr class="gradient-hr">
${project.demoLink ? `<a href="${project.demoLink}" target="_blank" class="work__button">Demo <i class='bx bx-right-arrow work__icon'></i></a>` : ''}
<a href="${project.githubLink}" target="_blank" class="work__button">Github Link <i class='bx bxl-github'></i></a>
`;
container.appendChild(projectCard);
}
}

document.getElementById("prev").addEventListener("click", () => {
currentIndex = Math.max(currentIndex - itemsPerPage, 0);
displayProjects();
});

document.getElementById("next").addEventListener("click", () => {
currentIndex += itemsPerPage;
if (currentIndex >= projects.length) {
currentIndex = projects.length - itemsPerPage;
}
displayProjects();
});

displayProjects();

document.getElementById("prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 6 + projects.length) % projects.length;
    displayProjects();
});

document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 6) % projects.length;
    displayProjects(); s
});

displayProjects();

