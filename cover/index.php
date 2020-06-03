<?
  include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/head.php";

  $query = "select * from cover";
  $result = mq($query);
  $total = mysqli_num_rows($result);
?>
    <div class="main__intro">
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="438.096px" height="205.556px" viewBox="0 0 438.096 205.556" enable-background="new 0 0 438.096 205.556" xml:space="preserve">
        <mask id="Layer_1">
          <text transform="matrix(1 0 0 1 0 91.27)" fill="#fff" font-family="'Kanit-Bold'" font-size="120">CHAEMI</text>
          <text transform="matrix(1 0 0 1 0 194.2383)" fill="#fff" font-family="'Kanit-Bold'" font-size="120" letter-spacing="120">LEE</text>
        </mask>
        <text transform="matrix(1 0 0 1 0 91.27)" fill="none" stroke="#E6BA52" stroke-miterlimit="10" font-family="'Kanit-Bold'" font-size="120">CHAEMI</text>
        <text transform="matrix(1 0 0 1 0 194.2383)" fill="none" stroke="#E6BA52" stroke-miterlimit="10" font-family="'Kanit-Bold'" font-size="120" letter-spacing="120">LEE</text>
        <rect fill="#E6BA52" width="100%" height="100%" mask="url(#Layer_1)" />
      </svg>
    </div>
    <section class="main__works post_intro">
      <h2 class="hidden">works</h2>
      <ul class="main__works_contents">
        <?
          while($row = mysqli_fetch_array($result)){
        ?>
          <li>
            <a href="detail.php?num=<?=$row['num']?>" data-num="<?=$row['num']?>">
              <h3><?=$row['title']?></h3>
              <img src="<?=$row['preview']?>" alt="">
            </a>
            <p>
              <code><?=$row['num']?></code>/<code><?=$total?></code>
            </p>
          </>
        <?}?>
      </ul>
    </section>
    <?
      include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/about.php";
    ?>
<?
  include_once $_SERVER['DOCUMENT_ROOT']."/assets/inc/foot.php";
?>