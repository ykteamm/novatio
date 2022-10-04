<?php
// the message

  $recepient = "adilmirza@mail.ru";
  $site = "Slim Fit";

  $nameFirst = trim($_POST["first_name"]);
  $nameLast = trim($_POST["last_name"]);
  $district = trim($_POST["district"]);
  $dom = trim($_POST["dom"]);
  $kvartira = trim($_POST["kvartira"]);
  $product = trim($_POST["product"]);
  $phone = trim($_POST["phone"]);
  $msg = "Имя: $nameFirst $nameLast \nТелефон: $phone \nРайон: $district \nДом: $dom \nКвартира: $kvartira \nПродукт: $product ";
  
// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);

// send email
mail("adilmirza@mail.ru","Письмо:",$msg);
?>
