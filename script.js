
const projects = [
  {
    id: "twcc-recovery-modernization",
    title: "TWCC — Legacy Recovery & Modernization Program",
    category: ["gis", "platform"],
    badge: "Flagship Professional Work",
    summary:
      "Recovery and modernization of a multi-module C++/Qt GIS system, including operator displays, track planning, simulation, replay, interfaces, database integration, and a modern web POC.",
    points: [
      "Recovered Qt displays, GIS overlays, planning, replay, simulator, and source-backed operator workflows.",
      "Traced UDP/TCP communication, PostgreSQL data flows, module startup, and runtime dependencies.",
      "Built an Angular, Django, and Luciad modernization POC without inventing unsupported operational behaviour."
    ],
    tags: ["C++", "Qt", "QGIS", "Angular", "Django", "PostgreSQL"],
    role:
      "Legacy code inspection, workflow restoration, geospatial correction, interface recovery, runtime integration, build validation, modernization design, and technical demonstration preparation.",
    challenge:
      "The recovered system contains incomplete modules, machine-specific assumptions, distributed runtime dependencies, and workflows that must be restored from evidence rather than redesigned from guesswork.",
    outcome:
      "Established a credible recovery and modernization path covering the original desktop runtime, planning tools, interfaces, simulation, and a contemporary web architecture.",
    confidentiality:
      "This case study presents only publicly safe engineering information. Sensitive operational, protocol, and deployment details are excluded."
  },
  {
    id: "radar-detection",
    title: "Radar Detection & Terrain-Aware Radar Simulation",
    category: ["gis", "platform"],
    badge: "Active Development",
    summary:
      "A Python and Angular platform for CAT048/CAT062 radar visualization, replay, live UDP processing, diagnostics, and terrain-aware performance simulation.",
    points: [
      "Built FastAPI services and independently implemented testable radar-physics components.",
      "Added CAT048/CAT062 replay, live UDP integration, diagnostics, and frontend workflows.",
      "Designed irregular terrain-aware radar coverage instead of fixed-radius circles."
    ],
    tags: ["Python", "FastAPI", "Angular", "3D GIS", "Pytest", "UDP"],
    role:
      "System architecture, backend APIs, radar physics, automated validation, frontend integration, runtime debugging, and project organization.",
    challenge:
      "Radar performance depends on geometry, horizon, terrain, target properties, signal-to-noise behaviour, probability of detection, and deterministic validation.",
    outcome:
      "Created a connected frontend/backend demonstration with an expanding automated validation suite for radar-data processing and simulation.",
    confidentiality:
      "Presented as a radar engineering, data-processing, and visualization platform without operational fire-control logic."
  },
  {
    id: "tgbmc",
    title: "TGBMC — Tactical GIS Battle Management Platform",
    category: ["gis", "platform"],
    badge: "Flagship POC",
    summary:
      "A tactical GIS software demonstration for situational awareness, counter-drone monitoring, mission planning, replay, and geospatial intelligence.",
    points: [
      "Defined an Angular, Luciad RIA, FastAPI, PostGIS, Redis, and WebSocket architecture.",
      "Created a clean PostGIS foundation with geospatial entities and deployment tooling.",
      "Focused the product on awareness, planning, analytics, replay, and decision support."
    ],
    tags: ["Angular", "Luciad RIA", "FastAPI", "PostGIS", "Redis", "Docker"],
    role:
      "Product direction, system architecture, data modelling, GIS workflow design, terminology cleanup, deployment foundations, and module-by-module implementation.",
    challenge:
      "The platform must operate as a credible professional GIS product while keeping scope disciplined and avoiding unsupported autonomous engagement claims.",
    outcome:
      "Established a modern technical foundation and a clear flagship product direction for StackOre Technologies.",
    confidentiality:
      "Public descriptions focus on situational awareness and geospatial decision support."
  },
  {
    id: "robotics-perception",
    title: "Robotics, SLAM & 3D Perception",
    category: ["robotics"],
    badge: "Professional Engineering",
    summary:
      "Integration of RGB-D cameras, LiDAR, ROS2, SLAM, 3D perception, simulation, and rover navigation workflows for mapping and spatial analysis.",
    points: [
      "Processed RGB and depth data from Intel RealSense and Orbbec Astra using OpenCV and Open3D.",
      "Integrated and visualized rover and YDLidar sensor data through ROS2 Humble and RViz2.",
      "Created Gazebo-compatible assets and worked with SLAM, navigation, localization, and TensorRT-based perception."
    ],
    tags: ["ROS2", "RViz2", "Open3D", "OpenCV", "RealSense", "YDLidar"],
    role:
      "Sensor integration, RGB-D processing, point-cloud visualization, simulated environment preparation, SLAM experimentation, rover navigation, and runtime validation.",
    challenge:
      "Robotics workflows require reliable coordination between sensors, coordinate frames, perception models, simulation, localization, mapping, and physical rover behaviour.",
    outcome:
      "Built practical experience across perception, autonomous navigation, 3D reconstruction, simulation, and robotics system integration.",
    confidentiality:
      "Only general robotics technologies and engineering responsibilities are presented."
  },
  {
    id: "carsetu-ecosystem",
    title: "CarSetu — Marketplace & Android Field Operations",
    category: ["business", "platform", "mobile"],
    badge: "Founder Product",
    summary:
      "A local used-car marketplace ecosystem combining public inventory, dealer workflows, admin operations, lead generation, photo review, and an Android field-capture application.",
    points: [
      "Built public inventory, dealer, lead, admin, and structured photo-review workflows.",
      "Created a Kotlin and Jetpack Compose application for vehicle creation and guided multi-photo capture.",
      "Deployed the web and API stack using Vercel, Render, and MongoDB Atlas."
    ],
    tags: ["React", "Node.js", "MongoDB", "Kotlin", "Android", "Vercel"],
    role:
      "Founder, product manager, system designer, full-stack developer, Android developer, deployment owner, and business-process designer.",
    challenge:
      "The ecosystem must support fast dealer operations, trustworthy vehicle presentation, structured field photography, lead generation, and clear public claims without owning inventory.",
    outcome:
      "Created an end-to-end product foundation covering dealer onboarding, inventory creation, mobile field capture, admin review, public discovery, and lead workflows.",
    confidentiality:
      "Public demonstrations exclude customer information, dealer personal data, and private operational records."
  },
  {
    id: "barodabox",
    title: "BarodaBox — Rental Operations Platform",
    category: ["business", "platform"],
    badge: "Live Business System",
    summary:
      "A WhatsApp-first cooler-rental platform for inventory availability, booking information, deposits, product presentation, and local operations.",
    points: [
      "Built inventory and availability management for a real rental fleet.",
      "Deployed the frontend and backend through cloud services.",
      "Connected customer-facing product discovery to a simple booking workflow."
    ],
    tags: ["Vite", "Node.js", "Supabase", "Render", "Inventory", "WhatsApp"],
    role:
      "Business owner, product designer, full-stack developer, deployment owner, and operations workflow designer.",
    challenge:
      "The system must remain simple for local customers while accurately representing availability and rental conditions.",
    outcome:
      "Converted a manual rental operation into a shareable catalogue and digital inventory workflow.",
    confidentiality:
      "Customer details and private booking information are excluded from portfolio material."
  },
  {
    id: "stackore",
    title: "StackOre Technologies — Software POC Studio",
    category: ["business", "platform"],
    badge: "Founder Platform",
    summary:
      "A software product and proof-of-concept studio focused on websites, MVPs, dashboards, automation, AI/ML, GIS, computer vision, robotics, and edge systems.",
    points: [
      "Built the StackOre credibility website and project presentation structure.",
      "Integrated contact and career email workflows with Vercel deployment.",
      "Defined an agency-first direction supported by real products and technical POCs."
    ],
    tags: ["Next.js", "TypeScript", "Resend", "Vercel", "Product Strategy", "SEO"],
    role:
      "Founder, product strategist, web developer, deployment owner, and portfolio curator.",
    challenge:
      "The brand must demonstrate credible engineering capability through real work rather than functioning only as an internship platform.",
    outcome:
      "Created a professional foundation for presenting software products, POCs, services, and future client work.",
    confidentiality:
      "Safe for public presentation."
  }
];

const projectGrid = document.getElementById("projectGrid");
const filters = document.querySelectorAll(".filter");
const modal = document.getElementById("projectModal");
const modalContent = document.getElementById("modalContent");
const modalClose = document.getElementById("modalClose");
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

function projectCard(project, index) {
  const tags = project.tags.map((tag) => `<span>${tag}</span>`).join("");
  const points = project.points.map((point) => `<li>${point}</li>`).join("");

  return `
    <article class="project-card reveal" data-category="${project.category.join(" ")}">
      <div class="project-card-top">
        <span class="project-number">${String(index + 1).padStart(2, "0")}</span>
        <span class="project-badge">${project.badge}</span>
      </div>
      <h3>${project.title}</h3>
      <p class="project-summary">${project.summary}</p>
      <ul class="project-points">${points}</ul>
      <div class="project-tags">${tags}</div>
      <div class="project-actions">
        <button class="project-action" data-project="${project.id}">View case study →</button>
      </div>
    </article>
  `;
}

function renderProjects(filter = "all") {
  const visibleProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category.includes(filter));

  projectGrid.innerHTML = visibleProjects.map(projectCard).join("");
  wireProjectActions();
  observeReveals();
}

function wireProjectActions() {
  document.querySelectorAll("[data-project]").forEach((button) => {
    button.addEventListener("click", () => {
      const project = projects.find((item) => item.id === button.dataset.project);
      openProject(project);
    });
  });
}

function openProject(project) {
  modalContent.innerHTML = `
    <p class="modal-kicker">${project.badge}</p>
    <h2>${project.title}</h2>
    <p>${project.summary}</p>

    <section class="modal-section">
      <h3>My contribution</h3>
      <p>${project.role}</p>
    </section>

    <section class="modal-section">
      <h3>Engineering challenge</h3>
      <p>${project.challenge}</p>
    </section>

    <section class="modal-section">
      <h3>Outcome</h3>
      <p>${project.outcome}</p>
    </section>

    <section class="modal-section">
      <h3>Public portfolio note</h3>
      <p>${project.confidentiality}</p>
    </section>

    <section class="modal-section">
      <h3>Technology</h3>
      <div class="project-tags">${project.tags.map((tag) => `<span>${tag}</span>`).join("")}</div>
    </section>
  `;
  modal.showModal();
}

filters.forEach((button) => {
  button.addEventListener("click", () => {
    filters.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderProjects(button.dataset.filter);
  });
});

modalClose.addEventListener("click", () => modal.close());
modal.addEventListener("click", (event) => {
  const rectangle = modal.getBoundingClientRect();
  const outside =
    event.clientX < rectangle.left ||
    event.clientX > rectangle.right ||
    event.clientY < rectangle.top ||
    event.clientY > rectangle.bottom;
  if (outside) modal.close();
});

menuButton.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

function observeReveals() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );

  document.querySelectorAll(".reveal:not(.visible)").forEach((element) => {
    observer.observe(element);
  });
}

document.getElementById("year").textContent = new Date().getFullYear();
renderProjects();
observeReveals();
