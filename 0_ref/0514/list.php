<?
  include_once $_SERVER['DOCUMENT_ROOT']."/0514/head.php";
?>
  <article>
    <h2>프로필 목록</h2>
    <ul>
      <?
        $query = "select * from biz order by num desc";
        $result = mq($query);
        while($row = mysqli_fetch_array($result)) {
      ?>
        <li>
          <code><?=$row['num']?></code>
          <code><?=$row['name']?></code>
          <code><?=$row['email']?></code>
          <code><?=$row['tel']?></code>
          <code><?=$row['job']?></code>
          <a href="delete.php?num=<?=$row['num']?>">[삭제]</a>
        </li>
      <? } ?>
    </ul>
    <a href="insert.php" class="btn">프로필 등록</a>
  </article>

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/0514/foot.php";
?>