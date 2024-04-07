<?php
  header("Content-Type: application/json; charset=UTF-8");

  include 'configure.php';

  $conn = sqlsrv_connect($conn_user, $conn_array);


  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));

  $tableName = $_GET['table'];
  $colName = $_GET['col'];
 
  $sql_querry = "SELECT $colName FROM $tableName";

  $stmt_qu = sqlsrv_query($conn,$sql_querry);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  $outdata = array();
  while($row = sqlsrv_fetch_array($stmt_qu,SQLSRV_FETCH_ASSOC))
  {
    array_push($outdata,$row);
  }

  echo json_encode($outdata,JSON_INVALID_UTF8_SUBSTITUTE); //Bởi vì viết tiếng việt có dấu nên thêm cái flag phía sau để JSON ko bị lỗi
  //echo json_last_error_msg(); // debug JSON errors
  //die(); // halt the script
?>