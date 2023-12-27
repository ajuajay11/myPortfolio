var hamBurger = document.getElementById('hamburger');
var show = document.getElementById("ham-nav");


hamBurger.addEventListener("click", () =>{
  if (show.style.display=="none") {
    show.style.display="block";
  }
  else{
    show.style.display="none"
  }
});


var bottomTop = document.getElementById('myBtn');

window.onscroll = ()=> {
    if (document.documentElement.scrollTop > 500) {
        bottomTop.style.display = "block";
      } else {
        bottomTop.style.display = "none";
    }
}
const projects =[
  {
    image:'./image/animeflix.png',
    name:"Animeflix",
    link: "https://ajflix.web.app/"
  },
  {
  image:'./image/Puratap.png',
  name:"Puratap",
  link: "https://www.puratap.com.au/"
},{
  image:'./image/lottiebee.png',
  name:"Lottiebee",
  link: "https://ajuajay11.github.io/lottiebee/"
},{
image:'./image/Varaluae.png',
  name:"Varal uae",
  link: "https://ajuajay11.github.io/project-one/"
},{
  image:'./image/auto.png',
  name:"Infinity Automobiles",
  link: "https://infinityautomobiles.com/"
},{
  image:'./image/jsconstructions.png',
  name:"JS Constructions",
  link: "https://jsconstructionss.com/"
},{
  image:'./image/selling..png',
  name:"Selling.",
  link: "https://ajuajay11.github.io/project-two/"
},{
  image:'./image/Folio.png',
  name:"Infinity Automobiles",
  link: "https://ajuajay11.github.io/project-three/"
},{
  image:'./image/nugenica.png',
  name:"Nugenica",
  link: "https://nugenica.in/"
},{
  image:'./image/physiocare.png',
  name:"Sivam Physiocare",
  link: "https://sivamphysiocare.com/"
},
{
    image:'./image/portfolio.png',
    name:"Personal Portfolio",
    link: "https://ajuajay11.github.io/myPortfolio/index.html"
},{
    image:'./image/kelly.png',
    name:"Kelly",
    link: "https://ajuajay11.github.io/project-four/"
},{
  image:'./image/riyadvi.png',
  name:"Riyadvi",
  link: "https://riyadvisoftwaretechnologies.com/"
},{
  image:'./image/digi.png',
  name:"Tourist Place",
  link: "https://ajuajay11.github.io/Digistart/"
},{
  image:'./image/sterling.png',
  name:"Sterlingvalves & Controls",
  link: "https://sterlingvalvesandcontrols.in/"
}];

let value = "";

projectName=document.getElementById("projects-portfolio");

projects.map((e)=>{

  value = value +`
  <div class="projects">
       <img src=${e.image}>
      <div class="link"> 
          <h1 class="proj-name">${e.name}</h1>
          <a href="${e.link}" target="blank"><i class="fa-sharp fa-solid fa-arrow-right"></i></a>
      </div>
  </div>`;
  projectName.innerHTML = value;
});


