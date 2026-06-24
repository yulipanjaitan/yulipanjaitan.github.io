const form = document.getElementById("appointmentForm");

form.addEventListener("submit", function(e){

e.preventDefault();

alert("Reservasi berhasil dikirim.");

form.reset();

});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener('click', function(e){

e.preventDefault();

document.querySelector(
this.getAttribute('href')
).scrollIntoView({

behavior:'smooth'

});

});

});
