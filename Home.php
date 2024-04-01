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
                    <div class="list-sidebar active" data-table="STUDENT">
                        <i class='icon-sidebar bx bxs-group'></i>
                        <span class="name-sidebar-items">
                            Student Management
                        </span>
                    </div>
                    <div class="list-sidebar" data-table="TEACHER">
                        <i class="icon-sidebar fa-solid fa-chalkboard-user"></i>
                        <span class="name-sidebar-items">Teacher</span>
                    </div>
                    <div class="list-sidebar" data-table="TIME_TABLE">
                        <i class='icon-sidebar bx bxs-time'></i>
                        <span class="name-sidebar-items">Time</span>
                    </div>
                    <div class="list-sidebar" data-table="RESULT">
                        <i class='icon-sidebar bx bx-bar-chart'></i>
                        <span class="name-sidebar-items">
                            Result
                        </span>
                    </div>
                    <div class="list-sidebar" data-table="COURSE">
                        <i class='icon-sidebar bx bxs-briefcase'></i>
                        <span class="name-sidebar-items">
                            Courses
                        </span>
                    </div>
                    <div class="list-sidebar" data-table="CLASS">
                        <i class="icon-sidebar fa-solid fa-users"></i>
                        <span class="name-sidebar-items">
                            Class
                        </span>
                    </div>
                    <div class="list-sidebar" data-table="CLASS_DETAIL">
                        <i class="icon-sidebar fa-solid fa-users"></i>
                        <span class="name-sidebar-items">
                            Class Details
                        </span>
                    </div>
                    <div class="list-sidebar"  data-table="BILL">
                        <i class='icon-sidebar bx bxs-credit-card'></i>
                        <span class="name-sidebar-items">
                            Bill
                        </span>
                    </div>
                </div>
            </div>
            <div class="main-content">
                <div class="tool-container flex-box">
                    <div class="searching-bar flex-box">
                        <select name="" id="" class="fl-2 searching-option">
                        </select>
                        <input name="" type="text" class="fl-4 searching-input">
                        <i class='bx bx-search'></i>
                    </div>
                    <div id="table-config" class="table-config">
                        Configure Data!
                    </div>
                </div>
                

                <div id="content-table" class="content-table" data-table="STUDENT">
                </div>

                <div class="config-modal-container close container flex-box">
                    <div class="config-modal flex-box modal add-config" data-config="add-config">                        
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