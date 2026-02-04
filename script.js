let images = [
  "https://via.placeholder.com/400",
  "https://via.placeholder.com/401",
  "https://via.placeholder.com/402"
];
let i = 0;

setInterval(() => {
  document.getElementById("slide").src = images[i];
  i = (i + 1) % images.length;
}, 2000);

function openModal() {
  document.getElementById("modal").style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

function validateForm() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name === "" || email === "") {
    document.getElementById("error").innerText = "All fields required";
    return false;
  }
  alert("Form Submitted Successfully");
  return true;
}