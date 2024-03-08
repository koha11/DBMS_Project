const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = 
{
  DataArr: [],
  Table:  $('#content-table').dataset.table,
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
      
        $('#content-table').innerHTML = htmls;
      break;
      case "":
    }
    
  },
  renderOptionLists: (colData) =>
  {
    let htmls = "";
    colData.forEach(item => {
      htmls += `<option value="${item}"></option>`;
    });

    $('#mahs-list').innerHTML = htmls;
  },
  getData: (tableName,name,option) =>
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac
      web.DataArr = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve
      web.render(tableName);
    }
    xmlhttp.open("GET",`./Php/get_all_data.php?table=${tableName}&orderName=${name}&orderOption=${option}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  getCol: (tableName,colName) =>
  {
    const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
    xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac
      let colData = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve      
      web.renderOptionLists(colData);
    }
    xmlhttp.open("GET",`./Php/get_column.php?table=${tableName}&col=${colName}`); //trhop lay DL thi dung get
    xmlhttp.send();
  },
  // getRows: (tableName,name,option) => //type "" de ko order
  // {
  //   const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
  //   xmlhttp.onload = function(){  //bat dong bo, onload se cham hon so voi cac code khac    
  //     web.DataArr = JSON.parse(this.responseText);  //responeText: JSON ma server tra ve
  //     web.render(tableName);
  //   }
  //   xmlhttp.open("GET",`./Php/get_all_data.php?table=${tableName}&orderName=${name}&orderOption=${option}`); //trhop lay DL thi dung get
  //   xmlhttp.send();
  // },
  addRow: () =>
  {  
    let dataObj = {};

    switch(web.Table)
    {
      case "HOCSINH":
        dataObj.MaHS = $("[name=add_MaHS]").value;
        dataObj.TenHS = $("[name=add_TenHS]").value;
        dataObj.MaLop = $("[name=add_MaLop]").value; //CÓ THỂ DÙNG OPTIONS DỰA TRÊN BẢNG LOPHOC ĐỂ LẤY VALUE
        dataObj.SDT = $("[name=add_SDTHS]").value;
        dataObj.Email = $("[name=add_EmailHS]").value;
        dataObj.SDTPH = $("[name=add_SDTPH]").value;
        break;

      }
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./Php/add_student_row.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        $('.alert-container').classList.remove('close');  
      }
    }

    xmlhttp.send(`DATA=${JSON.stringify(dataObj)}`);
  },
  updateRow: () =>
  {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST","./Php/update_row.php");
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.onreadystatechange = function() {//Call a function when the state changes.
      if(xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(this.responseText);
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
        default:
          break;
      }     
    })

    // $('.select-list').addEventListener('click', function(e)
    // {        
    //   $('[name=configInputLabel]').innerText = e.target.options[e.target.selectedIndex].text; //lay ra text cua option da chom
    // })

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

    $('#table-config').addEventListener('click',function(e)
    {
      $('.config-modal-container').classList.remove('close');    
    })

    for(let item of $$('.modal-nav .nav-item'))
    {
      item.addEventListener('click',function(e)
      {
        let item = e.target;
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
      })
    }

    $('.nav-item.update-config').addEventListener('click',function(e)
    {
      web.getCol(web.Table,"MaHS");
    })

    $('.alert-btn').addEventListener('click',function(e)
    {
      $('.alert-container').classList.add('close');
      $('.config-modal-container:not(close)').classList.add('close');
      web.getData("HOCSINH");
    })

  },
  start: () =>
  {
    web.getData(web.Table," "," ");
    web.handleEvents();
  }
}

web.start();

/*SH!T NOTES 

dataObj.MaLop = $("[name=add_MaLop]").value; // ADD
-->CÓ THỂ DÙNG OPTIONS DỰA TRÊN BẢNG LOPHOC ĐỂ LẤY VALUE
//UPDATE
--> FIELD MAHS, DÙNG OPTION ĐỂ SELECT CÁC HS ĐANG CÓ, TỪ ĐÓ SỬA CÁC GIÁ TRỊ CÒN LẠI




*/