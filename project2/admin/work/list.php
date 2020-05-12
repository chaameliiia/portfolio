<!-- 포트폴리오 목록 -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/head.php";
?>
  <article class="work_list">
    <h2>Project List</h2>
    <ul>
      <li>
        <input type="checkbox">
        <a href="">
          <code>num</code>
          <img src="/img-02.jpg" alt="">
          <code>title</code>
          <code>date</code>
          <code>status</code>
        </a>
        <a href="#">[update]</a>
        <a href="#">[delete]</a>
      </li>
    </ul>
    <div class="page">
      <a href="#"> &lt; </a>
      <a href="#">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#"> &gt; </a>
    </div>
    <a href="request.php" class="btn">Register Portfolio</a>
  </article>
<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/foot.php";
?>