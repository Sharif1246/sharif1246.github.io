const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");
const storedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function updateThemeLabel(isDark) {
  themeIcon.innerHTML = isDark ? "&#9728;" : "&#9790;";
  themeText.textContent = isDark ? "Light" : "Dark";
  themeToggle.setAttribute("aria-label", isDark ? "Switch to light mode" : "Switch to dark mode");
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-theme", isDark);
  updateThemeLabel(isDark);
}

const initialTheme = storedTheme || (prefersDark ? "dark" : "light");
applyTheme(initialTheme);

themeToggle.addEventListener("click", () => {
  const isDarkMode = document.body.classList.contains("dark-theme");
  const nextTheme = isDarkMode ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});
