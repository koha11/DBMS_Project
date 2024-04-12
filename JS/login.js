const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = 
{
  user: $("#username"),
  pass: $("#pass"),
  tryLogin: async (uid,pwd) =>
  {
    let myPromise = new Promise((resolve) => {
      const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
      xmlhttp.onreadystatechange = function () {
        //bat dong bo, onload se cham hon so voi cac code khac
        if (this.readyState == 4 && this.status == 200)
          resolve(JSON.parse(this.responseText)); //responeText: JSON ma server tra ve
      };
      xmlhttp.open(
        "POST",
        `./api/login.php`
      ); 
      xmlhttp.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
      );

      let loginObj = {uid: uid, pwd: pwd}
      xmlhttp.send(`account=${JSON.stringify(loginObj)}`);
    });

    return await myPromise;
  },
  handleLogin: (obj) =>
  {
    if(obj == 0) //Ten tai khoan ko ton tai
    {
      $('.form-login').classList.add('error')
      $('.form-message.error').innerText = "Sai tên đăng nhập hoặc mật khẩu!";
    }
    else //Dang nhap thanh cong
    {
      for(let key in obj)
        sessionStorage.setItem(key,obj[key]);
      window.location.href += "Home.html"; //Chuyen den Home
    }
  },
  handleEvent: () =>
  {    
    const togglePassword = $("#toggle-password");
    // Show hide password
    togglePassword.addEventListener("click", function () {
      const typePass = web.pass.getAttribute("type") === "password" ? "text" : "password";
      web.pass.setAttribute("type", typePass);
      this.classList.toggle("fa-eye");
    });

    $('#submit-btn').addEventListener("click", function(e)
    {
      e.preventDefault()
      web.tryLogin(web.user.value,web.pass.value)
        .then((obj) =>
        {
          console.log(obj);
          web.handleLogin(obj);

        })
    })

    for(let input of $$('input'))
      input.addEventListener("focusin",function(e)
      {
        $('.form-message.error').innerText = "";        
        $('.form-login').classList.remove('error')
      })
  },
  start: () =>
  {
    web.handleEvent()  
  }
}

web.start()