<?php
  header("Content-Type: application/json; charset=UTF-8");
  $data = json_decode($_POST["DATA"], true);

  $MaHS = $data['MaHS'];
  $TenHS = $data['TenHS'];
  $MaLop = $data['MaLop'];
  $SDT = $data['SDT'];
  $Email = $data['Email'];
  $SDTPH = $data['SDTPH'];

  $conn_array = array (
    "Database" => "DEMO_QLHS",
    "CharacterSet" => "UTF-8"
  );

  $conn = sqlsrv_connect('KOHA11\SQLEXPRESS', $conn_array);

  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));

  $query_add = "insert into HOCSINH 
  values('$MaHS',N'$TenHS','$MaLop','$SDT','$Email',null,'$SDTPH')";

  $stmt_qu = sqlsrv_query($conn, $query_add);

  sqlsrv_close($conn);
?>