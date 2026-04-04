const defaultPhoto = "images/member/IMG_2443.JPG";

const members = {
  pi: [
    {
      name: "Prof. Ming-Hsiu Chen",
      role: "Principal Investigator",
      focus: "Computational methods, intelligent systems, and interdisciplinary engineering research.",
      photo: defaultPhoto
    }
  ],
  ms1: [
    {
      name: "Yu-Ting Lin",
      role: "Year 1",
      focus: "Data-driven modeling and system analysis.",
      photo: defaultPhoto
    },
    {
      name: "Chia-Hao Wang",
      role: "Year 1",
      focus: "Machine learning applications in research workflows.",
      photo: defaultPhoto
    },
    {
      name: "Pei-Ju Huang",
      role: "Year 1",
      focus: "Experimental design and quantitative evaluation.",
      photo: defaultPhoto
    },
    {
      name: "Cheng-En Liu",
      role: "Year 1",
      focus: "Simulation pipelines and computational tools.",
      photo: defaultPhoto
    }
  ],
  ms2: [
    {
      name: "Yi-An Chen",
      role: "Year 2",
      focus: "Thesis on predictive modeling and robust evaluation.",
      photo: defaultPhoto
    },
    {
      name: "Tzu-Hao Wu",
      role: "Year 2",
      focus: "Thesis on optimization methods and practical deployment.",
      photo: defaultPhoto
    },
    {
      name: "Po-Han Tsai",
      role: "Year 2",
      focus: "Thesis on multimodal sensing and analysis.",
      photo: defaultPhoto
    },
    {
      name: "Hsuan-Yu Kuo",
      role: "Year 2",
      focus: "Thesis on scientific computing and reproducible systems.",
      photo: defaultPhoto
    }
  ],
  ug: [
    {
      name: "Wei-Jie Lin",
      role: "Undergraduate Researcher",
      focus: "Prototype development and experimental support.",
      photo: defaultPhoto
    },
    {
      name: "Yu-Hsuan Chang",
      role: "Undergraduate Researcher",
      focus: "Project implementation and data collection.",
      photo: defaultPhoto
    },
    {
      name: "Chun-Kai Lee",
      role: "Undergraduate Researcher",
      focus: "Research assistance and system testing.",
      photo: defaultPhoto
    }
  ]
};

function createPersonCard(member) {
  const card = document.createElement("article");
  card.className = "person-card";
  card.setAttribute("data-reveal", "");
  card.innerHTML = `
    <img class="person-photo" src="${member.photo}" alt="${member.name}" />
    <div class="person-meta">
      <h4 class="person-name">${member.name}</h4>
      <p class="person-role">${member.role}</p>
      <p class="person-focus">${member.focus}</p>
    </div>
  `;
  return card;
}

function populatePeople(groupId, groupMembers) {
  const target = document.getElementById(groupId);
  if (!target) return;

  groupMembers.forEach((member) => {
    target.appendChild(createPersonCard(member));
  });
}

populatePeople("pi-grid", members.pi);
populatePeople("ms1-grid", members.ms1);
populatePeople("ms2-grid", members.ms2);
populatePeople("ug-grid", members.ug);

document.querySelectorAll(".section, .hero-panel").forEach((element) => {
  element.setAttribute("data-reveal", "");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll("[data-reveal]").forEach((element) => {
  observer.observe(element);
});

const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}
