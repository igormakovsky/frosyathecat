<?php
function parseUrl ()
{
    $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
    return parse_url($url);
}

function ru() {
    
    $test = '.test'; //.test
    $host = parseUrl();
	$host = $host['host'];
    $firstDomain = 'frosyathecat.ru'.$test;
    $lang = ($host == $firstDomain)?true:false;
    return $lang;
}
?>