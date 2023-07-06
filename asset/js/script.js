// Navbar mobile slider
const menuToggle = document.querySelector('.check');
const nav = document.querySelector('nav ul');

menuToggle.addEventListener('click', function(){
    nav.classList.toggle('slide');
});


// Typing
var messages=["I build things for the web", "Cloud and Linux Enthusiast"];
var rank=0;

// Code for Chrome, Safari and Opera
document.getElementById("myTypewriter").addEventListener("webkitAnimationEnd", changeTxt);

// Standard syntax
document.getElementById("myTypewriter").addEventListener("animationend", changeTxt);

function changeTxt(e){
  _h1 = this.getElementsByTagName("h3")[0];
  _h1.style.webkitAnimation = 'none'; // set element animation to none
   setTimeout(function() { // you surely want a delay before the next message appears
      _h1.innerHTML=messages[rank];
      var speed =3.5*messages[rank].length/20; // adjust the speed (3.5 is the original speed, 20 is the original string length
      _h1.style.webkitAnimation = 'typing '+speed+'s steps(40, end), blink-caret .75s step-end infinite'; //  switch to the original set of animation      
      (rank===messages.length-1)?rank=0:rank++; // if you have displayed the last message from the array, go back to the first one, else go to next message
    }, 1000);
}


// Swipper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // spaceBetween: 30,
    grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  //Learn
  const btn1 = document.getElementById('btn1');
  const btn = document.querySelector('button');
  const icon = document.getElementById('icon');
  const body = document.body;


  function clickBtn() {
    const txt = document.createElement('p'); //deklrasi pembuatan elemetn P
    txt.textContent = 'Belajar DOM'; //isi dari dalam element P
    body.append(txt); //mendorong isi dalam variable P kedalam body html
  }

  function setColor() {
   btn2.style.color = '#ffffff';
  }

  function defaultColor() {
    btn2.style.color = '#1545e2';
  }

  // onclick terjadi ketika elemen diklik oleh pengguna.
  // onmouseover terjadi ketika kursor mouse berada di atas elemen.
  // onmouseout terjadi saat kursor mouse meninggalkan elemen setelah sebelumnya berada di atasnya.
  // onkeydown terjadi saat tombol keyboard ditekan.
  // onkeyup terjadi saat tombol keyboard dilepaskan setelah sebelumnya ditekan.
  // onchange terjadi saat nilai elemen input berubah.
  // onload terjadi ketika elemen atau halaman telah selesai dimuat sepenuhnya.