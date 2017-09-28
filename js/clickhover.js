		function animationClick(trigger, element, animation) {
		    element = $(element);
		    trigger = $(trigger);
		    trigger.click(
		        function () {
		            element.addClass('animated ' + animation);
		            //wait for animation to finish before removing classes
		            window.setTimeout(function () {
		                element.removeClass('animated ' + animation);
		            }, 2000);

		        });
		}

		function animationHover(trigger, element, animation) {
		    element = $(element);
		    trigger = $(trigger);
		    trigger.hover(
		        function () {
		            element.addClass('animated ' + animation);
		        },
		        function () {
		            //wait for animation to finish before removing classes
		            window.setTimeout(function () {
		                element.removeClass('animated ' + animation);
		            }, 2000);
		        });
		}