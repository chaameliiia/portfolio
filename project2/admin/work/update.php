<? // 글쓰기 페이지
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/head.php";

  $num = $_GET['num'];

  $query = "delete from project2 where num='{$num}'"; // 선택한 항목만 수정
  $result = mq($query);
  $row = mysqli_fetch_array($result); // result값 배열 형태로 저장
?>
  <script type="text/javascript" src="/project2/editor/js/HuskyEZCreator.js" charset="utf-8"></script>
  <article class="request">
    <h2>Register Project</h2>
    <form action="request_res.php" name="portfolio" method="post" enctype="multipart/form-data">
    <!-- enctype="multipart/form-data": 이미지 포함될 때 -->
    <!-- 포폴 필요 정보
      1. 썸네일
      2. 제목
      3. 상세 설명 (editor 추가)
      4. 프로젝트 url
      5. 등록 날짜
    -->
      <ul>
        <li><input type="text" name="title" value="<?=row['title']?>"></li>
        <li><input type="text" name="url" value="<?=row['url']?>"></li>
        <li><input type="date" name="reg_date" value="<?=row['reg_date']?>"></li>
        <li>
          <?
            if(!empty($row['upload'])) {
              echo "<img src=$row[upload]>";
            }
          ?>
          <input type="file" name="upload"></li>
        <li>
          <textarea name="description" id="ir1" cols="30" rows="10" value="<?=row['description']?>"></textarea>
        </li>
        <li>공개<input type="checkbox" name="status" checked></li>
        <li><input type="submit" value="Register" class="btn"></li>
      </ul>
      <input type="hidden" name="num" value="<?=$_GET['num']?>">
      <input type="hidden" name="mode" value="update">
    </form>
  </article>
<?
  callFunc('reqEditor()');
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/foot.php";
?>