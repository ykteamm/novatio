<?php
  $recepient = "adilmirza@mail.ru";
  $site = "Slim Fit";

  $nameFirst = trim($_POST["first_name"]);
  $nameLast = trim($_POST["last_name"]);
  $phone = trim($_POST["phone"]);
  $message = "Имя: $nameFirst $nameLast \nТелефон: $phone;

  $pagetitle = "Новая заявка с сайта \"$site\"";
  mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf\"\n From: $recepient")
?>
