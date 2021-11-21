// $('.grid').isotope({
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows',
//   transitionDuration: "0.6s",
// });
// import Isotope from 'isotope-layout';

/*  Vanilla JS */
// var elem = document.querySelector('.grid');
// var iso = new Isotope( elem, {
//   // options
//   itemSelector: '.grid-item',
//   layoutMode: 'fitRows'
// });



// window.$ = window.jQuery = require('jquery'); window.isotope = require("isotope-layout/dist/isotope.pkgd"); var $grid = $(".our-design__gallery-items").isotope({ itemSelector: '.our-design__gallery-item', transitionDuration: 500 });

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

/*
$('.filters ul li').click(function() { // To filter your isotope.
    var data = $(this).attr('data-filter');
    iso.arrange({
       filter: data // All grid items
    });
});
*/

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
 
