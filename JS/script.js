const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = 
{
  DataArr: [],
  Table:  $('#content-table').dataset.table, //Xử lí cái này = cách sử dụng tên đường dẫn 
  ConfigState: "add-config",
  render: (option) =>
  {
    let htmls ="";
    let DataArr = web.DataArr;
    
    switch(option)
    {
      case "HOCSINH": 
        htmls += `<div class="table-row">
          <div class="content-table-head table-col table-title fl-1">Mã HS</div>
          <div class="content-table-head table-col table-title fl-3">Họ Và Tên</div>
          <div class="content-table-head table-col table-title fl-1">Mã Lớp</div>
          <div class="content-table-head table-col table-title fl-2">Số Điện Thoại</div>
          <div class="content-table-head table-col table-title fl-3">Email</div>
          <div class="content-table-head table-col table-title fl-1">Hóa Đơn</div>
          <div class="content-table-head table-col table-title fl-2">Số Điện Thoại PH</div>
          </div>`;       
        for(let x in DataArr)
        {
          htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-1">${DataArr[x][0]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][1]}</div>
            <div class="content-table-head table-col fl-1">${DataArr[x][2]}</div>
            <div class="content-table-head table-col fl-2">${DataArr[x][3]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][4]}</div>
            <div class="content-table-head table-col fl-1">${DataArr[x][5]}</div>
            <div class="content-table-head table-col fl-2">${DataArr[x][6]}</div>
            </div>`;
        }      
      break;
      case "KHOAHOC":

        htmls += `<div class="table-row">
          <div class="content-table-head table-col table-title fl-2">Mã KH</div>
          <div class="content-table-head table-col table-title fl-3">Trình Độ KH</div>
          <div class="content-table-head table-col table-title fl-3">Học Phí</div>
          <div class="content-table-head table-col table-title fl-3">Hình Thức</div>
        </div>`;

        for(let x in DataArr)
        {
          htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-2">${DataArr[x][0]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][1]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][2]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][3] == 1 ? "Trực Tiếp": "Online"}</div>
          </div>`;
        }
        break;
    }

    $('#content-table').innerHTML = htmls;
    $('.sidebar').style.height = $('.main-content').scrollHeight + 'px'
  },
  renderOptionLists: (colData,selector) =>
  {
    let htmls = "";
    colData.forEach(item => {
      htmls += `<option value="${item}"></option>`;
    });

    selector.closest('.input-field').querySelector('datalist').innerHTML = htmls;
  },
  renderConfirmLists: (dataArr) =>
  {
    let htmls = "";

    if(!dataArr)
      htmls += `<div class="infor-spot"><b>undefined: </b>undefined</div>`
    else
      for(let data in dataArr)
        htmls += `<div class="infor-spot"><b>${data}: </b>${dataArr[data]}</div>` 
  
    $('.delete-form .infor-field').innerHTML = htmls;

  },
  getData: (tableName,id="",val="",option="") =>
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac
      web.DataArr = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve
      web.render(tableName);
    }
    xmlhttp.open("GET",`./Php/get_all_data.php?table=${tableName}&id=${id}&val=${val}&option=${option}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  getCol: (tableName,colName,selector) =>
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac
      let colData = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve      
      web.renderOptionLists(colData,selector);
    }
    xmlhttp.open("GET",`./Php/get_column.php?table=${tableName}&col=${colName}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  getRow: (tableName,id,val,option) => //type "" de ko order
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac
      console.log(this.responseText);
      web.renderConfirmLists(JSON.parse(this.responseText)[0]);
    }
    xmlhttp.open("GET",`./Php/get_all_data.php?table=${tableName}&id=${id}&val=${val}&option=${option}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  addRow: () =>
  {  
    let dataObj = {};
    
    let inputs = $$('.add-form input');

    dataObj['tableName'] = web.Table

    for(let input of inputs)
    {
      dataObj[input.name] = input.value;
    }

    console.log(dataObj);
        
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./Php/add_row.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(this.responseText)
        $('.alert-container').classList.remove('close');  
      }
    }

    xmlhttp.send(`add=${JSON.stringify(dataObj)}`);
  },
  updateRow: () =>
  {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","./Php/update_row.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        $('.alert-container').classList.remove('close');  
      }
    }

    let dataObj = {tableName:web.Table};
    let inputs = $$(`form.${web.ConfigState} .input-field input`);
    let i = 0;

    while(inputs[i] != undefined)
    {
      dataObj[inputs[i].name] = inputs[i].value;
      i++;
    }
    
    xmlhttp.send(`update=${JSON.stringify(dataObj)}`);
  },
  deleteRow: () =>
  {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","./Php/delete_row.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        $('.alert-container').classList.remove('close');  
      }
    }

    let dataObj = {tableName:web.Table};

    let input = $(`form.${web.ConfigState} .input-field input`);

    dataObj[input.name] = input.value;
    
    xmlhttp.send(`delete=${JSON.stringify(dataObj)}`);
  },
  setConfigState: (selector) =>
  {
    let item = selector;
    let modal = $('.config-modal');
    let form = $(`.config-form.${item.dataset.config}`);
    let preForm = $(`.config-form:not(.close)`);

    modal.classList.remove(web.ConfigState);
    modal.classList.add(item.dataset.config);

    preForm.classList.add('close');
    form.classList.remove('close');

    $('.nav-item.active').classList.remove('active');
    item.classList.add('active');

    web.ConfigState = item.dataset.config;
    modal.dataset.config = web.ConfigState;
  },
  resetInputValue: () =>
  {
    let inputs = $$('input');
    for (const input of inputs) {
      input.value = "";
    }
  },
  handleEvents: () =>
  {

    $("#config-btn").addEventListener("click", function(e)
    {
      e.preventDefault();
      switch (web.ConfigState) {
        case "add-config":
          web.addRow(e.target);
          break;
        case "update-config":
          web.updateRow();
          break;
        case "delete-config":
          web.deleteRow();
          break;
        default:
          break;
      }     
    })

    $('.config-modal-container').addEventListener('click', function(e)
    {
      e.stopPropagation();
      e.target.classList.add('close');

      web.setConfigState($('.nav-item.add-config'));
      web.resetInputValue();
    })

    for(let modal of $$('.modal'))
    {
      modal.addEventListener('click', function(e)
      {
        e.stopPropagation();
      })
    }

    $('#table-config').addEventListener('click',function(e)
    {
      $('.config-modal-container').classList.remove('close');    
    })

    for(let item of $$('.modal-nav .nav-item'))
    {
      item.addEventListener('click',function(e)
      {
        web.setConfigState(e.target);
        web.resetInputValue();
      })
    }

    for (let input of $$('.select-input')) {
      input.addEventListener('focus',function(e)
      {
        web.getCol(web.Table,input.name,input);
        
      })
    }

    $('.alert-btn').addEventListener('click',function(e)
    {
      $('.alert-container').classList.add('close');
      $('.config-modal-container:not(close)').classList.add('close');
      
      web.setConfigState($('.nav-item.add-config'));
      web.resetInputValue();

      web.getData(web.Table);
    })

    //Hàm cb dùng để delay thời gian bắt event keyup (lấy trên mạng, ko hiểu bản chất)
    
    $('.delete-form input').addEventListener('keyup',function(e){

      let id = e.target.name;
      let val = e.target.value;

      web.getRow(web.Table,id,val,"getRow");
    })

    let menu = $('.icon-menu');
    let sidebar = $('.sidebar');
    let lists = $('.content-sidebar');
    let name_sidebar = $('.name-sidebar');

    // Thay đổi icon menu sidebar
    sidebar.querySelector('.sidebar-menu i').addEventListener('click', function(e)
    {
      e.target.classList.toggle('fa-times');
    })

    menu.addEventListener('click', function() {

      sidebar.classList.toggle('sidebar-width');
      let delayTime = lists.classList.contains('close') ? 400 : 150;
      setTimeout(()=>{
        name_sidebar.classList.toggle('close');
        lists.classList.toggle('close');
      },delayTime);
    })

  },
  start: () =>
  {
    web.getData(web.Table);
    web.handleEvents();
  }
}

const noneTables =
{
  handleEvents: () =>
  {
    let menu = $('.icon-menu');
    let sidebar = $('.sidebar');
    let lists = $('.content-sidebar');
    let name_sidebar = $('.name-sidebar');

    // Thay đổi icon menu sidebar
    sidebar.querySelector('.sidebar-menu i').addEventListener('click', function(e)
    {
      e.target.classList.toggle('fa-times');
    })

    menu.addEventListener('click', function() {

      sidebar.classList.toggle('sidebar-width');
      let delayTime = lists.classList.contains('close') ? 400 : 150;
      setTimeout(()=>{
        name_sidebar.classList.toggle('close');
        lists.classList.toggle('close');
      },delayTime);
    })

    // click drop menu header
    let drop_menu = $('.icon-arrow-down');
    
    let arrow_up = $('.arrow-up');
    
    let log_out = $('.log-out');

    drop_menu.addEventListener('click', function() {
      arrow_up.classList.toggle('close');
      log_out.classList.toggle('close');
    })
    
  },
  start: () =>
  {
    noneTables.handleEvents();
  } 
}


web.start();
//noneTables.start();

/*SH!T NOTES 
  -Cái chức năng sắp xếp nên sắp xếp dựa trên dataArr[] chứ ko nên dựa trên câu truy vấn
*/

