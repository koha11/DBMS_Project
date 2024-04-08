<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="./Css/style.css?v=<?php echo time(); ?>">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <title>Login</title>
</head>
<body>
    <!-- background cua form-->
    <div class="bg-image">
        <!-- form -->
        <div class="form flex-box">
            <!-- image of left form-->
            <img src="../SQL/Assets/Image/image-form.png" alt="" class="image-form">
            <!-- login of right form -->
            <div class="form-login">
                <div class="form-login-title">Welcome</div>
                <div class="form-login-desc">Please login to your account</div>
                <form class="form-login-user">
                    <div class="user-email">
                        <label for="name" class="user-tittle">Username or Email</label>
                        
                        <input type="text" name="name" id="name" class="username">
                    </div>
                    
                    <div class="user-password">
                        <label for="pass" class="user-tittle">Password</label> 
                        <input type="password" name="pass" id="pass" class="password" autocomplete="on">
                        <i id="toggle-password" class="fa-solid fa-eye-slash" style="color: #bebebe;"></i>
                    </div>
                    <div class="btn-form">
                        <button class="submit">Login</button>
                    </div>
                </form>         
            </div>
        </div>

    </div>
    <script>
        const $ = document.querySelector.bind(document);
        const $$ = document.querySelectorAll.bind(document);
        const inputPass = $("#pass");
        const togglePassword = $("#toggle-password");
        // Show hide password
        togglePassword.addEventListener("click", function() {
           const typePass = inputPass.getAttribute("type") === "password" ? "text" : "password";
           inputPass.setAttribute("type", typePass);
           this.classList.toggle("fa-eye");
        })
    </script>
</body>
</html>