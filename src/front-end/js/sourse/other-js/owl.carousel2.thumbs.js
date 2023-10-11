﻿$(document).ready(function(){
  var bigimage = $("#big");
  var thumbs = $("#thumbs");

  bigimage.owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    loop: true,

  });

  thumbs.owlCarousel({
    items: 4,
    nav: false,
    dots: false,
    margin: 25,
    loop: true,
    onInitialized: callback
  });
  var item;
  function callback(event){

    var current = event.item.index;
    console.log('current0', current)
    thumbs.find(".owl-item")
    .eq(current)
    .addClass("current");


        // Provided by the core
        var element   = event.target;         // DOM element, in this example .owl-carousel
        var name      = event.type;           // Name of the event, in this example dragged
        var namespace = event.namespace;      // Namespace of the event, in this example owl.carousel
        var items     = event.item.count;     // Number of items
        item      = event.item.index;     // Position of the current item
        // Provided by the navigation plugin
        var pages     = event.page.count;     // Number of pages
        var page      = event.page.index;     // Position of the current page
        var size      = event.page.size;      // Number of items per page

        console.log(items, item, pages, page, size)
  }


  bigimage.find('.owl-next').on('click',function(){
    // console.log('next') 
    thumbs.trigger('next.owl.carousel');
  });
  bigimage.find('.owl-prev').on('click',function(){
    // console.log('next') 
    thumbs.trigger('prev.owl.carousel');
  });


  thumbs.on("changed.owl.carousel", function(el) {
    var current = el.item.index;
    console.log('current2', current)
    // console.log('changed', current) 

    thumbs.find(".owl-item").removeClass('current')
    .eq(current)
    .addClass("current");
  });




  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index()- item;
    var current = $(this).index();

    bigimage.data("owl.carousel").to(number, 300, true);

    thumbs.find(".owl-item").removeClass('current')
    .eq(current)
    .addClass("current");

    thumbs.data("owl.carousel").to(number, 300, true);
  });
  //var totalslides = 10;
  // var syncedSecondary = true;

  // bigimage
  //   .owlCarousel({
  //   items: 1,
  //   slideSpeed: 2000,
  //   nav: true,
  //   autoplay: true,
  //   dots: false,
  //   loop: true,
  //   responsiveRefreshRate: 200,
  //   navText: [
  //     '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
  //     '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
  //   ],
  //   responsive : {
  //     // breakpoint from 0 up
  //     0 : {
  //       nav: false,
  //       margin: 15,
  //       stagePadding: 30,
  //     },
  //     // breakpoint from 768 up
  //     767 : {
        
  //       nav: true,
  //     }
  //   }
  // })
  //   .on("changed.owl.carousel", syncPosition);

  // thumbs
  //   .on("initialized.owl.carousel", function() {
  //   thumbs
  //     .find(".owl-item")
  //     .eq(0)
  //     .addClass("current");
  // })
  //   .owlCarousel({
  //   items: 4,
  //   dots: false,
  //   nav: false,
  //   smartSpeed: 200,
  //   slideSpeed: 500,
  //   margin: 25,
  //   slideBy: 4,
  //   responsiveRefreshRate: 100,
  //   loop: true
  // })
  //   .on("changed.owl.carousel", syncPosition2);

  // function syncPosition(el) {
  //   //if loop is set to false, then you have to uncomment the next line
  //   var current = el.item.index;

  //   //to disable loop, comment this block
  //   var count = el.item.count - 1;
  //   var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

  //   if (current < 0) {
  //     current = count;
  //   }
  //   if (current > count) {
  //     current = 0;
  //   }
  //   //to this
  //   thumbs
  //     .find(".owl-item")
  //     .removeClass("current")
  //     .eq(current)
  //     .addClass("current");
  //   var onscreen = thumbs.find(".owl-item.active").length - 1;
  //   var start = thumbs
  //   .find(".owl-item.active")
  //   .first()
  //   .index();
  //   var end = thumbs
  //   .find(".owl-item.active")
  //   .last()
  //   .index();

  //   if (current > end) {
  //     thumbs.data("owl.carousel").to(current, 100, true);
  //   }
  //   if (current < start) {
  //     thumbs.data("owl.carousel").to(current - onscreen, 100, true);
  //   }
  // }

  // function syncPosition2(el) {
  //   if (syncedSecondary) {
  //     var number = el.item.index;
  //     bigimage.data("owl.carousel").to(number, 100, true);
  //   }
  // }

  // thumbs.on("click", ".owl-item", function(e) {
  //   e.preventDefault();
  //   var number = $(this).index();
  //   bigimage.data("owl.carousel").to(number, 300, true);
  // });
});