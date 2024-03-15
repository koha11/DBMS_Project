const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = {
  DataArr: [],
  inputArr: {},
  Table: $("#content-table").dataset.table, //Xử lí cái này = cách sử dụng tên đường dẫn
  ConfigState: "add-config",
  IsValidate: true,
  render: (DataArr,option) => {
    let htmls = "";

    switch (option) {
      case "HOCSINH":
        htmls += `<div class="table-row">
          <div class="content-table-head table-col table-title fl-1">Mã HS</div>
          <div class="content-table-head table-col table-title fl-3">Họ Và Tên</div>
          <div class="content-table-head table-col table-title fl-1">Mã Lớp</div>
          <div class="content-table-head table-col table-title fl-2">Số Điện Thoại</div>
          <div class="content-table-head table-col table-title fl-3">Email</div>
          <div class="content-table-head table-col table-title fl-2">Hóa Đơn</div>
          <div class="content-table-head table-col table-title fl-2">Số Điện Thoại PH</div>
          </div>`;
        for (let x in DataArr) {
          if(DataArr[x] != undefined)
          {
            htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-1">${
              DataArr[x].Ma_HS
            }</div>
            <div class="content-table-head table-col fl-3">${
              DataArr[x].Ten_HS
            }</div>
            <div class="content-table-head table-col fl-1">${
              DataArr[x].Ma_Lop
            }</div>
            <div class="content-table-head table-col fl-2">${
              DataArr[x].SDT_HS
            }</div>
            <div class="content-table-head table-col fl-3">${
              DataArr[x].EMAIL_HS
            }</div>
            <div class="content-table-head table-col fl-2">${
              DataArr[x].Ma_HoaDon ? "Đã Đóng" : "Chưa Đóng"
            }</div>
            <div class="content-table-head table-col fl-2">${
              DataArr[x].SDT_PH
            }</div>
            </div>`;
          }
        }
        break;
      case "KHOAHOC":
        htmls += `<div class="table-row">
          <div class="content-table-head table-col table-title fl-2">Mã KH</div>
          <div class="content-table-head table-col table-title fl-3">Trình Độ KH</div>
          <div class="content-table-head table-col table-title fl-3">Học Phí</div>
          <div class="content-table-head table-col table-title fl-3">Hình Thức</div>
        </div>`;

        for (let x in DataArr) {
          htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-2">${
              DataArr[x][0]
            }</div>
            <div class="content-table-head table-col fl-3">${
              DataArr[x][1]
            }</div>
            <div class="content-table-head table-col fl-3">${
              DataArr[x][2]
            }</div>
            <div class="content-table-head table-col fl-3">${
              DataArr[x][3] == 1 ? "Trực Tiếp" : "Online"
            }</div>
          </div>`;
        }
        break;

      case "GIAOVIEN":
        htmls += `<div class="table-row">
          <div class="content-table-head table-col table-title fl-1">Mã GV</div>
          <div class="content-table-head table-col table-title fl-2">Quốc Tịch</div>
          <div class="content-table-head table-col table-title fl-3">Họ Và Tên</div>
          <div class="content-table-head table-col table-title fl-2">Số Điện Thoại</div>
          <div class="content-table-head table-col table-title fl-3">Email</div>
          <div class="content-table-head table-col table-title fl-4">Địa Chỉ</div>
        </div>`;

        for (let x in DataArr) {
          htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-1">${DataArr[x][0]}</div>
            <div class="content-table-head table-col fl-2">${DataArr[x][1]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][2]}</div>
            <div class="content-table-head table-col fl-2">${DataArr[x][3]}</div>
            <div class="content-table-head table-col fl-3">${DataArr[x][4]}</div>
            <div class="content-table-head table-col fl-4">${DataArr[x][5]}</div>
          </div>`;
        }
        break;

      case "LOP":
        htmls += `<div class="table-row">
            <div class="content-table-head table-col table-title fl-2">Mã Lớp</div>
            <div class="content-table-head table-col table-title fl-2">Mã Khóa Học</div>
            <div class="content-table-head table-col table-title fl-2">Mã Giáo Viên</div>
            <div class="content-table-head table-col table-title fl-2">Phòng Học</div>
          </div>`;

        for (let x in DataArr) {
          htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-2">${DataArr[x][0]}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x][1]}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x][2]}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x][3]}</div>
            </div>`;
        }
        break;
    }

    //render nội dung bảng
    $("#content-table").innerHTML = htmls;

    //set lại chiều cao của sidebar để fit với bảng
    $(".sidebar").style.height = $(".main-content").scrollHeight + "px";
  },
  renderOptionLists: (colData, selector) => {
    let htmls = "";
    colData.forEach((item) => {
      htmls += `<option value="${item}"></option>`;
    });

    selector.closest(".input-field").querySelector("datalist").innerHTML =
      htmls;
  },
  renderConfirmLists: (dataArr) => {
    let htmls = "";

    if (!dataArr)
      htmls += `<div class="infor-spot"><b>undefined: </b>undefined</div>`;
    else
      for (let data in dataArr)
        htmls += `<div class="infor-spot"><b>${data}: </b>${dataArr[data]}</div>`;

    $(".delete-form .infor-field").innerHTML = htmls;
  },
  renderSearchingOptions: () => 
  {
    //render danh sách option của thanh tìm kiếm
    let htmls = ""
    for(let col in web.DataArr[0])
      htmls += `<option value="${col}">${col}</option>`
    $('.searching-option').innerHTML = htmls

  },
  getData: async (
    tableName,
    id = "",
    val = "" //async function return Promise => dùng then() để xử lí
  ) => {
    let myPromise = new Promise(function (resolve) {
      const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
      xmlhttp.onload = function () {
        //bat dong bo, onload se cham hon so voi cac code khac
        resolve(JSON.parse(this.responseText));
      };
      xmlhttp.open(
        "GET",
        `./Php/get_all_data.php?table=${tableName}&id=${id}&val=${val}`
      ); //trhop lay DL thi dung get
      xmlhttp.send();
    });

    return await myPromise; //trả về Promise có result là mảng nhận đc từ database
  },
  getCol: async (tableName="", colName="") => {
    
    let myPromise = new Promise((resolve) => {
      if(tableName == "" || colName == "")
        resolve([[""]]); 
      else
      {
        const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp

        xmlhttp.onload = function () {
          //bat dong bo, onload se cham hon so voi cac code khac
          resolve(JSON.parse(this.responseText)); //responeText: JSON ma server tra ve
        };

        xmlhttp.open(
          "GET",
          `./Php/get_column.php?table=${tableName}&col=${colName}`
        ); //trhop lay DL thi dung get
        xmlhttp.send();
      }
    });

    return await myPromise;
  },
  addRow: () => {
    let dataObj = web.inputArr;

    dataObj.tableName = web.Table;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./Php/add_row.php");
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.onreadystatechange = function () {
      //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        $(".alert-container").classList.remove("close");
      }
    };

    xmlhttp.send(`add=${JSON.stringify(dataObj)}`);
  },
  updateRow: () => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./Php/update_row.php");
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.onreadystatechange = function () {
      //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        console.log(this.responseText)
        $(".alert-container").classList.remove("close");
      }
    };

    let dataObj = web.getInputData();

    for(let col in dataObj)
    {
      if(dataObj.col == "")
        delete dataObj.col;
    }

    dataObj.tableName = web.Table

    xmlhttp.send(`update=${JSON.stringify(dataObj)}`);
  },
  deleteRow: () => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./Php/delete_row.php");
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.onreadystatechange = function () {
      //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        $(".alert-container").classList.remove("close");
      }
    };

    let dataObj = { tableName: web.Table };

    let input = $(`form.${web.ConfigState} .input-field input`);

    dataObj[input.name] = input.value;

    xmlhttp.send(`delete=${JSON.stringify(dataObj)}`);
  },
  setConfigState: (selector) => {
    let item = selector;
    let modal = $(".config-modal");
    let form = $(`.config-form.${item.dataset.config}`);
    let preForm = $(`.config-form:not(.close)`);

    modal.classList.remove(web.ConfigState);
    modal.classList.add(item.dataset.config);

    preForm.classList.add("close");
    form.classList.remove("close");

    $(".nav-item.active").classList.remove("active");
    item.classList.add("active");

    web.ConfigState = item.dataset.config;
    modal.dataset.config = web.ConfigState;
  },
  resetInputValue: () => {
    let inputs = $$("input");
    for (const input of inputs) {
      input.value = "";
    }
  },
  resetError: (input) => {
    let inputField = input.closest(".input-field");
    input.classList.remove("error");
    inputField.querySelector("span.error").innerText = "";
    inputField
      .querySelector("span.message:not(.error)")
      .classList.remove("close");
  },
  validate: (input, types) => {
    types = types.split(",");
    let inputField = input.closest(".input-field");
    let isValidate = true;
    let errorMsg = "";
    let errorElm = inputField.querySelector("span.error");
    input.value = input.value.trim();

    //Lý do để Promise bên ngoài là vì, hàm lấy cột trả về Promise nếu ko để mọi t/hop trong .then() thì sẽ xảy ra bất đồng bộ
    web.getCol(input.dataset.table ? input.dataset.table : "", input.name).then((colData) => {
      for (let type of types) {
        switch (type) {
          case "id":
          {
            for (let row of web.DataArr) {
              if (input.value === row[input.name]) {
                errorMsg = "Id đã tồn tại";
                isValidate = false;
                break;
              }
            }
            break;
          }          
          case "subid":
          {
            errorMsg = "Sub ID không tồn tại";
            isValidate = false;

            for (let val of colData) {
              if (input.value === val[0]) {
                errorMsg = "";
                isValidate = true;
                break;
              }
            }
            break;
          }

          case "phone":
          {
            let regex = /^(0|\+84)\d{9}$/
            if(!input.value.match(regex))
            {
              errorMsg = "Số điện thoại không hợp lệ!";
              isValidate = false;
            }
            break;
          }
          case "email":
          {
            let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if(!input.value.toLowerCase().match(regex))
            {
              errorMsg = "Email không hợp lệ!";
              isValidate = false;
            }
            break;
          }
          case "required":
          {
            if (input.value.trim() == "") {
              errorMsg = "Dữ liệu này không được để trống";
              isValidate = false;
              break;
            }
            break;
          }
          case "noSpecialChar":
          {
            let specialChar = "!@#$%^&*()+=-[]\\';,./{}|\":<>?";
            for (let ch of input.value) {
              if (specialChar.indexOf(ch) != -1) {
                errorMsg = "Không được phép nhập ký tự đặc biệt";
                isValidate = false;
                break;
              }
            }
            break;
          }
          case "noNumber":
          {
            for (let ch of input.value) {
              if (!isNaN(Number(ch)) && ch != " ") {
                errorMsg = "Không được phép nhập ký tự số";
                isValidate = false;
                break;
              }
            }
          }
        }
      }

      if (!isValidate) {
        inputField
          .querySelector("span.message:not(.error)")
          .classList.add("close");
        input.classList.add("error");
        errorElm.innerText = errorMsg;
      } else web.resetError(input);

      return isValidate;
    });
  },
  getInputData: () => {
    let dataObj = {};

    let inputList = $$(`form.${web.ConfigState} .input-field input`); //danh sach input tuong ung voi config-state

    for (let input of inputList) dataObj[input.name] = input.value.trim();

    return dataObj;
  },
  findData: () =>
  {
    let foundDataArr = web.DataArr
    let option = $('.searching-option').value
    let condition = $('.searching-input').value.toLowerCase()
    
    foundDataArr = foundDataArr.map((row) =>{
      if(row[option].toLowerCase().startsWith(condition))
      {
        console.log(row)
        return row
      }
 
    })
    console.log(foundDataArr)
    web.render(foundDataArr,web.Table)
  },

  handleEvents: () => {
    //Bien dung chung

    $("#config-btn").addEventListener("click", function (e) {
      let inputList = $$(`form.${web.ConfigState} .input-field input`); //danh sach input tuong ung voi config-state
      e.preventDefault();

      let flag = 0

      for (let input of inputList) {
        if (input.value == "")
        {
          flag = 1;
          web.IsValidate &= web.validate(input, input.dataset.constraint);
        }
      }

      if(!(flag && web.IsValidate))
        web.IsValidate = true;

      web.inputArr = web.getInputData();

      if (web.IsValidate)
        switch (web.ConfigState) {
          case "add-config":
            web.addRow();
            break;
          case "update-config":
            console.log("0")
            web.updateRow();
            break;
          case "delete-config":
            web.deleteRow();
            break;
          default:
            break;
        }
    });

    $(".config-modal-container").addEventListener("click", function (e) {
      e.stopPropagation();
      e.target.classList.add("close");

      let inputList = $$(`form.${web.ConfigState} .input-field input`)
      for (let input of inputList) web.resetError(input);

      web.setConfigState($(".nav-item.add-config"));
      web.resetInputValue();
    });

    for (let modal of $$(".modal")) {
      modal.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    $("#table-config").addEventListener("click", function (e) {
      $(".config-modal-container").classList.remove("close");
    });

    for (let item of $$(".modal-nav .nav-item")) {
      item.addEventListener("click", function (e) {
        let inputList = $$(`form.${web.ConfigState} .input-field input`)
        for (let input of inputList) web.resetError(input);
        web.setConfigState(e.target);
        web.resetInputValue();
      });
    }

    for (let selectInput of $$(".select-input")) {
      let colData = [];
      selectInput.addEventListener("focus", function (e) {
        //Nếu dữ liệu cột nằm trong bảng của page thì ko cần gọi dữ liệu từ database
        if (selectInput.dataset.table == web.Table || selectInput.dataset.table == undefined) {
          colData = web.DataArr.map((row) => {
            return row[selectInput.name];
          });
          web.renderOptionLists(colData, selectInput);
        } else {
          web
            .getCol(selectInput.dataset.table, selectInput.name)
            .then((value) => {
              web.renderOptionLists(value, selectInput);
            });
        }
      });
    }

    for (let input of $$(`form.${web.ConfigState} .input-field input`)) {
      input.addEventListener(
        "focusout",
        function (
          e //blur
        ) {
          web.IsValidate = web.validate(input,input.dataset.constraint);
        }
      );

      //khi đang tdoi du lieu trong input thì sẽ phải cài về như trc khi có lỗi
      input.addEventListener(
        "keydown",
        function (
          e //blur
        ) {
          web.resetError(input);
        }
      );
    }

    for (let item of $$(".alert-btn,.alert-container")) {
      item.addEventListener("click", function (e) {
        //get data and render data again
        web.getData(web.Table).then((value) => {
          web.DataArr = value;
          web.render(web.Table);
          $(".alert-container").classList.add("close");
          $(".config-modal-container:not(close)").classList.add("close");
          web.setConfigState($(".nav-item.add-config"));
          web.resetInputValue();
        });
      });
    }

    $('.searching-input').addEventListener("keyup",function(e)
    {
      web.findData();
    })

    $(".alert-box").addEventListener("click", function (e) {
      e.stopPropagation();
    });

    $(".delete-form input").addEventListener("keyup", function (e) {
      let id = e.target.name;
      let val = e.target.value;

      //get 1 row data from Promise get data
      web.getData(web.Table, id, val).then((value) => {
        web.renderConfirmLists(value);
      });
    });

    let menu = $(".icon-menu");
    let sidebar = $(".sidebar");
    let lists = $(".content-sidebar");
    let name_sidebar = $(".name-sidebar");

    // Thay đổi icon menu sidebar
    sidebar
      .querySelector(".sidebar-menu i")
      .addEventListener("click", function (e) {
        e.target.classList.toggle("fa-times");
      });

    menu.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar-width");
      let delayTime = lists.classList.contains("close") ? 400 : 150;
      setTimeout(() => {
        name_sidebar.classList.toggle("close");
        lists.classList.toggle("close");
      }, delayTime);
    });
  },
  start: () => {
    web.getData(web.Table).then((value) => {
      web.DataArr = value;
      web.render(web.DataArr,web.Table);
      web.renderSearchingOptions();
      web.handleEvents();
    });
  },
};

const noneTables = {
  handleEvents: () => {
    let menu = $(".icon-menu");
    let sidebar = $(".sidebar");
    let lists = $(".content-sidebar");
    let name_sidebar = $(".name-sidebar");

    // Thay đổi icon menu sidebar
    sidebar
      .querySelector(".sidebar-menu i")
      .addEventListener("click", function (e) {
        setTimeout(() => {
          e.target.classList.toggle("fa-times");
        }, 10000);
      });

    menu.addEventListener("click", function () {
      sidebar.classList.toggle("sidebar-width");
      let delayTime = lists.classList.contains("close") ? 200 : 250;
      setTimeout(() => {
        name_sidebar.classList.toggle("close");
        lists.classList.toggle("close");
      }, delayTime);
    });

    // click drop menu header
    let drop_menu = $(".icon-arrow-down");

    let arrow_up = $(".arrow-up");

    let log_out = $(".log-out");

    drop_menu.addEventListener("click", function () {
      arrow_up.classList.toggle("close");
      log_out.classList.toggle("close");
    });
  },
  start: () => {
    noneTables.handleEvents();
  },
};

web.start();
//noneTables.start();

/*SH!T NOTES 
  -Cái chức năng sắp xếp nên sắp xếp dựa trên dataArr[] chứ ko nên dựa trên câu truy vấn
*/
