<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
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
            <div class="sidebar flex-box">
                <div class="head-sidebar flex-box">
                    <div class="name-sidebar close flex-box">
                        John Wick
                    </div>
                    <div class="sidebar-menu">
                        <i class="icon-menu flex-box fa-solid fa-bars"></i>
                    </div>
                </div>
                <div class="content-sidebar close">
                    <div class="list-sidebar active">
                        <a class="about">
                            <i class='icon-sidebar bx bxs-group'></i>
                            <span class="name-sidebar-items">
                                Student Management
                            </span>
                        </a>
                    </div>
                    <div class="list-sidebar">
                        <a class="about" href="./giaovien.php">

                            <i class="icon-sidebar fa-solid fa-chalkboard-user"></i>
                            <span class="name-sidebar-items">Teacher</span>
                        </a>
                    </div>
                    <div class="list-sidebar">
                        <a class="about" href="./tkb.php">
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
                    <div class="list-sidebar">
                        <a class="about" href="./khoahoc.php">
                            <i class='icon-sidebar bx bxs-briefcase'></i>
                            <span class="name-sidebar-items">
                                Courses
                            </span>
                        </a>
                    </div>
                    <div class="list-sidebar">
                        <a class="about" href="./lop.php">

                            <i class="icon-sidebar fa-solid fa-users"></i>
                            <span class="name-sidebar-items">
                                Class
                            </span>
                        </a>
                    </div>
                    <div class="list-sidebar">
                        <a class="about" href="./bill.php">
                            <i class='icon-sidebar bx bxs-credit-card'></i>
                            <span class="name-sidebar-items">
                                Bill
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="tool-container flex-box">
                    <div class="searching-bar flex-box">
                        <select name="" id="" class="fl-2 searching-option">
                        </select>
                        <input name="" type="text" class="fl-4 searching-input">
                    </div>
                    <div id="table-config" class="table-config">
                        Configure Data!
                    </div>
                </div>
                

                <div id="content-table" class="content-table" data-table="HOCSINH">
                </div>

                <div class="config-modal-container close container flex-box">
                    <div class="config-modal flex-box modal add-config" data-config="add-config">

                        <div class="modal-header">
                            Configure Table
                        </div>

                        <div class="modal-nav flex-box">
                            <div class="nav-item add-config active" data-config="add-config">
                                ADD</div>
                            <div class="nav-item update-config" data-config="update-config">
                                EDIT</div>
                            <div class="nav-item delete-config" data-config="delete-config">
                                DELETE</div>
                            <div class="nav-item find-config" data-config="find-config">
                                SEARCH</div>
                        </div>

                        <!-- ADD FORM -->
                        <form class="modal-body flex-box config-form add-form add-config" data-config="add-config">

                            <div class="input-field flex-box">
                                
                                <div class="flex-box input-container">
                                    <label for="a-mahs-hs" name="configInputLabel" class="fl-1">ID</label>
                                    <input id="a-mahs-hs" name="Ma_HS" type="text" class="fl-2" data-constraint="id,required,noSpecialChar">
                                </div>
                                
                                <span class="message ">Ví dụ: "SV0, SV1, ..."</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="a-tenhs-hs" name="configInputLabel" class="fl-1">Student's Name</label>
                                    <input id="a-tenhs-hs" name="Ten_HS" type="text" class="fl-2" data-constraint="required,noSpecialChar,noNumber">
                                </div>
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="a-malop-hs" name="configInputLabel" class="fl-1">ID Class</label>
                                    <input id="a-malop-hs" name="Ma_Lop" list="malop-list" type="text" class="select-input fl-2" data-table="LOP" data-constraint="subid,required">
                                    <datalist id="malop-list"></datalist>
                                </div>
                                
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="a-sdt-hs" name="configInputLabel" class="fl-1">Student's Phone</label>
                                    <input id="a-sdt-hs" name="SDT_HS" type="text" class="fl-2" data-constraint="required,phone">
                                </div>
                                
                                <span class="message">Ví dụ: 07xxxxxxxx, +847xxxxxxx</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="a-email-hs" name="configInputLabel" class="fl-1">Email</label>
                                    <input id="a-email-hs" name="Email_HS" type="text" class="fl-2" data-constraint="required,email">
                                </div>
                                
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="a-sdtph-hs" name="configInputLabel" class="fl-1">Parent's Phone</label>
                                    <input id="a-sdtph-hs" name="SDT_PH" type="text" data-constraint="required,phone">
                                </div>
                                
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                        </form>

                        <!-- UPDATE FORM -->
                        <form class="modal-body flex-box config-form update-form update-config close" data-config="update-config">
                            <div class="input-field flex-box">
                                
                                <div class="flex-box input-container">
                                    <label for="a-mahs-hs" name="configInputLabel" class="fl-1">ID</label>
                                    <input id="a-mahs-hs" name="Ma_HS" list="mahs-list" type="text" class="fl-2 select-input" data-constraint="id,required,noSpecialChar">
                                    <datalist id="mahs-list"></datalist>
                                </div>
                                
                                <span class="message ">Ví dụ: "SV0, SV1, ..."</span>
                                <span class="message error"></span>
                            </div>
                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="u-tenhs-hs" name="configInputLabel" class="fl-1">Student's Name</label>
                                    <input id="u-tenhs-hs" name="Ten_HS" type="text" class="fl-2" data-constraint="required,noSpecialChar,noNumber">
                                </div>
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>


                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="u-malop-hs" name="configInputLabel" class="fl-1">ID Class</label>
                                    <input id="u-malop-hs" name="Ma_Lop" list="malop-list" type="text" class="select-input fl-2" data-table="LOP" data-constraint="subid,required">
                                    <datalist id="malop-list"></datalist>
                                </div>
                                
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="u-sdt-hs" name="configInputLabel" class="fl-1">Student's Phone</label>
                                    <input id="u-sdt-hs" name="SDT_HS" type="text" class="fl-2" data-constraint="required,phone">
                                </div>
                                
                                <span class="message">Ví dụ: 07xxxxxxxx, +847xxxxxxx</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="u-email-hs" name="configInputLabel" class="fl-1">Email</label>
                                    <input id="u-email-hs" name="Email_HS" type="text" class="fl-2" data-constraint="required,email">
                                </div>
                                
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                            <div class="input-field flex-box">
                                <div class="input-container flex-box">
                                    <label for="a-sdtph-hs" name="configInputLabel" class="fl-1">Parent's Phone</label>
                                    <input id="a-sdtph-hs" name="SDT_PH" type="text" data-constraint="required,phone">
                                </div>
                                
                                <span class="message">TESSSSTSTSST</span>
                                <span class="message error"></span>
                            </div>

                        </form>

                        <!-- DELETE FORM -->
                        <form class="modal-body flex-box config-form delete-form delete-config close" data-config="delete-config">

                            <div class="input-field">
                                <label for="d-mahs" name="configInputLabel">ID</label>
                                <input id="d-mahs" list="d-mahs-list" name="Ma_HS" class="select-input" data-table="HOCSINH">
                                <datalist id="d-mahs-list">
                                </datalist>
                                <span class="message"></span>
                            </div>

                            <div class="infor-field fl-6 flex-box">
                            </div>

                        </form>

                        <div class="modal-footer flex-box">
                            <button id="config-btn" class="form-btn btn" data-handle="">
                                <i class="icon-footer fa-solid fa-check"></i>
                                Save
                            </button>
                        </div>
                    </div>
                </div>

                <div class="alert-container container flex-box close">
                    <div class="alert-box flex-box">
                        <div class="alert-message">TEST</div>
                        <div class="alert-btn btn">CLOSE</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="./JS/script.js"></script>
</body>

</html>