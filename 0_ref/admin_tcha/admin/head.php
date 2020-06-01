<!-- header -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/0_ref/admin_tcha/admin/admin_check.php";
  $session = $_SESSION['id'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="/0_ref/admin_tcha/asset/js/admin_common.js"></script>
  <link rel="stylesheet" href="/0_ref/admin_tcha/asset/css/admin_style.css">
</head>
<body>
  <header>
    Welcome, <?=$session?>
    <a href="/0_ref/admin_tcha/admin/logout.php">[Sign out]</a>

    <nav>
      <a href="/0_ref/admin_tcha/admin/work/list.php">Portfolio</a>
      <a href="/0_ref/admin_tcha/admin/contact/request.php">Contact</a>
    </nav>
  </header>