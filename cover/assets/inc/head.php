<?
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/db.php";

  $linkOrigin = $_SERVER['PHP_SELF']; // 페이지 주소
  $linkNum = strpos($linkOrigin, '.') - 1; // .앞까지 길이
  $linkText = substr($linkOrigin, 1, $linkNum); // /부터 .까지 텍스트
?>
<!DOCTYPE html>
<html lang="ko">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>CHAEMI LEE</title>
  <link rel="stylesheet" href="/assets/css/<?=$linkText?>.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-cookie/1.4.1/jquery.cookie.min.js"></script>
  <script src="/assets/js/common.js"></script>
  <script src="/assets/js/<?=$linkText?>.js"></script>
</head>

<body>
  <header class="header">
    <h1 class="header__logo">
      <a href="index.php">chaemi
        <span>lee</span>
      </a>
    </h1>
    <button type="button" class="header__btn">about</button>
  </header>
  <main class="main">