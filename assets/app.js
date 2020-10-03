const links = document.querySelectorAll("#main-nav ul a");
const mainNav = document.getElementById("main-nav");
const sections = document.querySelectorAll("section");
const header = document.getElementById("header");
const articles = document.querySelectorAll( "section > article");
const visibleArticles = document.querySelectorAll(' section.visible > article');
const logo = document.querySelector('#logo');
const subNavLinks = document.querySelectorAll('.subNav>li>a'); 
let burger = document.querySelector('.burger');

// Subnav creation
for (section of sections){
  let subNav = document.createElement('ul');
  subNav.classList.add('subNav'); 
  

 let Allh2 = section.querySelectorAll("h2") ;
  
 for (h2 of Allh2) {
  let li= document.createElement('li');
  let a = document.createElement('a');
   
    h2.id = h2.innerText;
    a.setAttribute('href','#'+h2.innerText ) ;
    a.innerText = h2.innerText ;
    li.appendChild(a);
    subNav.appendChild(li);
 }

  section.appendChild(subNav);
 

}


for (subNavLink of subNavLinks) {
  subNavLink.addEventListener('click', subNavClickHandler(e))
}

function subNavClickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute('href') ;
  let Allh2 = section.querySelectorAll("h2") ;
  for (h2 of Allh2) {
    console.log(h2.getBoundingClientRect())
    if(href === h2.id) {
      
      document.querySelector(href).scrollIntoView({block:"end"});
    }
    
  }
}




for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 






// Fonction clickhandler pour la navigation principal
function clickHandler(e) {
  e.preventDefault();
  for( link of links){
    link.classList.remove('active-navlink');
  }
  header.classList.remove('visible');
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



function turnTransparent(e) {
  e.preventDefault();
if (header.classList.contains('visible')) {
   mainNav.classList.remove("transparent");
}else {
  mainNav.classList.add("transparent")
}
}

logo.addEventListener('click', turnTransparent)
 
// Intersection Observer

function handleIntersection(entries) {
  entries.map((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible')
    } else {
      entry.target.classList.remove('visible')
    }
  });
}

const observer = new IntersectionObserver(handleIntersection);

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
 let navMenu = document.querySelector('#main-nav ul');

  navMenu.classList.toggle('active-navbar');
 
}

// fonction detection du click sur le burger

burger.addEventListener('click', function(){
  toggleNavbar();
})