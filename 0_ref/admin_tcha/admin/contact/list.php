<!-- 문의 목록 -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/head.php";

  $query = "select * from contact_us";
  $result = mq($query);
  $row = mysqli_fetch_array($result);

  include_once $_SERVER['DOCUMENT_ROOT']."/asset/inc/page_var.php";
?>
  <article class="list">
    <h2>문의 목록</h2>
    <ul>
      <?
        $query = "select * from contact_us order by num desc limit $start_num, $list";
        $result = mq($query);
        while($row = mysqli_fetch_array($result)) {
      ?>
        <li>
          <input type="checkbox">
          <a href="#" data-num="<?=$row['num']?>" class="view">
            <code><?=$row['num']?></code>
            <code><?=$row['subject']?></code>
            <code><?=$row['writer']?></code>
            <code><?=$row['email']?></code>
            <code><?=$row['date']?></code>
          </a>
          <a href="delete.php?num=<?=$row['num']?>" class="delete">[Delete]</a>
          <div class="detail"><?=$row['content']?></div>
        </li>
      <? } ?>
    </ul>
    <div class="page">
      <?
        include_once $_SERVER['DOCUMENT_ROOT']."/asset/inc/paging.php";
      ?>
    </div>
  </article>
<?
  callFunc('view()');
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/foot.php";
?>