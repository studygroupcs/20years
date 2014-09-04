		//SELECTORS-NAV
		$(function() {
			$('section')
			    .waypoint(function(direction) {
			$('a[href="#' + this.id + '"]').parent('li').toggleClass('active', direction === 'down');
			    }, {
			    offset: 0
			    })
			    .waypoint(function(direction) {
			       $('a[href="#' + this.id + '"]').parent('li').toggleClass('active', direction === 'up');
			    }, {
			    offset: function() {
			            return -$(this).height();
			        }
			    });
		});



		// JQUERY REVEAL
	    var config = {
	            enter: "left",
	            after: "0.5s",
	            over: "1s",
	            easing: "ease-in-out",
	            viewportFactor: 0.33,
	            reset: false,
	            init: true,
	          };
	    window.scrollReveal = new scrollReveal( config );



	    // SMOOTH SCROLL
		$(document).ready(function() {
		    $(".smooth").click(function(f) {
		        f.preventDefault();

		        var target = f.target.getAttribute("href");
		        var self = this;

		        var offset;
		        var scrollTarget;
		        var speed;
		        offset = 0;
		        speed = 800;
		        scrollTarget = $(target);

		        var top = scrollTarget.position().top + offset;
		        $("html, body").animate({scrollTop: top}, speed, "swing");

		    })
		});