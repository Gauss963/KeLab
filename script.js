const members = {
  pi: [
    {
      name: "Prof. PI Name",
      role: "Principal Investigator",
      focus: "Add a short bio, key research interests, and one-line academic profile here."
    }
  ],
  ms1: [
    {
      name: "M.S. Student 1",
      role: "Year 1",
      focus: "Research topic or project focus"
    },
    {
      name: "M.S. Student 2",
      role: "Year 1",
      focus: "Research topic or project focus"
    },
    {
      name: "M.S. Student 3",
      role: "Year 1",
      focus: "Research topic or project focus"
    },
    {
      name: "M.S. Student 4",
      role: "Year 1",
      focus: "Research topic or project focus"
    }
  ],
  ms2: [
    {
      name: "M.S. Student 5",
      role: "Year 2",
      focus: "Thesis theme or system area"
    },
    {
      name: "M.S. Student 6",
      role: "Year 2",
      focus: "Thesis theme or system area"
    },
    {
      name: "M.S. Student 7",
      role: "Year 2",
      focus: "Thesis theme or system area"
    },
    {
      name: "M.S. Student 8",
      role: "Year 2",
      focus: "Thesis theme or system area"
    }
  ],
  ug: [
    {
      name: "Undergraduate 1",
      role: "Undergraduate Researcher",
      focus: "Prototype, experiment, or project topic"
    },
    {
      name: "Undergraduate 2",
      role: "Undergraduate Researcher",
      focus: "Prototype, experiment, or project topic"
    },
    {
      name: "Undergraduate 3",
      role: "Undergraduate Researcher",
      focus: "Prototype, experiment, or project topic"
    }
  ]
};

function createPersonCard(member) {
  const initials = member.name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((segment) => segment[0].toUpperCase())
    .join("");

  const card = document.createElement("article");
  card.className = "person-card";
  card.setAttribute("data-reveal", "");
  card.innerHTML = `
    <div class="person-avatar" aria-hidden="true">${initials}</div>
    <p class="person-role">${member.role}</p>
    <h4 class="person-name">${member.name}</h4>
    <p class="person-focus">${member.focus}</p>
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
