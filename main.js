var bottomTop = document.getElementById('myBtn');

window.onscroll= ()=> {
    if (document.documentElement.scrollTop > 500) {
        bottomTop.style.display = "block";
      } else {
        bottomTop.style.display = "none";
      }
    
}



var hamBurger = document.getElementById('hamburger');
var show = document.getElementById("ham-nav");


hamBurger.addEventListener("click", () =>{
  if (show.style.display=="none") {
    show.style.display="block";
  }
  else{
    show.style.display="none"
  }
})