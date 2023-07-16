
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => { 
       let top = window.scrollY;
       let offset = sec.offsetTop - 150;
       let height = sec.offsetheight;
       let id = sec.gatAttribute('id');

       if(top >= offset && top < offset + height) {
        navLinks.forEach(links =>{
          links.classList.remove('active');
          document.querySelector('header nav a[href*=' + id + ']').className
        })
       };

  });

  let header = document.querySelector('header');
header.classList.toggle('stickly', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};

ScrollReveal({ 
  reset: true,
  distance: '88px',
  duration: 2000,
  delay: 200

 });
 ScrollReveal().reveal('.home-content, .heading,', { origin: 'top'});
 ScrollReveal().reveal('.home-img, .services-container,.portfolio-box,.contact form,.about-img', { origin: 'bottom'});
 ScrollReveal().reveal('.home-content, .home h1,', { origin: 'left'});
 ScrollReveal().reveal('.heading', { origin: 'top'});
