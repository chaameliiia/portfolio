<meta charset="UTF-8">
<? // db 접근
  session_start();

  $host = 'localhost';
  $db_user = 'chaemilee9012';
  $db_password = 'Ektgha%291';
  $db_name = 'chaemilee9012';

  $db_con = new mysqli($host, $db_user, $db_password, $db_name);

  function mq($sql) {
    global $db_con;
    return $db_con->query($sql);
  }

  function page($url) {
    echo "
      <script>
        location.href='$url';
      </script>"; // /index.php: 최상위 폴더에 있는 index.php
  }

  function back($msg) {
    echo "
      <script>
        alert('$msg');
        history.back();
      </script>";
  }

  function callFunc($name) {
    echo "
      <script>{$name}</script>";
  }
?>

