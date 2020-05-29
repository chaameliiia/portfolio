<? // db 접근
  session_start();

  $host = 'localhost';
  $db_user = 'root';
  $db_password = '';
  $db_name = 'sql-test';

  $db_con = new mysqli($host, $db_user, $db_password, $db_name);

  function message($msg) {
    echo "
      <script>
        alert('$msg');
      </script>";
  }
  
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

?>