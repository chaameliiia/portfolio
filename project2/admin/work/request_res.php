<!-- 글정보처리 페이지 -->

<?
  include_once $_SERVER['DOCUMENT_ROOT']."/project2/admin/admin_check.php";

  // request에서 데이터 받아오기
  $title = $_POST['title'];
  $url = $_POST['url'];
  $regDate = $_POST['reg_date'];
  $upload = $_FILES['upload'];
  $description = $_POST['description'];
  $status = $_POST['status'];

  // file 등록
  $fileName = $upload['name'];
  $fileTmp = $upload['tmp_name'];
  $fileFolder =  '../upload/thum/'.$fileName;
  $fileDir = '/project2/admin/upload/thum/'.$fileName;

  move_uploaded_file($fileTmp, $fileFolder);
  
  // db에 데이터 입력
  if(!isset($_POST['mode'])){
    $query = "INSERT INTO project2(
      title, url, reg_date, upload, description, status
    ) values(
      '$title', '$url', '$regDate', '$fileDir', '$description', '$status'
    )";
  } else {
    $num = $_POST['num'];
    if(!empty($fileName)) {
      $query = "update project2 set upload='$fileDir' where num='$num'";    
      mq($query);
    }
    $query = "update project2 set 
      title='$title', url='$url', reg_date='$regDate', 
      description='$description', staus='$staus' 
      where num='$num'";
  }

  // 쿼리 명령문 실행
  mq($query);

  // list.php로 이동
  page('list.php');