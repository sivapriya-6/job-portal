// Job data
const jobs = [
  {
    title: "AI Engineer",
    location: "Hyderabad",
    experience: "2+ years",
    description: "Build intelligent systems using NLP and ML models.",
    category: "Engineering"
  },
  {
    title: "UI/UX Designer",
    location: "Remote",
    experience: "1+ years",
    description: "Design intuitive interfaces for web and mobile platforms.",
    category: "Design"
  },
  {
    title: "Digital Marketing Executive",
    location: "Chennai",
    experience: "Fresher",
    description: "Manage campaigns and optimize SEO/SEM strategies.",
    category: "Marketing"
  },
  {
    title: "Backend Developer",
    location: "Bangalore",
    experience: "3+ years",
    description: "Develop scalable APIs and manage cloud infrastructure.",
    category: "Engineering"
  },
  {
    title: "Software Developer",
    location: "Pune",
    experience: "2+ years",
    description: "Develop and maintain web applications using JavaScript and React.",
    category: "Engineering"
  },
  {
    title: "Data Analyst",
    location: "Mumbai",
    experience: "1+ years",
    description: "Analyze datasets to uncover trends and support business decisions.",
    category: "Marketing"
  },
  {
    title: "DevOps Engineer",
    location: "Remote",
    experience: "3+ years",
    description: "Automate deployment pipelines and manage CI/CD workflows.",
    category: "Engineering"
  },
  {
    title: "Content Writer",
    location: "Kolkata",
    experience: "Fresher",
    description: "Create engaging content for blogs, websites, and social media.",
    category: "Marketing"
  }
];

// DOM elements
const jobContainer = document.querySelector(".jobs");
const searchInput = document.querySelector(".job-search input");
const categoryLinks = document.querySelectorAll(".job-categories a");

// Render job cards
function renderJobs(filteredJobs) {
  jobContainer.innerHTML = `<h3>Available Positions</h3>`;
  if (filteredJobs.length === 0) {
    jobContainer.innerHTML += `<p>No jobs found matching your search.</p>`;
    return;
  }

  filteredJobs.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.className = "job-card";
    jobCard.innerHTML = `
      <h4>${job.title}</h4>
      <p>📍 ${job.location} | 🧠 ${job.experience} experience</p>
      <p>${job.description}</p>
      <a href="apply.html" class="apply-button">Apply Now</a>
    `;
    jobContainer.appendChild(jobCard);
  });
}

// Initial render
renderJobs(jobs);

// Search filter
searchInput.addEventListener("input", function () {
  const query = this.value.toLowerCase();
  const filtered = jobs.filter(job =>
    job.title.toLowerCase().includes(query) ||
    job.location.toLowerCase().includes(query)
  );
  renderJobs(filtered);
});

// Category filter
categoryLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const category = this.dataset.category;

    let filtered;
    if (category === "Remote") {
      filtered = jobs.filter(job => job.location.toLowerCase() === "remote");
    } else {
      filtered = jobs.filter(job => job.category === category);
    }

    renderJobs(filtered);
  });
  document.querySelectorAll(".job-categories a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    // Remove 'active' from all links
    document.querySelectorAll(".job-categories a").forEach(el => el.classList.remove("active"));

    // Add 'active' to the clicked link
    this.classList.add("active");

    const category = this.dataset.category;

    let filtered;
    if (category === "Remote") {
      filtered = jobs.filter(job => job.location.toLowerCase() === "remote");
    } else {
      filtered = jobs.filter(job => job.category === category);
    }

    renderJobs(filtered);
  });
});

});
