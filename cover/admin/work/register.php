<? // 글쓰기 페이지
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/head.php";
?>
  <script type="text/javascript" src="/admin/assets/editor/js/HuskyEZCreator.js" charset="utf-8"></script>
  <article class="register">
    <h2>Register Project</h2>
    <form action="register_res.php" name="portfolio" method="post" enctype="multipart/form-data">
    <!-- enctype="multipart/form-data": 이미지 포함될 때 -->
    <!-- 포폴 필요 정보
      1. 썸네일
      2. 제목
      3. 상세 설명 (editor 추가)
      4. 프로젝트 url
      5. 등록 날짜
    -->
      <ul>
        <li>Title<input type="text" name="title" autofocus></li>
        <li>URL<input type="text" name="url"></li>
        <li>Period<input type="text" name="period"></li>
        <li>Type<input type="text" name="type"></li>
        <li>Preview<input type="file" name="preview"></li>
        <li>Mockup<input type="file" name="d_mockup"></li>
        <li>Background_img<input type="file" name="d_bg"></li>
        <li>Briefing<input type="text" name="d_brief"></li>
        <li>Description
          <textarea name="d_description" id="ir1" cols="30" rows="10"></textarea>
        </li>
        <li>공개<input type="checkbox" name="status" checked></li>
        <li><input type="submit" value="Register" class="btn"></li>
      </ul>    
    </form>
  </article>
<?
  callFunc('reqEditor()');
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/foot.php";
?>