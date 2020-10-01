const links = document.querySelectorAll("#main-nav ul a");
const mainNav = document.getElementById("main-nav")
const sections = document.querySelectorAll("section");
const header = document.getElementById("header");
const articles = document.querySelectorAll( "section > article")
const visibleArticles = document.querySelectorAll(' section.visible > article')
const logo = document.querySelector('#logo');



for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 







function clickHandler(e) {
  e.preventDefault();
  for( link of links){
    link.classList.remove('active-navlink');
  }
  header.classList.remove('visible');
  const href = this.getAttribute("href");
  this.classList.add('active-navlink');
  console.log("I got cliked !"+href)
  for (section of sections) {  
    let sectionId = "#"+section.id ;
    if (href === sectionId ) {
    
      section.classList.add('visible')
      document.querySelector(href).scrollIntoView({
        behavior: "instant"
      });
    } else {
      section.classList.remove('visible')
    }
  }
  
  
  
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




