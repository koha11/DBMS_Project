const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = 
{
  dataArr: [],
  render: (option) =>
  {
    let htmls ="";
    let dataArr = web.dataArr;
    
    switch(option)
    {
      case "HOCSINH": 
        htmls += `<div class="table-row">
          <div class="content-table-head table-col table-title">Mã HS</div>
          <div class="content-table-head table-col table-title">Họ Và Tên</div>
          <div class="content-table-head table-col table-title">Mã Lớp</div>
          <div class="content-table-head table-col table-title">Số Điện Thoại</div>
          <div class="content-table-head table-col table-title">Email</div>
          <div class="content-table-head table-col table-title">Mã Hóa Đơn</div>
          <div class="content-table-head table-col table-title">Số Điện Thoại PH</div>
          </div>`;       
        for(let x in dataArr)
        {
          htmls += `<div class="table-row">
            <div class="content-table-head table-col">${dataArr[x][0]}</div>
            <div class="content-table-head table-col">${dataArr[x][1]}</div>
            <div class="content-table-head table-col">${dataArr[x][2]}</div>
            <div class="content-table-head table-col">${dataArr[x][3]}</div>
            <div class="content-table-head table-col">${dataArr[x][4]}</div>
            <div class="content-table-head table-col">${dataArr[x][5]}</div>
            <div class="content-table-head table-col">${dataArr[x][6]}</div>
            </div>`;
        }
      
        $('#student-table').innerHTML = htmls;
      break;
      case "":
    }
    
  },
  getData: (tableName) =>
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac    
      web.dataArr = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve
      web.render(tableName);
    }
    xmlhttp.open("GET",`./Php/get_all_data.php?table=${tableName}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  getRows: (tableName) =>
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac    
      web.dataArr = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve
      web.render(tableName);
    }
    xmlhttp.open("GET",`./Php/get_all_data.php?table=${tableName}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  handleEvents: () =>
  {
    $("#config-btn").addEventListener("click", function(e)
    {
      e.preventDefault();

    })

    $('.select-list').addEventListener('click', function(e)
    {        
      $('[name=configInputLabel]').innerText = e.target.options[e.target.selectedIndex].text; //lay ra text cua option da chom
    })

    $('.config-modal-container').addEventListener('click', function(e)
    {
      e.stopPropagation();
      e.target.classList.add('close');
    })

    for(let modal of $$('.modal'))
    {
      modal.addEventListener('click', function(e)
      {
        e.stopPropagation();
      })
    }

    $('#student-table-config').addEventListener('click',function(e)
    {
      $('.config-modal-container').classList.remove('close');
    })

    for(let item of $$('.modal-nav .nav-item'))
    {
      item.addEventListener('click',function(e)
      {
        let item = e.target
        let modal = item.closest('.config-modal');
        modal.classList.remove(modal.dataset.config);
        modal.classList.add(item.dataset.config);

        $('.nav-item.active').classList.remove('active');
        item.classList.add('active');

        modal.dataset.config = item.dataset.config
      })
    }
  },
  start: () =>
  {
    web.getData("HOCSINH");
    web.handleEvents();
  }
}

web.start();