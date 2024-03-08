<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./Css/style.css?v=<?php echo time(); ?>">
    <title>Login</title>
</head>
<body>
    <!-- background cua form-->
    <div class="bg-image">
        <!-- form -->
        <div class="form flex-box">
            <!-- image of left form-->
            <img src="../Image/image-form.png" alt="" class="image-form">
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
                        
                        <input type="text" name="pass" id="pass" class="password">
                    </div>
                    
                    <div class="btn-form">
                        <button class="submit">Login</button>

                    </div>
                </form>         
            </div>
        </div>

    </div>
</body>
</html>