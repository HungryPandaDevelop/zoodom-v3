let owlMain = $('.owl-main');

owlMain.owlCarousel({
  items: 1,
  nav: false,
  dots: true,
  margin: 30
});
let owlDetail = $('.owl-detail');

owlDetail.owlCarousel({
  items: 1,
  nav: true,
  dots: false,
});

let owlGallery = $('.market-owl');

owlGallery.owlCarousel({
  nav: true,
  dots: false,
  padding: 0,
  margin: 30,
  responsive:{
    0:{
      items:1
    },
    768:{
      items: 3,
    },
    992:{
      items: 4,
    }
  }
});





if($(window).width() < 786){
  let owlTablet = $('.owl-tablet');

  owlTablet.owlCarousel({
    dots: false,
    margin: 0,
    stagePadding: 45,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 2,
        margin: 15
      },
      786:{
        items: 4,
        margin: 15
      }
    }
  });
}

if($(window).width() < 576){
  let owlMobile = $('.owl-mobile');

  owlMobile.owlCarousel({
    dots: true,
    responsive:{
      0:{
        items:1,
        margin: 15
      },
      576:{
        items: 2,
        margin: 15
      }
    }
  });
}

let owlPartners = $('.owl-partners');

owlPartners.owlCarousel({
  dots:  false,
  // autoplay: true,
  autoplayTimeout: 1001,
  smartSpeed: 500,
  loop: true,
  responsive:{
    0:{
      items:2
    },
    567:{
      items: 4,
    },
    992:{
      items: 7,
    }
}
});
