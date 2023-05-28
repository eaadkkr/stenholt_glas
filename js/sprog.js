var en_mobil = document.getElementById("en_mobil");
var en_pc = document.getElementById("en_pc");

en_mobil.addEventListener("click", alert_box);
en_pc.addEventListener("click", alert_box);

function alert_box() {
    alert("Sorry! The translation is not available.");
}