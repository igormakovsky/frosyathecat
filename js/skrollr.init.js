// Igor Makovsky
// Turn off wonderful Skrollr.js for fancy-trendy hipsters with iPhones
/*
if (Modernizr.touch) {

}
else 
{
    skrollr.init();
}*/

$(window).load(function(){
	if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)){
		skrollr.init({
			forceHeight: false
		});
	}
});