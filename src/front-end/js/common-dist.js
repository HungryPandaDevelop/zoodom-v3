

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

// img cover start
$('.img-cover').each(function(){
  let imgSrc = $(this).find('img').attr('src');
  //console.log(imgSrc);
  
  $(this).css('background-image', 'url('+imgSrc+')');
});
// img cover file start
 // style input file start

let ObjfieldFile = $('.input-file');
let flagFileMulti;
let textChoise;
let sizeFile;
let nameFile;

function createNewFileContainer(textChoiseParam, flagFileMultiParam, hintParam){
		let fileContainer = $('<div class="file-input-item"><input class="input-file" type="file" data-flagM="'+flagFileMultiParam+'"></div>')
		let noticeFile = $('<div class="notice-file notice-big-file"><span>Файл слишком большой</span><i></i></div>');
		let docorateFile = $('<div class="file-decorate"><span>'+textChoiseParam+'</span><i></i></div>');
		if(hintParam){
				let hintFile = $('<div class="hint-input-file">'+hintParam+'</div>');
				return fileContainer.append(hintFile).append(docorateFile).append(noticeFile);
		}
		else{
				return fileContainer.append(docorateFile).append(noticeFile);
		}
}

ObjfieldFile.each(function(){
		let appendFlag = 0;
		textChoise = $(this).data('textchoise');
		flagFileMulti = $(this).data('multy');
		textHint = $(this).data('hint');

		$(this).replaceWith(createNewFileContainer(textChoise, flagFileMulti, textHint));

});



$('body').on('click', '.file-decorate', function () {
		console.log('cl');
		let container = $(this).parents('.file-input-item');
		container.find('.input-file').trigger('click');
});

$('body').on('change', '.input-file', function () {
		nameFile = $(this).val().replace(/C:\\fakepath\\/i, '');
		let container = $(this).parents('.file-input-item');
		
		if(nameFile.length>0){
				sizeFile = this.files[0].size;
				if(sizeFile < 500000){
						container.find('span').text(nameFile);
						container.addClass('file-decorate-full');

						flagFileMulti = $(this).data('flagm');

						if (flagFileMulti == 1) {
								$(this).parents('.file-input-item').after(createNewFileContainer(textChoise,"1"));
						}
				}
				else{
						console.log('to big');
					$(this).parents('.file-input-item').find('.notice-big-file').addClass('notice-file--show');

					setTimeout(function(){
						$('.notice-big-file').removeClass('notice-file--show');
					},3000);
				}
		}
});

$("body").on("click", ".file-decorate i", function (e) {
		e.stopPropagation();
		flagFileMulti = $(this).parents('.file-input-item').find('.input-file').data('flagm');
		let container = $(this).parents('.file-input-item');
		console.log(flagFileMulti);
		if (flagFileMulti == 1) {
				container.remove();
		}
		else{
				container.replaceWith(createNewFileContainer(textChoise,"0"));
		}
});
 // style input file end
// custom-select

$('.style-select').each(function () {
  let firstElOption = $(this).find('option:selected').text();
  let dataText = $(this).data('text');
  let dataClass = $(this).data('class');
  $(this).find('option').each(function(index){
    $(this).attr('data-index',index);
  });
  if(dataText){
      firstElOption = dataText;
  }


  let styleSelectBoxElement = 
    $(`<div class='custom-select ${dataClass}'>
        <span>${firstElOption}</span>
        <ul class='ln'></ul>
        <i></i>
      </div>
    `);

  $(this).before(styleSelectBoxElement).hide();

  $(this).find('option').each(function (index) {
      var optionText = $(this).text();
      $(this).parent().prev().find('ul').append('<li data-index="'+index+'">' + optionText + '</li>');
  });
});

$(".custom-select").on('click', function (e) {
  e.preventDefault();
  if ($(this).hasClass('active')) {
      $(this).removeClass('active');
  } else {
      $('.custom-select').removeClass('active');
      $(this).addClass('active');
  }
});

$('body').on('click', function (evt) {
  if (!$(evt.target).is('.custom-select, .custom-select > *')) {
      $('.custom-select').removeClass('active');
  }
});

let tempSelectVal;
$('.custom-select').on('click', 'li', function () {
  let liIndex = $(this).data('index');
  let parentsEl = $(this).parents('.custom-select');

  if(!tempSelectVal){   
    tempSelectVal = $(this).remove();
  }else{
    $(this).after(tempSelectVal);
    tempSelectVal = $(this).remove();
  }
  
  parentsEl.next().find('option[data-index="'+liIndex+'"]').prop('selected', true);

  parentsEl.find('span').text($(this).text());
});
// custom-select

$('.close-js').on('click', function () {
    $(this).parents('.element-show').removeClass('show');
});
$('.popup-overlay-js').on('click',function(e){
    $(this).parents('.element-show').removeClass('show');
});

$(document).on('keyup', (evt) => {
    if (evt.keyCode === 27) {
        $('.element-show').removeClass('show');
    }
});

$('.element-btn').on('click', function (e) {
    e.preventDefault();
    
    $('.element-show').removeClass('show');
    let activeIndex = $(this).attr('data-element');
  
    let text;
    if(activeIndex == 6){
        if($(this).parents('.offer-item').length){
            text = $(this).parents('.offer-item').find('h3').text();
        }else if($(this).parents('.market-info').length){
            console.log('in');
            text = $(this).parents('.market-info ').find('h1').text();
        }       
        $('.kp-form h2 span').text(text);
        $('.kp-form').find('[name="your-prod"]').val(text.trim());
    }
    $('[data-element="' + activeIndex + '"].element-show').addClass('show');

    
});
console.log('rating');
$('.reviews-stars').on('click','i',function(){
  console.log('cl',$(this).index());
  $(this).parent().addClass('selected');
  $('.reviews-stars i').removeClass('active');
  let numRating = ($(this).index()+1);
  $(this).addClass('active');
  $('.com_block_star #rating-'+numRating).addClass('choise').prop('checked', true);
}); 
$('.password-field').on('click','i',changeStatePass);
let visibility = true;
function changeStatePass(){

  console.log(visibility);

  let thisEl = $(this);

  let changePass = (el,type,bool) => {
    $('.password-field').find('input').attr('type',type);
    el.attr('data-visibility', bool);
    visibility = !visibility;
  }

  visibility ? changePass(thisEl,'text', visibility) : changePass(thisEl,'password', visibility)

}


var longPhone = 16;
$(".phone-mask").on("keydown", function (e) {

    // if (!parseInt(e.originalEvent.key)) {
    //     if (e.originalEvent.key != "Backspace") {
    //         e.preventDefault();
    //     }
    // }
    if ($(this).val().length < longPhone) {
        longPhone = 16;
        $(".phone-mask").mask("+7(999)999-99-999", {
            placeholder: " + 7(   )   -  -  "
        });
    } else {
        longPhone = 11;
        $(this).unmask();
        $(".phone-mask").mask("999999999999999999");
    }
});

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

//# sourceMappingURL=common-dist.js.map