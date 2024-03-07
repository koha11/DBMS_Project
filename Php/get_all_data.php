<?php
  header("Content-Type: application/json; charset=UTF-8");

  $conn_array = array (
    "Database" => "DEMO_QLHS",
    "CharacterSet" => "UTF-8"
  );

  $conn = sqlsrv_connect('KOHA11\SQLEXPRESS', $conn_array);

  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));

  $tableName = $_GET['table'];
 
  $sql_querry = "SELECT * FROM $tableName";
  $orderName = $_GET['orderName'];
  
  if($orderName != " ")
  {
    $orderOption = $_GET['orderOption'];
    $sql_querry = $sql_querry . " ORDER BY {$orderName} {$orderOption}";
  }

  $stmt_qu = sqlsrv_query($conn,$sql_querry);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  $outdata = array();
  while($row = sqlsrv_fetch_array($stmt_qu,SQLSRV_FETCH_NUMERIC))
  {
    array_push($outdata,$row);
  }

  echo json_encode($outdata,JSON_INVALID_UTF8_SUBSTITUTE); //Bởi vì viết tiếng việt có dấu nên thêm cái flag phía sau để JSON ko bị lỗi
  //echo json_last_error_msg(); // debug JSON errors
  //die(); // halt the script
?>