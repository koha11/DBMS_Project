<?php
  include 'configure.php';
  header("Content-Type: application/json; charset=UTF-8");

  $conn = sqlsrv_connect($conn_user, $conn_array);

  if ($conn === false)
    die(print_r(sqlsrv_errors(), true));

  $tableName = $_GET['table'];
  $id = $_GET['id'];
  $sql_query = "";

  // truong hop getdata cua timetable (lay them 2 thuoc tinh cua bang khac nua)
   if($tableName == "TIMETABLE") //table duy nhat khac, cong thuc get data: TR: class join any, ST: result join any (except course)
  // {
  //   if($_COOKIE['ROLE'] == "student")
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM TIMETABLE A
  //       join CLASS B on A.CLASS_ID = B.CLASS_ID
  //       join RESULT C on B.CLASS_ID = C.CLASS_ID";
  //   else   
       $sql_query = "
         SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM, MONTH(DATE_START) CLASS_MONTH, YEAR(DATE_START) CLASS_YEAR
         FROM TIMETABLE A
         join CLASS B on A.CLASS_ID = B.CLASS_ID
         join CLASS_DETAIL C on B.CLASS_ID = C.CLASS_ID"; 
  // }

  // if($tableName == "CLASS") //done
  // {
  //   if($_COOKIE['ROLE'] == "student")
  //     $sql_query = "
  //       SELECT *
  //       FROM CLASS A 
  //       join RESULT B on A.CLASS_ID = B.CLASS_ID";
  // }

  // if($tableName == "COURSE")
  // {
  //   if($_COOKIE['ROLE'] == "student")
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM COURSE A
  //       join CLASS B on A.CLASS_ID = B.CLASS_ID
  //       join RESULT C on B.CLASS_ID = C.CLASS_ID";
  //   else   
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM TIMETABLE A
  //       join CLASS B on A.CLASS_ID = B.CLASS_ID"; 
  // }

  // if($tableName == "CLASS_DETAIL")
  // {
  //   if($_COOKIE['ROLE'] == "student")
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM CLASS_DETAIL A
  //       join RESULT B on A.CLASS_ID = B.CLASS_ID";
  //   else   
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM TIMETABLE A
  //       join CLASS B on A.CLASS_ID = B.CLASS_ID"; 
  // }

  // if($tableName == "CLASS_DETAIL")
  // {
  //   if($_COOKIE['ROLE'] == "student")
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM CLASS_DETAIL A
  //       join RESULT B on A.CLASS_ID = B.CLASS_ID";
  //   else   
  //     $sql_query = "
  //       SELECT A.CLASS_ID,COURSE_ID,WEEKLYDAY,DAYPERIOD,CLASSROOM
  //       FROM TIMETABLE A
  //       join CLASS B on A.CLASS_ID = B.CLASS_ID"; 
  // }
  
  if($tableName == "CHECK_BILL")
    $sql_query = "PR_BILL_CHECK $id";

  if($sql_query == "")
    $sql_query = "
      SELECT *
      FROM $tableName";

  $stmt_qu = sqlsrv_query($conn,$sql_query);

  if($stmt_qu === false) {
    die( print_r(sqlsrv_errors(), true) );
  }

  $outdata = array();
  
  while($row = sqlsrv_fetch_array($stmt_qu,SQLSRV_FETCH_ASSOC))
  {
    array_push($outdata,$row);
  }

  if(!$outdata)
  {
    $sql_query =  "SELECT COLUMN_NAME FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = '$tableName'";
    $stmt_qu = sqlsrv_query($conn,$sql_query);
    while($row = sqlsrv_fetch_array($stmt_qu,SQLSRV_FETCH_ASSOC))
      array_push($outdata,$row);        
  }

  echo json_encode($outdata,JSON_INVALID_UTF8_SUBSTITUTE); //Bởi vì viết tiếng việt có dấu nên thêm cái flag phía sau để JSON ko bị lỗi
  //echo json_last_error_msg(); // debug JSON errors
  //die(); // halt the script
?>