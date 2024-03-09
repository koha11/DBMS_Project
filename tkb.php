<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="./Css/style.css?v=<? echo time(); ?>">
    <title>Home</title>
</head>

<body>
    <div class="view">
        <!-- header -->
        <div class="header">
            <div class="header-left">
                <div class="logo">
                    <img src="./Assets/Image/avatar-template.jpg" alt="" class="img-logo">
                </div>
                <div class="name-group">
                    <div class="name-text">
                        Student Management System
                    </div>
                </div>
            </div>
            <div class="header-right">
                <div class="avatar-user">
                    <img src="./Assets/Image/avatar-template.jpg" alt="" class="img-avatar">
                </div>
                <div class="name-user">
                    <div class="name-user-text">John Wick</div>
                    <i class='icon-arrow-down bx bx-chevron-down'></i>
                    <div class="arrow-up close"></div>
                    <ul class="log-out close">
                        <li class="item-drop-menu">
                            <i class='icon-drop-menu bx bxs-info-circle'></i>
                            <span class="text-log-out">
                                Thông tin
                            </span>
                        </li>

                        <li class="item-drop-menu item-drop-menu-last">
                            <i class='icon-drop-menu bx bxs-log-out-circle'></i>
                            <span class="text-log-out">
                                Log out
                            </span>
                        </li>
                    </ul>
                </div>

                <div class="notifi">
                    <i class='icon-notifi bx bxs-bell'></i>
                </div>
            </div>
        </div>
        <!-- main -->
        <div class="main flex-box">
            <!-- sidebar -->
            <div class="sidebar">
                <div class="head-sidebar">
                    <div class="name-sidebar close">
                        <span class="name-account">
                            John Wick
                        </span>
                    </div>
                    <div class="sidebar-menu">
                        <i class="icon-menu fa-solid fa-bars"></i>
                    </div>
                </div>
                <div class="content-sidebar close">
                    <div class="list-sidebar">
                        <a class="about" href="./hocsinh.php">
                            <i class='icon-sidebar bx bxs-group'></i>
                            <span class="name-sidebar-items">
                                Student Management
                            </span>
                        </a>
                    </div>
                    <div class="list-sidebar">
                        <a class="about" href="./giaovien.php">
                            <i class='icon-sidebar bx bxs-user'></i>
                            <span class="name-sidebar-items">Teacher</span>
                        </a>
                    </div>
                    <div class="list-sidebar active">
                        <a class="about">
                            <i class='icon-sidebar bx bxs-time'></i>
                            <span class="name-sidebar-items">Time</span>
                        </a>
                    </div>
                    <div class="list-sidebar">
                        <a class="about" href="./ketqua.php">
                            <i class='icon-sidebar bx bx-bar-chart'></i>
                            <span class="name-sidebar-items">
                                Result
                            </span>
                        </a>
                    </div> 
                </div>
            </div>
            <div class="main-content">
                <div id="table-config" class="table-config">
                    CONFIGURE YOUR DATAS HERE!
                </div>

                <div id="content-table" class="content-table" data-table="HOCSINH">
                </div>

                <div class="config-modal-container close container flex-box">
                    <div class="config-modal flex-box modal add-config" data-config="add-config">

                        <div class="modal-header">
                            CONFIGURE TABLE
                        </div>

                        <form class="modal-body flex-box config-form add-form add-config" data-config="add-config">

                            <div class="input-field">
                                <label for="a-mahs-hs" name="configInputLabel">Mã Học Sinh</label>
                                <input id="a-mahs-hs" name="add_MaHS" type="text">
                                <span class="message"></span>
                            </div>

                            <div class="input-field">
                                <label for="a-tenhs-hs" name="configInputLabel">Họ Và Tên</label>
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
                        <form class="modal-body flex-box config-form update-form update-config close" data-config="update-config">
                            <div class="input-field">
                                <label for="u-mahs" name="configInputLabel">Mã Học Sinh</label>
                                <input id="u-mahs" list="mahs-list" name="MaHS">
                                <datalist id="mahs-list">
                                </datalist>
                                <span class="message"></span>
                            </div>

                            <div class="input-field">
                                <label for="u-tenhs" name="configInputLabel">Họ Và Tên</label>
                                <input id="u-tenhs" name="Ten" type="text">
                                <span class="message"></span>
                            </div>

                            <div class="input-field">
                                <label for="u-malop" name="configInputLabel">Mã Lớp</label>
                                <input id="u-malop" name="MaLop" type="text">
                                <span class="message"></span>
                            </div>

                            <div class="input-field">
                                <label for="u-sdt" name="configInputLabel">Số Điện Thoại</label>
                                <input id="u-sdt" name="SDT" type="text">
                                <span class="message"></span>
                            </div>

                            <div class="input-field">
                                <label for="u-email" name="configInputLabel">Email</label>
                                <input id="u-email" name="Email" type="text">
                                <span class="message"></span>
                            </div>

                            <div class="input-field">
                                <label for="u-sdtph" name="configInputLabel">Số Điện Thoại PH</label>
                                <input id="u-sdtph" name="SDTPH" type="text">
                                <span class="message"></span>
                            </div>

                        </form>

                        <div class="modal-footer">
                            <button id="config-btn" class="form-btn btn" data-handle="">CLICK ME</button>
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
        </div>
    </div>
    <script src="./JS/script.js"></script>
</body>

</html>