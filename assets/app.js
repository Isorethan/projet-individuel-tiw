const links = document.querySelectorAll("#main-nav ul a");
const sections = document.querySelectorAll("section")
const divs = document.querySelectorAll('section > div')
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
 
  document.querySelector(href).scrollIntoView({
    behavior: "smooth"
  });
}




for (const section of sections) {
  let targetSection =  section.querySelectorAll("h2");
 let subMenu = document.createElement('ul');
 subMenu.className = "sub-menu" ;
   for (h2 of targetSection) {
    let subLi = document.createElement("li");
    subLi.innerText = h2.innerText ;
    subMenu.appendChild(subLi);
    subLi.className = "sub-li" ;
   }
 
 
  

 
  divs.appendChild(subMenu)
 

}

