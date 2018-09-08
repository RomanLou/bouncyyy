'use strict';

(function($){
	$(document).ready(function() {
		// Code


		//slider
		$('.team-slider').slick({
			arrows: false,
			infinite: false,
			dots: true
		})

		//slider2
		$('.testimonials-slider').slick({
			arrows: false,
			infinite: false,
			dots: true
		})

		//tabs
		$('.tabs').tabs();

		//gallery
		$('.portfolio-gallery').masonry({
			columnWidth: 20
		});

	});
})(jQuery);

function initMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
	  zoom: 15,
	  center: new google.maps.LatLng(49.56854400596582,34.58580858181483),
	  mapsTypeId: google.maps.MapTypeId.ROADMAP
	});

	var marker = new google.maps.Marker({
    	position: new google.maps.LatLng(49.56854400596582,34.58580858181483),
    	map: map,
    	icon: "images/marker.png",
    	title: 'Ya tyt u4us'
  	});

}

google.maps.event.addDomListener(window, "load", initMap);