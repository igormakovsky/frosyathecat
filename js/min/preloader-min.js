function load() {
    $('#curtains').addClass('open');
    $(function () {

        $('.appear:in-viewport').addClass('animated fadeIn');
        $(window).scroll(function () {
            $('.appear:in-viewport').addClass('animated fadeIn');
        });
    });
}

setTimeout(load, 500);

$(document).ready(function () {


    })
    /*manifest = [
   ];

    $.each(
        $('img'),
        function () {
            manifest.push({
                src: $(this).attr('src')
            })
        }
    );
    console.log(manifest)


    function loadImage() {
        var preload = new createjs.LoadQueue(true, '');
        //preload.on("progress", handleProgress);
        preload.on("complete", handleComplete);
        preload.on("fileload", handleFileLoad);
        preload.loadManifest(manifest, true, "");
        preload.setMaxConnections(5);

        //preload.addEventListener("fileload", handleFileComplete);
        //preload.loadFile("img/porcelanosa-fon.jpg");
    }

    function handleFileLoad(event) {
        var image = event.result;
        console.log(image)
    }
    /*function handleProgress(event) {
       $('#preloader #counter').html((Math.round(event.loaded*100))+'%');
       $('#preloader #counter-bar-inner').css('width',(Math.round(event.loaded*100))+'%');
    }*/

/*function handleComplete(event) {
    $('article').addClass('loaded');
    $('#preloader').addClass('complete-load');
    $(function () {

        $('.appear:in-viewport').addClass('animated fadeIn');
        $(window).scroll(function () {
            $('.appear:in-viewport').addClass('animated fadeIn');
        });
    });
}

loadImage();*/

