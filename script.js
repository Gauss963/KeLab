const members = {
  pi: [
    {
      name: "Prof. Ming-Hsiu Chen",
      role: "Principal Investigator",
      title: "Professor, National Taiwan University",
      focus: "Computational methods, intelligent systems, and interdisciplinary engineering research.",
      bio: "Prof. Chen leads Ke Earthquake Lab with research spanning computational modeling, learning-enabled analysis, and practical engineering systems. The group emphasizes rigorous methodology, reproducible workflows, and close collaboration across graduate and undergraduate projects.",
      email: "mhchen@ntu.edu.tw",
      office: "Engineering Building II, Room 517",
      photo: "images/member/IMG_2443.JPG"
    }
  ],
  ms1: [
    {
      name: "Yu-Ting Lin",
      role: "Year 1",
      focus: "Data-driven modeling and system analysis.",
      photo: "images/member/1e599ceb-ce32-4588-b931-f1dd33c99b37.jpg"
    },
    {
      name: "Chia-Hao Wang",
      role: "Year 1",
      focus: "Machine learning applications in research workflows.",
      photo: "images/member/8b97e421-39d2-4295-854f-d194e06a99fc.jpg"
    },
    {
      name: "Pei-Ju Huang",
      role: "Year 1",
      focus: "Experimental design and quantitative evaluation.",
      photo: "images/member/90e3ffe4-f26b-4e6e-8ee4-c59e07baf28f.jpg"
    },
    {
      name: "Cheng-En Liu",
      role: "Year 1",
      focus: "Simulation pipelines and computational tools.",
      photo: "images/member/clker-free-vector-images-teacher-295387_1920.png"
    }
  ],
  ms2: [
    {
      name: "Yi-An Chen",
      role: "Year 2",
      focus: "Thesis on predictive modeling and robust evaluation.",
      photo: "images/member/coxinhafotos-avatar-2092113.svg"
    },
    {
      name: "Tzu-Hao Wu",
      role: "Year 2",
      focus: "Thesis on optimization methods and practical deployment.",
      photo: "images/member/mohamed_hassan-avatar-3637561_1920.png"
    },
    {
      name: "Po-Han Tsai",
      role: "Year 2",
      focus: "Thesis on multimodal sensing and analysis.",
      photo: "images/member/mohamed_hassan-man-3414477_1920.png"
    },
    {
      name: "Hsuan-Yu Kuo",
      role: "Year 2",
      focus: "Thesis on scientific computing and reproducible systems.",
      photo: "images/member/openclipart-vectors-man-156584_1920.png"
    }
  ],
  ug: [
    {
      name: "Wei-Jie Lin",
      role: "Undergraduate Researcher",
      focus: "Prototype development and experimental support.",
      photo: "images/member/prettysleepy-nun-4018982_1920.png"
    },
    {
      name: "Yu-Hsuan Chang",
      role: "Undergraduate Researcher",
      focus: "Project implementation and data collection.",
      photo: "images/member/1e599ceb-ce32-4588-b931-f1dd33c99b37.jpg"
    },
    {
      name: "Chun-Kai Lee",
      role: "Undergraduate Researcher",
      focus: "Research assistance and system testing.",
      photo: "images/member/8b97e421-39d2-4295-854f-d194e06a99fc.jpg"
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

function createPiCard(member) {
  const card = document.createElement("article");
  card.className = "pi-card";
  card.setAttribute("data-reveal", "");
  card.innerHTML = `
    <img class="pi-photo" src="${member.photo}" alt="${member.name}" />
    <div class="pi-meta">
      <p class="person-role">${member.role}</p>
      <h3 class="pi-name">${member.name}</h3>
      <p class="pi-title">${member.title}</p>
      <p class="pi-bio">${member.bio}</p>
      <div class="pi-details">
        <p><strong>Email:</strong> ${member.email}</p>
        <p><strong>Office:</strong> ${member.office}</p>
        <p><strong>Research:</strong> ${member.focus}</p>
      </div>
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

function populatePi(groupId, groupMembers) {
  const target = document.getElementById(groupId);
  if (!target) return;

  groupMembers.forEach((member) => {
    target.appendChild(createPiCard(member));
  });
}

populatePi("pi-grid", members.pi);
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
