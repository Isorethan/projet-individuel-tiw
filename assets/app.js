const links = document.querySelectorAll("#main-nav ul a");
const mainNav = document.getElementById("main-nav")
const sections = document.querySelectorAll("section");
const divs = document.querySelectorAll('section.subcontainer');
const header = document.getElementById("header");
const articles = document.querySelectorAll( "section > article")
const visibleArticles = document.querySelectorAll(' section.visible > article')
 

AOS.init();

for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 

window.addEventListener("scroll" , function(){
  const body = document.querySelector('body')
  console.log(window.scrollY)
})





function clickHandler(e) {
  e.preventDefault();
  header.classList.remove('visible')
  const href = this.getAttribute("href");
  console.log("I got cliked !"+href)
  for (section of sections) {  
    let sectionId = "#"+section.id ;
    if (href === sectionId ) {
    
      section.parentElement.classList.add('visible')
      document.querySelector(href).scrollIntoView({
        behavior: "instant"
      });
    } else {
      section.parentElement.classList.remove('visible')
    }
  }
  
  
  
}


if (header.classList.contains('visible')) {
  mainNav.classList.remove("transparent");
}

 



