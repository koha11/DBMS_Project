<?php
  header("Content-Type: application/json; charset=UTF-8");

  $conn_array = array (
    "Database" => "DEMO_QLHS",
    "CharacterSet" => "UTF-8"
  );

  $conn = sqlsrv_connect('KOHA11\SQLEXPRESS', $conn_array);

  if ($conn === false)
   die(print_r(sqlsrv_errors(), true));

  $data = json_decode($_POST["delete"], true);

  $table = $data['tableName'];

  foreach ($data as $x => $y) {
    if($x != "tableName")
    {
      $id = $x;
      $val = $y; 
    }
  }

  $query_delete = "delete from $table where $id = '$val'";

  $stmt_qu = sqlsrv_query($conn,$query_delete);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  sqlsrv_execute($stmt_qu);

  sqlsrv_close($conn);
?>