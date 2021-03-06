  
import Isotope from "isotope-layout";

var grid = document.querySelector('.grid');
var iso = new Isotope( grid, {
          // itemSelector: ".all",
          // percentPosition: true,
          // masonry: {
          //   columnWidth: ".all"
          // }
          itemSelector: ".grid-item",
          layoutMode: "fitRows",
          transitionDuration: "0.6s",
});
 

var jQueryBridget = require('jquery-bridget');
// var Isotope = require('isotope-layout');

jQueryBridget( 'isotope', Isotope, $ );
// now you can use $().isotope()
$('.grid').isotope({
  // options...
});

 
/* ====== Portfolio ====== */
const filter_btns = document.querySelectorAll('.filter-btn');

filter_btns.forEach( btn => btn.addEventListener("click", () => {
    filter_btns.forEach(button => button.classList.remove("active"));
    btn.classList.add('active');

    let filterValue = btn.dataset.filter;
    // console.log(filterValue);

    $(".grid").isotope({ filter: filterValue });
  
    // $(".grid").isotope({
    //     filter: function() {
    //         var my_filter = $(this).attr("data-my_filter");
    //         console.log(my_filter); // this is undefined
    //         if (my_filter === "foo") {
    //             console.log("yay");
    //             return true;
    //         } else {
    //             console.log("nay");
    //             return false;
    //         }
    //     }
    // });
}))
 

 
/* ====== About me skill progress bar ====== */

const skill_wrap = document.querySelector(".skills");
const skills_bars = document.querySelectorAll(".skill-progress");

window.addEventListener("scroll", () => {
    // checkScroll(skill_wrap)
    skillsEffect();
    countUp();
})

function checkScroll(el){
    let rect = el.getBoundingClientRect();
    // console.log(rect.top);
    // console.log(window.innerHeight)
    // console.log( el.offsetHeight)

    // console.log(rect.top + el.offsetHeight)
    if(window.innerHeight >= rect.top + el.offsetHeight) return true;
    return false;
}

function skillsEffect() {
    if(!checkScroll(skill_wrap)) return;
    skills_bars.forEach((skill) => (skill.style.width = skill.dataset.progress));
}
 

 
/* ====== Records ====== */
const records_wrap = document.querySelector('.records');
const records_numbers = document.querySelectorAll('.number');

function countUp(){
    if(!checkScroll(records_wrap)) return;
    // console.log('hello');
    records_numbers.forEach((numb) => {
        const updateCount = () => {
            let currentNum = +numb.innerText;
            // console.log(currentNum);
            let maxNum = +numb.dataset.num;
            // console.log(maxNum);
            let speed = 100;
            const increment = Math.ceil(maxNum / speed);
            // console.log(increment);
            if(currentNum < maxNum){
                numb.innerText = currentNum + increment;
                setTimeout(updateCount, 1);
            } else {
                numb.innerText = maxNum;
            }
            
        };
        
        // updateCount();
        setTimeout(updateCount, 400);
    })
}
 
 
/* ====== Testimonials - swiper js ====== */
import Swiper, { Autoplay, Navigation } from 'swiper'; // index.js
Swiper.use([Autoplay]);
Swiper.use([Navigation]);
// import 'swiper/css';
 const mySwiper = new Swiper(".swiper-container", {
    speed: 1100,
    slidesPerView: 1,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
    prevEl: ".swiper-button-prev",
    nextEl: ".swiper-button-next",
  },
 });

  
/* ====== Footer ====== */
const footer_input = document.querySelector('.footer-input');

footer_input.addEventListener("focus", () => {
  footer_input.classList.add("focus");
});

footer_input.addEventListener("blur", () => {
  if(footer_input.value != "") return;
  footer_input.classList.remove("focus");
});
 
footer_input.addEventListener("blur", () => {
  if (footer_input.value != "") return;
  footer_input.classList.remove("focus");
});

 
/* ====== Hamburger Menu ====== */
const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const links = document.querySelectorAll(".links a");

/*  z index for .header-content .container.grid-2 */
const grid2 = document.querySelector('.grid-2')

function closeMenu() {
  navbar.classList.remove("open");
  document.body.classList.remove("stop-scrolling");
}

hamburger_menu.addEventListener("click", () => {
  if (!navbar.classList.contains("open")) {
    navbar.classList.add("open");
    grid2.setAttribute('style','z-index: -1');
    document.body.classList.add("stop-scrolling");
  } else {
    closeMenu();
    grid2.setAttribute('style','z-index: 1');
  }
});
 
links.forEach((link) => link.addEventListener("click", () => closeMenu()));