<?php
  header("Content-Type: application/json; charset=UTF-8");

  $conn_array = array (
    "Database" => "DEMO_QLHS1",
    "CharacterSet" => "UTF-8"
  );

  $conn = sqlsrv_connect('KOHA11\SQLEXPRESS', $conn_array);

  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));

  $tableName = $_GET['table'];
  $id = $_GET['id'];
  $val = $_GET['val'];
  $option = $_GET['option'];

  $sql_querry = "SELECT * FROM $tableName";

  
  if($id != "")
    $sql_querry = $sql_querry . " where $id = '$val'";
 
  
  //$orderName = $_GET['orderName'];
  
  // if(!$orderName)
  // {
  //   $orderOption = $_GET['orderOption'];
  //   $sql_querry = $sql_querry . " ORDER BY {$orderName} {$orderOption}";
  // }

  $stmt_qu = sqlsrv_query($conn,$sql_querry);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  $outdata = array();
  
  if($option == "getRow")
  {
    array_push($outdata,sqlsrv_fetch_array($stmt_qu,SQLSRV_FETCH_ASSOC));
  }
  else
    while($row = sqlsrv_fetch_array($stmt_qu,SQLSRV_FETCH_NUMERIC))
    {
      array_push($outdata,$row);
    }

  echo json_encode($outdata,JSON_INVALID_UTF8_SUBSTITUTE); //Bởi vì viết tiếng việt có dấu nên thêm cái flag phía sau để JSON ko bị lỗi
  //echo json_last_error_msg(); // debug JSON errors
  //die(); // halt the script
?>