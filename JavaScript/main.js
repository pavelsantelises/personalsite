// Dark UI
const btnSwitch = document.querySelector("#button-3");

btnSwitch.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnSwitch.classList.toggle("active");
});



// to too btn
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


var typed = new Typed('.container-f', {
  strings: ["work","create", "inspire"],
        typeSpeed: 300,
        backSpeed: 300,
        smartBackspace: false,
        loop: true,
        shuffle: true,
});
