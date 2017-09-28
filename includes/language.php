<?php
function parseUrl ()
{
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    return parse_url($url);
}

function ru() {
    
    $dev = '.dev'; //.dev
    $host = parseUrl();
	$host = $host['host'];
    $firstDomain = 'igorekmakovsky.ru'.$dev;
    $lang = ($host == $firstDomain)?true:false;
    return $lang;
}
?>