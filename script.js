function showContact() {
  document.getElementById("contactOverlay").style.display = "block";
}
function closeContact() {
  document.getElementById("contactOverlay").style.display = "none";
  document.getElementById("skillsOverlay").style.display = "none";
}
function stop(event) {
  event.stopPropagation();
}
function moreSkills() {
    document.getElementById("skillsOverlay").style.display = "block";
}
