const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = {
  user: $('#username'),
  pass: $('#pass'),
  handleLogin: (obj) => {
    if (obj == 0) {
      //Ten tai khoan ko ton tai
      $('.form-login').classList.add('error');
      $('.form-message.error').innerText = 'Sai tên đăng nhập hoặc mật khẩu!';
    } //Dang nhap thanh cong
    else {
      for (let key in obj) sessionStorage.setItem(key, obj[key]);
      window.location.href = 'https://qlttta.onrender.com/Dashboard.html'; //Chuyen den Home
    }
  },
  handleEvent: () => {
    const togglePassword = $('#toggle-password');
    // Show hide password
    togglePassword.addEventListener('click', function () {
      const typePass =
        web.pass.getAttribute('type') === 'password' ? 'text' : 'password';
      web.pass.setAttribute('type', typePass);
      this.classList.toggle('fa-eye');
    });

    $('#submit-btn').addEventListener('click', function (e) {
      e.preventDefault();
      if (web.user.value == 'admin' && web.pass.value == '1')
        web.handleLogin({ user: 'admin', role: 'admin' });
      else web.handleLogin(0);
    });

    for (let input of $$('input'))
      input.addEventListener('focusin', function (e) {
        $('.form-message.error').innerText = '';
        $('.form-login').classList.remove('error');
      });
  },
  start: () => {
    web.handleEvent();
  },
};

web.start();
