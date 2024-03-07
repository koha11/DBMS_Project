<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./Css/style.css?v=<?php echo time(); ?>">
  <title>Document</title>
</head>
<body>
  <div class="main-content">
    <div id="student-table-config" class="table-config">
      CONFIGURE YOUR DATAS HERE!
    </div>

    <div id="student-table" class="content-table">
      
    </div>

    <div class="config-modal-container close container flex-box">
      <div class="config-modal flex-box modal add-config" data-config="add-config">

        <div class="modal-header">
          CONFIGURE AREA
        </div>

        <form class="modal-body flex-box config-form add-form" data-config="add" target="">

          <div class="input-field">
            <label for="a-mahs-hs" name="configInputLabel">Mã Học Sinh</label>
            <input id="a-mahs-hs" name="add_MaHS" type="text">
            <span class="message"></span>
          </div>
          
          <div class="input-field">
            <label for="a-tenhs-hs" name="configInputLabel">Học Và Tên</label>
            <input id="a-tenhs-hs" name="add_TenHS" type="text">
            <span class="message"></span>
          </div>      

          <div class="input-field">
            <label for="a-malop-hs" name="configInputLabel">Mã Lớp</label>
            <input id="a-malop-hs" name="add_MaLop" type="text">
            <span class="message"></span>
          </div>      

          <div class="input-field">
            <label for="a-sdt-hs" name="configInputLabel">Số Điện Thoại</label>
            <input id="a-sdt-hs" name="add_SDTHS" type="text">
            <span class="message"></span>
          </div>
          
          <div class="input-field">
            <label for="a-email-hs" name="configInputLabel">Email</label>
            <input id="a-email-hs" name="add_EmailHS" type="text">
            <span class="message"></span>
          </div>    

          <div class="input-field">
            <label for="a-sdtph-hs" name="configInputLabel">Số Điện Thoại PH</label>
            <input id="a-sdtph-hs" name="add_SDTPH" type="text">
            <span class="message"></span>
          </div>

        </form>
        <form class="modal-body flex-box config-form find-form close" data-config="find" target="">
          <select name="SearchOption" id="search-options" class="select-list">
            <option value="MAHS">Mã Học Sinh</option>
            <option value="TEN">Họ Và Tên</option>
            <option value="MALOP">Mã Lớp</option>
            <option value="SDT">Số Điện thoại</option>
            <option value="EMAIL">Email</option>
            <option value="MAHD">Mã Hóa Đơn</option>
            <option value="SDTPH">Số điện thoại PH</option>
          </select>

          <div class="input-field">
            <label for="config-input-field" name="configInputLabel">Mã Học Sinh</label>
            <input id="config-input-field" name="configInputField" type="text">
            <span class="message"></span>
          </div>                       
        </form>

        <div class="modal-footer">
          <button id="config-student-btn" class="form-btn btn" data-handle="">CLICK ME</button>
        </div>

        <div class="modal-nav flex-box">
          <div class="nav-item add-config active" data-config="add-config">THÊM</div>
          <div class="nav-item update-config" data-config="update-config">SỬA</div>
          <div class="nav-item delete-config" data-config="delete-config">XÓA</div>
          <div class="nav-item find-config" data-config="find-config">TÌM</div>
        </div>

      </div>
    </div>

    <div class="alert-container container flex-box close">
      <div class="alert-box flex-box">
        <div class="alert-message">TEST</div>
        <div class="alert-btn btn">ĐÓNG</div>
      </div>
    </div>

  </div>

  
  
</body>
<script src="./JS/script.js?v=<?php echo time(); ?>"></script>
</html>