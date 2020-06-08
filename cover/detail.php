<?
  include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/head.php";

  $linkOrigin = $_SERVER['REQUEST_URI']; // uri 주소
  // $linkNum = substr($linkOrigin, -1); // num 값
  $linkNum = $_GET['num'];

  $query = "select * from cover where num=".$linkNum;
  $result = mq($query);
  $row = mysqli_fetch_array($result);

  $nextQ = "select * from cover where num > $linkNum order by num asc limit 1";
  $nextR = mq($nextQ);
  $nextC = mysqli_fetch_array($nextR);
  $nextC = $nextC['num'];

  $prevQ = "select * from cover where num < $linkNum order by num desc limit 1";
  $prevR = mq($prevQ);
  $prevC = mysqli_fetch_array($prevR);
  $prevC = $prevC['num'];
  
  if($nextC == null){$nextC = $linkNum;}
  if($prevC == null){$prevC = $linkNum;}
?>
    <section class="main__detail">
      <article class="main__detail_visual">
        <h3>
          <?=$row['title']?>
          <small><?=$row['d_type']?></small>
        </h3>
        <span>
          <img src="<?=$row['d_mockup']?>" alt="">
        </span>
        <div class="back_img"></div>
      </article>
      <article class="main__detail_description">
        <h4>overall</h4>
        <span>
          <?=$row['period']?>/ <?=$row['d_brief']?>
        </span>
        <p><?=$row['d_description']?></p>
        <a href="<?=$row['url']?>">
          <span class="linkBtn">바로가기</span>
        </a>
      </article>
      <article class="main__detail_preview">
        <img src="assets/img/detail/img_page1.jpg" alt="">
        <img src="assets/img/detail/img_page2.jpg" alt="">
        <img src="assets/img/detail/img_page3.jpg" alt="">
        <!-- page4 php 연결 후 캡쳐한 화면 -->
      </article>
      <div class="main__detail_btn">
        <a href="detail.php?num=<?=$prevC?>">prev</a>
        <button type="button" class="top-btn">top</button>
        <a href="detail.php?num=<?=$nextC?>">next</a>
      </div>
    </section>
    
    <?
      echo $prevC;
      include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/about.php";
    ?>
<?
  include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/foot.php";
?>