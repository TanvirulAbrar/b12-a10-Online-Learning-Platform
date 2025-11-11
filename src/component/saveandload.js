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

export default { saveins, loadins, removeins };
