<?
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/head.php";

  $query = "select * from cover";
  $result = mq($query);
  $row = mysqli_fetch_array($result);

  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/page_var.php";
?>
  <article class="list">
    <h2>Project List</h2>
    <ul>
      <?
        $query = "select * from cover order by num desc limit $start_num, $list"; // limit 시작번호, 갯수
        $result = mq($query);
        while($row = mysqli_fetch_array($result)) {
      ?>
        <li>
          <input type="checkbox">
          <a href="#" data-num="<?=$row['num']?>" class="view">
            <code><?=$row['num']?></code>
            <img src="<?=$row['preview']?>" alt="">
            <code><?=$row['d_type']?></code>
            <code><?=$row['period']?></code>
            <code><?=$row['d_brief']?></code>
            <code><?=$row['d_description']?></code>
            <code><?=$row['url']?></code>
            <code><?=$row['status']?></code>
          </a>
          <a href="update.php?num=<?=$row['num']?>" class="update">[update]</a>
          <a href="#" data-num="<?=$row['num']?>" class="delete">[delete]</a>
          <!-- <?=$row['num']?>: 클릭한 항목 num 값 전달 -->
        </li>
      <? 
        }
      ?>
    </ul>
    <div class="page">
      <?
        include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/paging.php";
      ?>
    </div>
    <a href="register.php" class="btn">Register Portfolio</a>
  </article>
<?
  callFunc('prjList()');
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/foot.php";
?>