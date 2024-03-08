<?php
  header("Content-Type: application/json; charset=UTF-8");

  $conn_array = array (
    "Database" => "DEMO_QLHS",
    "CharacterSet" => "UTF-8"
  );

  $conn = sqlsrv_connect('KOHA11\SQLEXPRESS', $conn_array);

  if ($conn === false)
   die(print_r(sqlsrv_errors(), true));


  $data = json_decode($_POST["update"], true);

  print_r($data);
  $table = $data['tableName'];

  $id = " ";
  $update_string = " ";

  foreach($data as $key => $val)
  {
    if($key != "tableName")
    {
      $val = is_int($val) ? $val : "N'$val'";
      
      if($id == " ")
        $id = $key . " = " . $val;
      else
      {
        $update_string = $update_string . ($update_string == " " ? " " : ",") . " " . $key. " = " . $val; //Neu la col dau tien thi ko can them dau ,
      }
        
    }
  }

  $query_update = "update $table set $update_string where $id";

  echo $table . " " . $update_string . " ..." . $id;
  $stmt_qu = sqlsrv_query($conn,$query_update);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  sqlsrv_execute($stmt_qu);

  sqlsrv_close($conn);
?>