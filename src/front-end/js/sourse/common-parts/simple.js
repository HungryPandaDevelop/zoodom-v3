
var st = 0;
window.addEventListener('scroll', function (e) {

  st = $(this).scrollTop();

  if(st > 0){
    $('header').addClass('stick');
  }
  else{
    $('header').removeClass('stick');
  }

});   



$('.dropdown-link').on('click',function(e){
  e.preventDefault();
  $(this).toggleClass('dropdown-link--active');
  $('.header-menu-hidden-wrapper').toggleClass('active');
});

$('.offer-tabs li').on('click',function(){
  $('.offer-tabs li').removeClass('active');
  $(this).addClass('active');

  $('.market-tabs-item').removeClass('market-tabs-item--active');
  $('.market-tabs-item').eq($(this).index()).addClass('market-tabs-item--active');
});

document.addEventListener( 'wpcf7mailsent', function( event ) {
  console.log('mail sent OK');
  // Stuff
  setTimeout(function(){
    $('.element-show').removeClass('active');
  },1500);
  
}, false ); 
