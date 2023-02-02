var percentage = document.querySelector('.percentage');

// Add the class "fill" to the .percentage element to start the animation
percentage.classList.add('fill');


var sectionTwo = document.querySelector(".section-two");

sectionTwo.addEventListener("scroll", ()=>{
  if (sectionTwo.scrollTop > 0) {
    sectionTwo.classList.add(".fade-in");
  }
});
