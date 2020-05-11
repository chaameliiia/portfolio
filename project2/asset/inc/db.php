<? // db 접근
  session_start();

  $host = 'localhost';
  $db_user = 'root';
  $db_password = '';
  $db_name = 'chaemilee9012';

  $db_con = new mysqli($host, $db_user, $db_password, $db_name);

  function mq($sql) {
    global $dbcon;
    return $dbcon->query($sql);
  }
?>