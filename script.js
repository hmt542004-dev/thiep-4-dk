function openCard() {
  document.getElementById("wish").classList.remove("hidden");
  document.getElementById("openBtn").style.display = "none";
}

function closeCard() {
  document.getElementById("wish").classList.add("hidden");
  document.getElementById("openBtn").style.display = "inline-block";
}
