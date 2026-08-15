// ==========================================
// SKILL & SHELF
// Main application JavaScript
// ==========================================


// ------------------------------------------
// DEMO SKILLS
// ------------------------------------------

let skills = [
  {
    name: "Python",
    category: "Technical & IT",
    level: "Advanced"
  },
  {
    name: "JavaScript",
    category: "Technical & IT",
    level: "Intermediate"
  },
  {
    name: "Excel",
    category: "Data & Analytics",
    level: "Advanced"
  },
  {
    name: "Graphic Design",
    category: "Creative",
    level: "Intermediate"
  },
  {
    name: "Public Speaking",
    category: "Communication",
    level: "Advanced"
  },
  {
    name: "Leadership",
    category: "People & Social",
    level: "Intermediate"
  },
  {
    name: "Problem Solving",
    category: "Thinking Skills",
    level: "Advanced"
  },
  {
    name: "Video Editing",
    category: "Creative",
    level: "Advanced"
  }
];


// ------------------------------------------
// DEMO BOOKS
// ------------------------------------------

let books = [
  {
    title: "Engineering Mathematics",
    author: "B.Tech Mathematics",
    action: "sell",
    price: 350
  },
  {
    title: "Python Programming",
    author: "Programming Fundamentals",
    action: "exchange",
    price: 0
  },
  {
    title: "Operating Systems",
    author: "Computer Science",
    action: "donate",
    price: 0
  },
  {
    title: "Business Communication",
    author: "Communication Skills",
    action: "sell",
    price: 200
  },
  {
    title: "Data Structures & Algorithms",
    author: "Computer Science",
    action: "sell",
    price: 300
  },
  {
    title: "English Literature",
    author: "BA English",
    action: "exchange",
    price: 0
  }
];


// Current book filter
let currentBookFilter = "all";


// ------------------------------------------
// SHORTCUT FOR GETTING ELEMENTS
// ------------------------------------------

function getElement(id) {
  return document.getElementById(id);
}


// ------------------------------------------
// SHOW SECTION
// ------------------------------------------

function showSection(id) {

  const sections = document.querySelectorAll(".section");

  sections.forEach(function(section) {
    section.classList.remove("active-section");
  });

  const selectedSection = getElement(id);

  if (selectedSection) {

    selectedSection.classList.add("active-section");

    selectedSection.scrollIntoView({
      behavior: "smooth"
    });
  }


  // Update navigation buttons

  const navButtons = document.querySelectorAll(".nav-btn");

  navButtons.forEach(function(button) {
    button.classList.remove("active");
  });


  if (id === "home" && navButtons[0]) {
    navButtons[0].classList.add("active");
  }

  if (id === "skills" && navButtons[1]) {
    navButtons[1].classList.add("active");
  }

  if (id === "books" && navButtons[2]) {
    navButtons[2].classList.add("active");
  }
}


// ------------------------------------------
// FIND STUDENT
// ------------------------------------------

function showSearch() {

  const panel = getElement("searchPanel");

  if (!panel) {
    return;
  }

  panel.classList.remove("hidden");

  panel.scrollIntoView({
    behavior: "smooth"
  });
}


function searchStudent() {

  const input = getElement("studentId");
  const message = getElement("searchMessage");

  if (!input || !message) {
    return;
  }

  const id = input.value.trim().toUpperCase();


  if (id === "SS26-001") {

    message.textContent =
      "✓ Student found: Priya Sharma";

    showSection("skills");

  } else {

    message.textContent =
      "Student not found. Try demo ID: SS26-001";

  }
}


// ------------------------------------------
// RENDER SKILLS
// ------------------------------------------

function renderSkills() {

  const grid = getElement("skillGrid");

  if (!grid) {
    return;
  }

  grid.innerHTML = "";


  skills.forEach(function(skill) {

    const card = document.createElement("div");

    card.className = "skill";


    const name = document.createElement("b");

    name.textContent = skill.name;


    const level = document.createElement("span");

    level.className = "level";

    level.textContent = skill.level;


    const category = document.createElement("small");

    category.textContent = skill.category;


    card.appendChild(name);

    card.appendChild(level);

    card.appendChild(category);


    grid.appendChild(card);

  });
}


// ------------------------------------------
// ADD SKILL MODAL
// ------------------------------------------

function openSkillModal() {

  const modal = getElement("skillModal");

  if (!modal) {
    return;
  }

  modal.classList.remove("hidden");


  const input = getElement("skillName");

  if (input) {
    input.focus();
  }
}


function closeSkillModal() {

  const modal = getElement("skillModal");

  if (!modal) {
    return;
  }

  modal.classList.add("hidden");
}
