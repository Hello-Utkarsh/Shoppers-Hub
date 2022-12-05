document.querySelector("button1").addEventListener('onclick', myfunction())

function myfunction() {
  console.log("hell")
  document.getElementById("dropdown").classList.toggle("show")
}