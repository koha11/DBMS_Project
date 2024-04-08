<?php
  header("Content-Type: application/json; charset=UTF-8");
  include 'configure.php';

  $data = json_decode($_POST["add"], true);

  $conn = sqlsrv_connect($conn_user, $conn_array);

  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));

  $data = json_decode($_POST["add"], true);
  print_r($data);
  $table = $data['tableName'];

  $keys = " ";
  $vals = " ";

  foreach($data as $key => $val)
  {
    if($key != "tableName")
    {
      $val = is_int($val) ? $val : "N'$val'"; //Ktra số nguyên hay string để biết đường thêm N''
      $keys = $keys . ($keys == " " ? "" : ",") . $key; //Cột đầu thì ko cần dấu thêm dấu , ở trc
      $vals = $vals . ($vals == " " ? "" : ",") . $val;
    }
  }

  $query_add = "insert into $table($keys) values($vals)";
  echo $query_add;
  $stmt_qu = sqlsrv_query($conn, $query_add);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  sqlsrv_close($conn);
?>