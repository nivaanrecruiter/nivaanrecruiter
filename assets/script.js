document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-year]").forEach(el => el.textContent = new Date().getFullYear());
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) toggle.addEventListener("click", () => {
    const open = nav.classList.toggle("nav-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  const jobList = document.getElementById("job-list");
  if (jobList) {
    const cards = [...jobList.querySelectorAll(".job-card")];
    const runSearch = () => {
      const term = (document.getElementById("job-search")?.value || "").toLowerCase().trim();
      const location = (document.getElementById("location-search")?.value || "").toLowerCase().trim();
      const category = document.getElementById("category-filter")?.value || "";
      let count = 0;
      cards.forEach(card => {
        const matches = (!term || card.dataset.title.toLowerCase().includes(term) || card.textContent.toLowerCase().includes(term))
          && (!location || card.dataset.location.toLowerCase().includes(location))
          && (!category || card.dataset.category === category);
        card.hidden = !matches;
        if (matches) count++;
      });
      document.getElementById("result-count").textContent = count;
      document.getElementById("empty-state").hidden = count !== 0;
    };
    document.getElementById("search-button")?.addEventListener("click", runSearch);
    document.getElementById("job-search")?.addEventListener("input", runSearch);
    document.getElementById("location-search")?.addEventListener("input", runSearch);
    document.getElementById("category-filter")?.addEventListener("change", runSearch);
    document.getElementById("reset-search")?.addEventListener("click", () => {
      document.getElementById("job-search").value = "";
      document.getElementById("location-search").value = "";
      document.getElementById("category-filter").value = "";
      runSearch();
    });
  }

  const jobData = {
    "recruitment-coordinator": ["Recruitment Coordinator", "RECRUITMENT · FULL-TIME", "Nivaan Recruitment · Mohali, India / Hybrid", "Mohali, India", "We're looking for an organized and people-focused Recruitment Coordinator to help deliver a thoughtful candidate experience and keep hiring processes moving smoothly."],
    "business-development": ["Business Development Executive", "SALES · FULL-TIME", "Nivaan Recruitment · Chandigarh, India / Hybrid", "Chandigarh, India", "We're looking for a relationship-focused Business Development Executive to support new client relationships and business growth. Confirm targets, compensation and responsibilities with the hiring team."],
    "customer-support": ["Customer Support Associate", "CUSTOMER SUPPORT · REMOTE", "Confidential client · Remote, India", "Remote, India", "We're seeking a clear communicator to respond to customer questions, document interactions and help resolve issues professionally. Confirm the employer and role details before applying."],
    "operations-associate": ["Operations Associate", "OPERATIONS · FULL-TIME", "Confidential client · Mohali, India / On-site", "Mohali, India", "We're seeking an organized Operations Associate to support day-to-day processes, maintain records and coordinate tasks across the team. Confirm the employer and role details before applying."]
  };
  const key = new URLSearchParams(location.search).get("job");
  if (key && jobData[key]) {
    const [title, category, loc, summaryLoc, description] = jobData[key];
    const set = (id, value) => { const el = document.getElementById(id); if (el) el.textContent = value; };
    set("job-title", title); set("job-category", category); set("job-location", loc);
    set("summary-title", title); set("summary-location", summaryLoc); set("job-description", description);
    const href = "apply.html?job=" + encodeURIComponent(title);
    ["apply-link", "apply-link-side"].forEach(id => { const el = document.getElementById(id); if (el) el.href = href; });
    document.title = title + " | Nivaan Recruitment";
  }
  const applyJob = document.getElementById("apply-job");
  if (applyJob) applyJob.value = new URLSearchParams(location.search).get("job") || "";

  const contactType = document.getElementById("contact-type");
  if (contactType && new URLSearchParams(location.search).get("type") === "employer") contactType.value = "employer";

  document.querySelectorAll(".demo-form").forEach(form => form.addEventListener("submit", event => {
    event.preventDefault();
    const status = form.querySelector(".form-status");
    if (status) status.textContent = "Thank you. This is a front-end demo, so your information has not been sent. Connect a secure form backend before publishing.";
  }));
});