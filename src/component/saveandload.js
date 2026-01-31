function saveins(value) {
  localStorage.setItem(2, JSON.stringify(value));
  console.log("in save", value);
}

function removeins(value) {
  const storedValue = loadins();
  if (storedValue) {
    storedValue.includes(value) &&
      localStorage.setItem(
        2,
        JSON.stringify(storedValue.filter((a) => a != value))
      );
  }
}

function loadins() {
  const storedValue = localStorage.getItem(2);
  if (storedValue) {
    const a = JSON.parse(storedValue);
    return a;
  } else {
    return "";
  }
}
const THEME_KEY = "theme";

function saveTheme(value) {
  localStorage.setItem(THEME_KEY, value);
  console.log("theme saved:", value);
}

function getTheme() {
  return localStorage.getItem(THEME_KEY) || "default";
}

export default { saveins, loadins, removeins, saveTheme, getTheme };
