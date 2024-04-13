<?php
  include 'configure.php';
  header("Content-Type: application/json; charset=UTF-8");

  $account = json_decode($_POST["account"], true);
  $conn_array["UID"] = $account["uid"];
  $conn_array["PWD"] = $account["pwd"];
  $conn = sqlsrv_connect($conn_user, $conn_array);
  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));
  if ($conn === false)
    echo 0;
    //die(print_r(sqlsrv_errors(), true));
  else 
  {
    //Nên dùng token nhma mình khum bit
    setcookie("UID",$account["uid"],time() + 86400 * 1, "/");
    setcookie("PWD",$account["pwd"],time() + 86400 * 1, "/");
    $sql_query = "";

    if(str_contains($account["uid"],"ST"))
    {
      $outdata['role'] = 'student';
      $sql_query = "select ST_NAME from STUDENT where STUDENT_ID=".$account["uid"];
    }
    else if(str_contains($account["uid"],"TR"))
    {
      $outdata['role'] = 'teacher';
      $sql_query = "select TR_NAME from TEACHER where STUDENT_ID=".$account["uid"];
    }
    else 
    {
      $outdata['role'] = 'admin';
      $outdata['name'] = 'admin';
    }

    setcookie("ROLE",$outdata['role'],time() + 86400 * 1, "/");
    
    if($outdata['role'] != 'admin')
    {
      $stmt = sqlsrv_query($conn,$sql_query);      
      $outdata['name'] = sqlsrv_fetch_array($stmt,SQLSRV_FETCH_NUMERIC)[0];
    }

    echo json_encode($outdata,JSON_INVALID_UTF8_SUBSTITUTE); //Bởi vì viết tiếng việt có dấu nên thêm cái flag phía sau để JSON ko bị lỗi
    //echo json_last_error_msg(); // debug JSON errors
    //die(); // halt the script
  }
  
?>