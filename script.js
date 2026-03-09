(() => {
  // This file is intentionally tiny:
  // - It handles the "Theme" button (dark/light).
  // - It remembers the user's choice in localStorage.
  // - It applies the theme by setting an attribute on <html>.

  // If JavaScript loads successfully, we remove the "no-js" class from <html>.
  // (You can use that class in CSS to change behavior when JS is disabled.)
  document.documentElement.classList.remove("no-js");

  // Key name used in localStorage.
  const THEME_KEY = "theme";

  // Grab the button from the HTML by its id="themeToggle".
  const toggle = document.getElementById("themeToggle");

  // If the user never chose a theme, we start from the OS/browser preference.
  function getPreferredTheme() {
    return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }

  // Read the saved theme from localStorage.
  // If nothing is saved, fall back to the preferred theme.
  function getTheme() {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === "light" || saved === "dark") return saved;
    return getPreferredTheme();
  }

  // Apply the theme to the page:
  // CSS reads this attribute: html[data-theme="light"] { ... }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (toggle) {
      // Accessibility: keep the button label accurate for screen readers.
      const label = theme === "light" ? "Switch to dark theme" : "Switch to light theme";
      toggle.setAttribute("aria-label", label);

      // Visual text inside the button.
      const textEl = toggle.querySelector(".theme-toggle__text");
      if (textEl) textEl.textContent = theme === "light" ? "Light" : "Dark";
    }
  }

  // Save the theme choice, then apply it.
  function setTheme(theme) {
    localStorage.setItem(THEME_KEY, theme);
    applyTheme(theme);
  }

  // Set initial theme on page load.
  applyTheme(getTheme());

  if (toggle) {
    toggle.addEventListener("click", () => {
      // Toggle between light and dark.
      const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
      setTheme(current === "light" ? "dark" : "light");
    });
  }
})();
