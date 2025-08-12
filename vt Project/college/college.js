

// Toggle navbar on small screens
function toggleMenu() {
  const nav = document.querySelector(".navbar");
  nav.classList.toggle("show");
}

// Search functionality
function searchFunction() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const bodyText = document.body.innerText.toLowerCase();

  if (input && bodyText.includes(input)) {
    alert(`Match found for: "${input}"`);
  } else {
    alert("No match found.");
  }
}
