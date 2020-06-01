<?
  include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/head.php";
  $query = "select * from cover where num=1";
  $result = mq($query);
  $row = mysqli_fetch_array($result);
?>
    <section class="main__detail">
      <article class="main__detail_visual">
        <h3>
          <?=$row['title']?>
          <small><?=$row['d_type']?></small>
        </h3>
        <span>
          <img src="assets/img/detail/img_mockup.png" alt="">
        </span>
      </article>
      <article class="main__detail_description">
        <h4>overall</h4>
        <span>
          <?=$row['period']?>/ <?=$row['d_brief']?>
        </span>
        <p><?=$row['d_description']?></p>
        <a href="<?=$row['url']?>">
          <span>바로가기</span>
        </a>
      </article>
      <article class="main__detail_preview">
        <img src="assets/img/detail/img_page1.jpg" alt="">
        <img src="assets/img/detail/img_page2.jpg" alt="">
        <img src="assets/img/detail/img_page3.jpg" alt="">
        page4 php 연결 후 캡쳐한 화면
      </article>
      <div class="main__detail_btn">
        <a href="#">prev</a>
        <button type="button" class="top-btn">top</button>
        <a href="#">next</a>
      </div>
    </section>
    <?
      include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/about.php";
    ?>
<?
  include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/foot.php";
?>