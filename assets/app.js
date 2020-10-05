const links = document.querySelectorAll("#main-nav ul a");
const mainNav = document.getElementById("main-nav");
const sections = document.querySelectorAll("section");
let navMenu = document.querySelector('#main-nav ul');
const articles = document.querySelectorAll( "section > article");
const visibleArticles = document.querySelectorAll(' section.visible > article');
const logo = document.querySelector('#logo');
const subNavLinks = document.querySelectorAll('.subNav>li>a'); 
let burger = document.querySelector('.burger');
let backTop = document.querySelector('.toTop');

// Subnav creation





backTop.addEventListener('click', function (e){
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
})


for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 

logo.addEventListener('click', function(e){
  e.preventDefault();
  (burger.classList.contains('open'))? burger.classList.remove('open'):null;
  for(section of sections){
    section.classList.contains("visible")? section.classList.remove('visible'): null;
  }
  header.style.display = "block";
  mainNav.classList.contains('transparent')? null:mainNav.classList.add('transparent');
  for(link of links){
    link.classList.contains('active-navlink')?link.classList.remove('active-navlink'):null;
  }
  navMenu.classList.contains('active-navbar')?navMenu.classList.remove('active-navbar'): null;
})




// Fonction clickhandler pour la navigation principal
function clickHandler(e) {
  const header = document.getElementById("header");
  header.style.display = "none";
  e.preventDefault();
  for( link of links){
    link.classList.remove('active-navlink');
  }
  mainNav.classList.contains('transparent')? mainNav.classList.remove('transparent'): null ;
  const href = this.getAttribute("href");
  this.classList.add('active-navlink');
  console.log("I got cliked !"+href);
  for (section of sections) {  
    let sectionId = "#"+section.id ;
    if (href === sectionId ) {
    
      section.classList.add('visible');
      document.querySelector(href).scrollIntoView({
        behavior: "instant"
      });
    } else {
      section.classList.remove('visible');
    }
  }
  
 ( burger.style.display === "none") ? null : toggleNavbar();
  
  
}




//  SLIDER JS
$('.slickSlider').slick({autoplay: true,
  autoplaySpeed: 2000,});


// footer date
let dt = document.querySelector('footer span:last-of-type');

let dateYear =new Date()
dt.innerText = dateYear.getFullYear() ;







// Reponsive burger/navbar functions



// function qui cible la navbar et lui rajoute la classe active-navbar
function toggleNavbar() {

  (burger.classList.contains('open'))? burger.classList.remove('open'): burger.classList.add('open');  
  navMenu.classList.toggle('active-navbar');
 
}

// fonction detection du click sur le burger

burger.addEventListener('click', function(){
  toggleNavbar();

})