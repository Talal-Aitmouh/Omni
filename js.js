
// window.addEventListener("scroll", function (){
//     const navbar  = document.querySelector('.nav-bar');
//     const header = document.querySelector('.header-section');
//     const scrollPosition = window.scrollY;;
//     const offset = 100; ;
 
//     if(scrollPosition+offset >= 942){
//         header.classList.add('sticky');
//         navbar.style.backgroundColor = "white";
//         navbar.style.opacity = "95%";
//     } else {
//         header.classList.remove('sticky');
//         navbar.style.backgroundColor = "";
//     }
// })


const hero = document.querySelector('.hero_section')
const obs = new IntersectionObserver(function(entries) {
    const header = document.querySelector('.header-section');
    const navbar  = document.querySelector('.nav-bar');
    
     const ent = entries[0]
     console.log(ent)
     if(!ent.isIntersecting){
        header.classList.add('sticky');
        navbar.style.backgroundColor = "white";

        navbar.style.opacity = "95%";
        navbar.style.height=  "4rem";
     }
     else{
        header.classList.remove('sticky');
        navbar.style.backgroundColor = "#fdf2e9";
     }
} , {
    // in the viewport

    root: null,
    threshold: 0,


});
obs.observe(hero)



function navbar(){
    const openBtn = document.querySelector('.open-mobile-btn')
    const closeBtn = document.querySelector('.close-mobile-btn')
    const navBar = document.querySelector('.nav-mobile')
    const btns =   document.querySelectorAll('.btnsclose')
    const navbarColor  = document.querySelector('.nav-bar');

    openBtn.addEventListener('click', function(){
        navBar.style.transform = 'translate(0%)'
        
        openBtn.style.display  = 'none'
        closeBtn.style.display  = 'block'
    })
    closeBtn.addEventListener('click', function(){
        navBar.style.transform = 'translate(100%)'
      
        closeBtn.style.display  = 'none'
        openBtn.style.display  = 'block'
    });
   btns.forEach(element => {
       element.addEventListener('click',function(){
        navBar.style.transform = 'translate(100%)'
        closeBtn.style.display  = 'none'
        openBtn.style.display  = 'block'
       })
   });
}
navbar()