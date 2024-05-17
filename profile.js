const navbar = document.getElementById("navbar");
document.addEventListener("scroll", () => {
  if (window.scrollY < 110 && window.scrollY >= 0) {
    navbar.style.backgroundColor = "rgb(62, 113, 113)";
  } else if (window.scrollY > 110 && window.scrollY < 1000) {
    navbar.style.backgroundColor = "rgb(175, 113, 113)";
  } else if (window.scrollY > 1000 && window.scrollY < 1500) {
    navbar.style.backgroundColor = "rgb(120, 0, 120)";
  } else if (window.scrollY > 1500 && window.scrollY < 2000) {
    navbar.style.backgroundColor = "rgb(59,68,75)";
  } else if (window.scrollY > 2000 && window.scrollY < 2500) {
    navbar.style.backgroundColor = "rgb(205,92,92)";
  } else if (window.scrollY > 3500 && window.scrollY < 3700) {
    navbar.style.backgroundColor = "rgb(79,41,92)";
  } else {
    navbar.style.backgroundColor = "rgb(197, 97, 201)";
  }
});

function showWelcomeNote() {
  const welcomeNote = document.createElement("div");
  welcomeNote.id = "welcome-note";
  welcomeNote.textContent = "Welcome!";

  document.body.appendChild(welcomeNote);

  welcomeNote.style.display = "block";

  setTimeout(() => {
    welcomeNote.parentNode.removeChild(welcomeNote);
  }, 4000);
}

window.addEventListener("load", showWelcomeNote);
