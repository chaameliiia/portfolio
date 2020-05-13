<!-- header -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/admin_check.php";
  $session = $_SESSION['id'];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="/project2/asset/js/admin_common.js"></script>
  <link rel="stylesheet" href="/project2/asset/css/admin_style.css">
</head>
<body>
  <header>
    Welcome, <?=$session?>
    <a href="/project2/admin/logout.php">[Sign out]</a>

    <nav>
      <a href="/project2/admin/work/list.php">Portfolio</a>
      <a href="/project2/admin/contact/request.php">Contact</a>
    </nav>
  </header>