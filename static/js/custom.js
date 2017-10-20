$(function () {

	new WOW().init();
	
	$(window).scroll(function(){
		var windscroll = $(window).scrollTop();
		if ( windscroll>100) {
			$("header.navbar").addClass("nav-animation");

			$("section").each(function(i){
				if ($(this).position().top <= windscroll+59) {
					/*$(".nav-home .navbar-nav li.active").removeClass("active");
					var activeli = $(".nav-home li a[href='#"+$(this).attr('id')+"']").closest("li");
					activeli.addClass("active");*/
				}
			})
		}else{
			$("header.navbar").removeClass("nav-animation");
			/*$(".navbar-nav li.active").removeClass("active");
			$(".navbar-nav li:first").addClass("active");*/
		}
	})

	

	var didScroll;
	var lastScrollTop = 0;
	var delta = 5;
	var navbarHeight = $('header').outerHeight();

	$(window).scroll(function(event){
	    didScroll = true;
	});

	setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
	}, 250);

	function hasScrolled() {
	    var st = $(this).scrollTop();
	    
	    // Make sure they scroll more than delta
	    if(Math.abs(lastScrollTop - st) <= delta)
	        return;
	    
	    // If they scrolled down and are past the navbar, add class .nav-up.
	    // This is necessary so you never see what is "behind" the navbar.
	    if (st > lastScrollTop && st > navbarHeight){
	        // Scroll Down
	        $('header').removeClass('nav-down').addClass('nav-up');
	    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	        }
	    }
	    
	    lastScrollTop = st;
	}
 })