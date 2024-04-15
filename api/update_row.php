<?php
  header("Content-Type: application/json; charset=UTF-8");

  include 'configure.php';

  $conn = sqlsrv_connect($conn_user, $conn_array);


  if ($conn === false)
   die(print_r(sqlsrv_errors(), true));

  $data = json_decode($_POST["update"], true);

  $table = $data['tableName'];

  $id = " ";
  $update_string = " ";

  if($table == "RESULT")
  {
    $query_update = "PR_RESULT_UPDATE ";
    foreach($data as $key => $val)
      if($key != "tableName")
      {
        if(strpos($key,"ID"))
          $query_update = ($query_update == "PR_RESULT_UPDATE " ? $query_update : $query_update . ",") . "'" . $val . "'"; //Col ddaauf tien thi pahi co dau ,
        else 
          $query_update = $query_update . "," . $val;
      }
  }
  else
  {
    foreach($data as $key => $val)
      if($key != "tableName")
      {
        $val = is_numeric($val) && $val[0] != '0' ? $val : "N'$val'";

        if($id == " ")
          $id = $key . " = " . $val;
        else
        {
          $update_string = $update_string . ($update_string == " " ? " " : ",") . " " . $key. " = " . $val; //Neu la col dau tien thi ko can them dau ,
        }
      }
      $query_update = "update $table set $update_string where $id";
  }


  


  echo $query_update ;
  $stmt_qu = sqlsrv_query($conn,$query_update);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  sqlsrv_execute($stmt_qu);

  sqlsrv_close($conn);
?>