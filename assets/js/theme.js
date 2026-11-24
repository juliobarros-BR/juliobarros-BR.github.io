(() => {
  const choices = ["dark", "light", "system"];
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const storageKey = "portfolio-theme";
  let preference = "dark";

  try {
    const saved = localStorage.getItem(storageKey);
    if (choices.includes(saved)) preference = saved;
  } catch {
    // The switch remains usable when browser storage is disabled.
  }

  function applyTheme() {
    document.documentElement.dataset.theme =
      preference === "system" ? (media.matches ? "dark" : "light") : preference;
  }

  applyTheme();
  media.addEventListener("change", applyTheme);

  document.addEventListener("DOMContentLoaded", () => {
    const control = document.getElementById("site-theme");
    if (!control) return;
    control.value = preference;
    control.closest("label").hidden = false;
    control.addEventListener("change", () => {
      preference = control.value;
      applyTheme();
      try {
        localStorage.setItem(storageKey, preference);
      } catch {
        // The current page still reflects the selection.
      }
    });
  });
})();
