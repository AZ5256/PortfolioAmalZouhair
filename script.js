const root = document.documentElement;
const toggle = document.getElementById("themeToggle");
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  root.dataset.theme = savedTheme;
  toggle.textContent = savedTheme === "dark" ? "☀" : "☾";
}

toggle.addEventListener("click", () => {
  const dark = root.dataset.theme !== "dark";
  root.dataset.theme = dark ? "dark" : "light";
  localStorage.setItem("theme", root.dataset.theme);
  toggle.textContent = dark ? "☀" : "☾";
});

document.getElementById("year").textContent = new Date().getFullYear();
