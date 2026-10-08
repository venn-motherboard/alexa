/* =====================================================
   EDIT YOUR INFORMATION HERE — this is the only part
   you need to change. Everything else builds from it.
   ===================================================== */
const profile = {
  name: "[MY NAME]",
  role: "student developer",
  info: [
    { icon: "{ }", label: "Name",                value: "[MY NAME]" },
    { icon: "//",  label: "Age",                 value: "[MY AGE]" },
    { icon: "</>", label: "Currently Studying At", value: "[MY CURRENT SCHOOL]" },
    { icon: ">_",  label: "Course",              value: "[MY COURSE]" }
  ],
  education: [
    { level: "Elementary", school: "Bayombong Central School SPED Center",
      achievements: ["[Add achievements here]"] },
    { level: "Junior High School", school: "Saint Mary's University & Nueva Vizcaya General Comprehensive High School",
      achievements: ["[Add achievements here]"] },
    { level: "Senior High School", school: "Nueva Vizcaya General Comprehensive High School",
      achievements: ["[Add achievements here]"] }
  ],
  skills: ["HTML", "CSS", "JavaScript", "[Add a skill]"],
  projects: [
    { title: "[Project name]", desc: "[Short description of what it does]" },
    { title: "[Project name]", desc: "[Short description of what it does]" }
  ]
};

/* ============ BUILD THE PAGE FROM THE DATA ABOVE ============ */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

document.title = profile.name + " | Programmer Profile";
$("hero-name").innerHTML = "Hello, I'm <span>" + esc(profile.name) + "</span>";
$("hero-role").textContent = profile.role;
$("foot-name").textContent = profile.name;

$("info-grid").innerHTML = profile.info.map(i =>
  `<div class="card reveal"><span class="icon">${esc(i.icon)}</span>
   <span class="label">${esc(i.label)}</span><span class="value">${esc(i.value)}</span></div>`).join("");

$("edu-list").innerHTML = profile.education.map(e =>
  `<div class="card reveal"><span class="level">// ${esc(e.level)}</span><h3>${esc(e.school)}</h3>
   <div class="ach"><h4>Academic Achievements</h4><ul>${e.achievements.map(a => `<li>${esc(a)}</li>`).join("")}</ul></div></div>`).join("");

$("skill-list").innerHTML = profile.skills.map(s => `<span class="chip">${esc(s)}</span>`).join("");

$("project-list").innerHTML = profile.projects.map(p =>
  `<div class="card reveal"><span class="icon">&lt;/&gt;</span><h3 style="margin-top:8px">${esc(p.title)}</h3>
   <span class="label">${esc(p.desc)}</span></div>`).join("");

/* ============ INTRO: play ~3 seconds, then slide away ============ */
setTimeout(() => {
  $("intro").classList.add("done");
  document.body.classList.remove("locked");
}, 3000);

/* ============ SCROLL REVEAL ============ */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("show"); io.unobserve(en.target); } });
}, { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));
