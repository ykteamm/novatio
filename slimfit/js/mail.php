<?php
// the message

  $recepient = "9243031@gmail.com";
  $site = "Slim Fit";

  $nameFirst = trim($_POST["first_name"]);
  $nameLast = trim($_POST["last_name"]);
  $district = trim($_POST["district"]);
  $dom = trim($_POST["dom"]);
  $kvartira = trim($_POST["kvartira"]);
  $product = trim($_POST["product"]);
  $phone = trim($_POST["phone"]);
  $msg = "Имя: $nameFirst $nameLast \nТелефон: $phone \nАдрес: $district $dom $kvartira \nПродукт: $product";
  



// send email
mail("9243031@gmail.com","My subject","ghj");
?>