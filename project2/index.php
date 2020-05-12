<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/asset/inc/db.php";
  $session = $_SESSION['id'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <link href="asset/css/main.css" rel="stylesheet">
</head>
<body>
  <?=$session?>님 환영합니다.
  <a href="admin/logout.php">[로그아웃]</a>
</body>
</html>