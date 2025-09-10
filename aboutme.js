const roles = ["UI/UX Designer", "Web Developer", "Brand Creator", "Artisan"];
let roleIndex = 0;
const roleSpan = document.getElementById("animated-role");

function animateRole() {
  roleIndex = (roleIndex + 1) % roles.length;
  roleSpan.style.opacity = 0;
  setTimeout(() => {
    roleSpan.textContent = roles[roleIndex];
    roleSpan.style.opacity = 1;
  }, 350);
}
setInterval(animateRole, 2200);


document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      e.preventDefault();
      window.scrollTo({
        top: target.offsetTop - 30,
        behavior: "smooth"
      });
    }
  });
});