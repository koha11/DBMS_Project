<?php 
  $conn_array = array (
    "UID" => ($_COOKIE != [] ? $_COOKIE["UID"] : ""),
    "PWD" => ($_COOKIE != [] ? $_COOKIE["PWD"] : ""),
    "Database" => "QLTTTA",
    "CharacterSet" => "UTF-8",
    "LoginTimeout" => 30,
    "Encrypt" => 1, 
    "TrustServerCertificate" => 0
  );

  $conn_user = 'tcp:koha.database.windows.net,1433'
  // admin123 admin12345@

  //$conn_user = 'KOHA11\SQLEXPRESS'
?>