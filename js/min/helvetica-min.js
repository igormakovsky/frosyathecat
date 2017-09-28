    (function() {
        var path = '//easy.myfonts.net/v2/js?sid=231034(font-family=Helvetica+Neue+Pro+UltraLight)&sid=231040(font-family=Helvetica+Neue+Pro+Roman)&sid=231043(font-family=Helvetica+Neue+Pro+Medium)&sid=231047(font-family=Helvetica+Neue+Pro+Bold)&key=LfrYrGTkaa',
            protocol = ('https:' == document.location.protocol ? 'https:' : 'http:'),
            trial = document.createElement('script');
        trial.type = 'text/javascript';
        trial.async = true;
        trial.src = protocol + path;
        var head = document.getElementsByTagName("head")[0];
        head.appendChild(trial);
    })();


