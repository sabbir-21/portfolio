/* Minified js for jQuery BackTop */
!function(o){o.fn.backTop=function(e){var n=this,i=o.extend({position:400,speed:500,color:"white"},e),t=i.position,c=i.speed,d=i.color;n.addClass("white"==d?"white":"red"==d?"red":"green"==d?"green":"black"),n.css({right:20,bottom:40,position:"fixed"}),o(document).scroll(function(){var e=o(window).scrollTop();console.log(e),e>=t?n.fadeIn(c):n.fadeOut(c)}),n.click(function(){o("html, body").animate({scrollTop:0},{duration:1200})})}}(jQuery);

// $(document).ready(function() {

// 	// $('.image-popup-vertical-fit').magnificPopup({
// 	// 	type: 'image',
// 	// 	closeOnContentClick: true,
// 	// 	mainClass: 'mfp-img-mobile',
// 	// 	image: {
// 	// 		verticalFit: true
// 	// 	}
		
// 	// });

// 	// $('.image-popup-fit-width').magnificPopup({
// 	// 	type: 'image',
// 	// 	closeOnContentClick: true,
// 	// 	image: {
// 	// 		verticalFit: false
// 	// 	}
// 	// });

// 	// $('.image-popup-no-margins').magnificPopup({
// 	// 	type: 'image',
// 	// 	closeOnContentClick: true,
// 	// 	closeBtnInside: false,
// 	// 	fixedContentPos: true,
// 	// 	mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
// 	// 	image: {
// 	// 		verticalFit: true
// 	// 	},
// 	// 	zoom: {
// 	// 		enabled: true,
// 	// 		duration: 300 // don't foget to change the duration also in CSS
// 	// 	}
// 	// });

// });
// $(document).ready(function() {
// 	$('.popup-gallery').magnificPopup({
// 		delegate: 'a',
// 		type: 'image',
// 		tLoading: 'Loading image #%curr%...',
// 		mainClass: 'mfp-img-mobile mfp-with-zoom',
// 		gallery: {
// 			enabled: true,
// 			navigateByImgClick: true,
// 			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
// 		},
// 		image: {
// 			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
// 			titleSrc: function(item) {
// 				return item.el.attr('title') + '<small>&nbsp;</small>';
// 			}
// 		},
// 		zoom: {
// 			enabled: true,
// 			duration: 300 // don't foget to change the duration also in CSS
// 		}
// 	});
// 	$('.popup-youtube, .popup-vimeo, .popup-gmaps, .popup-vtours').magnificPopup({
// 		disableOn: 700,
// 		type: 'iframe',
// 		mainClass: 'mfp-fade',
// 		removalDelay: 160,
// 		preloader: false,

// 		fixedContentPos: false
// 	});
// });

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').focus()
})

 	/*
    -----------------------
    -----------------------
        Sticky Menu
    -----------------------
    -----------------------
    */
	// var a = $(".menu-section").offset().top;
	// $(document).scroll(function(){
	// 	if($(this).scrollTop() > a) {   
	// 		$('.navbar-inverse-inner').css({"background":"#fff","min-height":"105px"});
	// 		$('.clstopscrl').css({"padding-top":"5px"});
	// 		$('#srldin').css({"display":"none", "-webkit-transition":"all .2s ease-in", "-moz-transition":"all .2s ease-in", "-o-transition":"all .2s ease-in", "transition":"all .2s ease-in"});
	// 	} else {
	// 		$('.navbar-inverse-inner').css({"background":"#fff"});
	// 		$('.clstopscrl').css({"padding-top":"0px"});
	// 		$('#srldin').css({"display":"block", "-webkit-transition":"all .3s ease-in", "-moz-transition":"all .3s ease-in", "-o-transition":"all .3s ease-in", "transition":"all .3s ease-in"});
	// 	}
	// });
