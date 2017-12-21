<?
$docroot = $_SERVER['DOCUMENT_ROOT'].'/';
$test = '.test'; //.test
require $docroot.'includes/language.php';
require $docroot.'includes/vars.php';
?>

<!doctype html>
<html lang="<?=$lang?>">

<head>
<?
require $docroot.'includes/top.php'; 
require $docroot.'includes/meta.php';
require $docroot.'includes/styles.php';
require $docroot.'includes/css.php';
?>
</head>

<body>
<?
require $docroot.'includes/menu.php';
?>

<article>