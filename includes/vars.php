<?php
$base_dir  = __DIR__;
// Absolute path to your installation, ex: /var/www/mywebsite
$doc_root  = preg_replace("!${_SERVER['SCRIPT_NAME']}$!", '', $_SERVER['SCRIPT_FILENAME'].'/');
# ex: /var/www
$base_url  = preg_replace("!^${doc_root}!", '', $base_dir);
# ex: '' or '/mywebsite'
//$protocol = stripos($_SERVER['SERVER_PROTOCOL'],'https') === true ? 'https://' : 'http://';
$protocol = 'http://';
$port      = $_SERVER['SERVER_PORT'];
$disp_port = ($protocol == 'http' && $port == 80 || $protocol == 'https' && $port == 443) ? '' : ":$port";
$domain    = $_SERVER['SERVER_NAME'];
$full_url  = "${protocol}${domain}${disp_port}${base_url}";
$siteroot = $protocol.$domain; //http://igorekmakovsky.ru

//universal paths to the pages on the whole website

$parent = 'content';

if ($id != 'frosyathecat'){
$mainfolder = '/'.$parent.'/'.$id;
$headimage = $siteroot.'/'.$parent.'/'.$id.'/img/index.jpg'; //path to leading image
$canonical = $siteroot.'/'.$parent.'/'.$id.'/'; //path to canonical page
}

else {
    $mainfolder = '';
    $headimage = $siteroot.'/img/index.jpg'; //path to main image
    $canonical = $siteroot;
}

$thispage = $domain.$mainfolder.'/'; //path to the current folder
$deldomain = (str_replace('index.php', '', $_SERVER['SCRIPT_NAME'])); //erase index.php

//

if (ru()) {
    $sign = date("Y").' — Игорёк Маковский';
    $title = $title_ru;
    $description = $description_ru;
    $keywords = 'игорь, маковский, игорек, фрося, кошка, zx, игра, бумага '.$keywords_ru;
    $author = 'Игорёк Маковский';
    $switch = 'frosyathecat.com'.$test.$deldomain;
    $lang = 'ru';
    $tomainpage = '←';
    $settolang = 'in english';
    $frosyathecat = '<a href="mailto:igor@igormakovsky.ru">Игорь Маковский</a></p>
                    <p class="backarrow">
                        <span lang="ru">назад к</span>
                        <a href="'.$siteroot.'#'.$id.'">
                            <span lang="ru">содержанию</span>
                        </a>
                    </p>';
}
else {
    $sign = date("Y").' — Igorek Makovsky';
    $title = $title_en;
    $description = $description_en;
    $keywords = 'igor, makovsky, igorek, frosya, cat, zx, game, paper '.$keywords_en;
    $author = 'Igorek Makovsky';
    $switch = 'frosyathecat.ru'.$test.$deldomain;
    $tomainpage = '←';
    $lang = 'en-US';
    $settolang = 'по-русски';
    $frosyathecat = '<a href="mailto:igor@igormakovsky.ru">Igor Makovsky</a>
    </p>
                    <p class="backarrow">
                        <span lang="en">back to </span>
                        <a href="'.$siteroot.'#'.$id.'">
                            <span lang="en">contents</span>
                        </a>
                    </p>';
}

?>
