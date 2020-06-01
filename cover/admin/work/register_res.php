<?
  include_once $_SERVER['DOCUMENT_ROOT']."/admin/assets/inc/admin_check.php";

  // request에서 데이터 받아오기
  $title = $_POST['title'];
  $url = $_POST['url'];
  $period = $_POST['period'];
  $type = $_POST['d_type'];
  $preview = $_FILES['preview'];
  $mockup = $_FILES['d_mockup'];
  $backImg = $_FILES['d_bg'];
  $briefing = $_POST['d_brief'];
  $description = $_POST['d_description'];
  $status = $_POST['status'];

  // preview 등록
  $previewName = $preview['name'];
  $previewTmp = $preview['tmp_name'];
  $previewFolder =  '../../assets/img/'.$previewName;
  $previewDir = '/assets/img/'.$previewName;
  move_uploaded_file($previewTmp, $previewFolder);

  // mockup 등록
  $mockupName = $mockup['name'];
  $mockupTmp = $mockup['tmp_name'];
  $mockupFolder =  '../../assets/img/detail/'.$mockupName;
  $mockupDir = '/assets/img/detail/'.$mockupName;
  move_uploaded_file($mockupTmp, $mockupFolder);

  // mockup 등록
  $backImgName = $backImg['name'];
  $backImgTmp = $backImg['tmp_name'];
  $backImgFolder =  '../../assets/img/detail/'.$backImgName;
  $backImgDir = '/assets/img/detail/'.$backImgName;
  move_uploaded_file($backImgTmp, $backImgFolder);


  // db에 데이터 입력
  $query = "INSERT INTO cover(
    title, url, period, d_type, preview, d_mockup, d_bg, d_brief, d_description, status
  ) values(
    '$title', '$url', '$period', '$type', '$previewDir', '$mockupDir', '$backImgDir', '$briefing', '$description', '$status'
  )";


  // 쿼리 명령문 실행
  mq($query);

  // list.php로 이동
  page('list.php');
?>