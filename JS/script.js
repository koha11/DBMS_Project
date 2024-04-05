const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = {
  DataArr: {}, // Mảng nhận các bản ghi lấy đc từ db
  RenderArr: [], // Mảng nhận các bản ghi đang được render ra màn hình
  inputObj: {}, // Mảng chứa các cặp key và value hiện có trong input-modal
  Table: $("#content-table").dataset.table,
  ConfigState: "add", // Trạng thái hiện tại của config modal
  IsValidate: true,
  IsTitleRendered: false,
  // Hàm render bảng (ndung chính của trang web)
  render: (DataArr, option) => {
    let htmls = "";
    let flag = web.IsTitleRendered;

    if (web.Table != $("#content-table").dataset.table) {
      $("#content-table").dataset.table = web.Table;
      flag = false;
      web.IsTitleRendered = false; //reset lai trang thai da render title hay chua
    }

    switch (option) {
      case "STUDENT":
        if (!flag) {
          flag = true;
          // tránh render lại title
          htmls += `<div class="table-row title-row">
            <div class="content-table-head table-col table-title fl-1 flex-box" name="STUDENT_ID">
              <div class="name-col">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_NAME">
              <div class="name-col">Student Name</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_GENDER">
              <div class="name-col">Gender</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_PHONE">
              <div class="name-col">Phone</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-3 flex-box" name="ST_ADDRESS">
              <div class="name-col">Address</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-3 flex-box" name="ST_EMAIL">
              <div class="name-col">Email</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_DATE">
              <div class="name-col">Date</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
          </div>`;
        }

        htmls += `<div class="row-container">`;

        DataArr.forEach((obj) => {
          if (obj != undefined && Object.values(obj)[0] != undefined) {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${
                keyArr[0]
              }">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[1]
              }">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[2]
              }">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[3]
              }">${obj[keyArr[3]]}</div>
              <div class="content-table-head table-col fl-3" name="${
                keyArr[4]
              }">${obj[keyArr[4]]}</div>
              <div class="content-table-head table-col fl-3" name="${
                keyArr[5]
              }">${obj[keyArr[5]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[6]
              }">${obj[keyArr[6]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt' data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });

        htmls += `</div>`;

        break;

      case "COURSE":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
          <div class="content-table-head table-col table-title fl-1 flex-box" name="COURSE_ID">
            <div class="">ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_NAME">
            <div class="">Course Name</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_LEVEL">
            <div class="">Level</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-3 flex-box" name="COURSE_TYPE">
            <div class="">Type</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-3 flex-box" name="COURSE_METHOD">
            <div class="">Method</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_LEVEL">
            <div class="">Level</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_FEE">
            <div class="">Fee</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          </div>`;
        }

        htmls += `<div class="row-container">`;

        DataArr.forEach((obj) => 
        {
          if (obj != undefined && Object.values(obj)[0] != undefined)
          {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${keyArr[0]}">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[1]}">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[2]}">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-3" name="${keyArr[3]}">${obj[keyArr[3]]}</div>
              <div class="content-table-head table-col fl-3" name="${keyArr[4]}">${obj[keyArr[4]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[5]}">${obj[keyArr[5]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[6]}">${obj[keyArr[6]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        })
          

        htmls += `</div>`;
        break;

      case "TEACHER":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
            <div class="content-table-head table-col table-title fl-1 flex-box" name="TEACHER_ID">
              <div class="">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="TR_NAME">
              <div class="">Name</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="TR_NATION">
              <div class="">Nation</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="TR_GENDER">
              <div class="">Gender</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="TR_DATE">
            <div class="">Date</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="TR_PHONE">
              <div class="">Phone</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-3 flex-box" name="TR_EMAIL">
              <div class="">Email</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-3 flex-box" name="TR_ADDRESS">
              <div class="">Address</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>

            <div class="content-table-head table-col table-title fl-2 flex-box" name="TR_DEGREE">
              <div class="">Degree</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="IELTS_OVERALL">
              <div class="">Ielts Overall</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
          </div>`;
        }

        htmls += `<div class="row-container">`;

        DataArr.forEach((obj) => {
          if (obj != undefined && Object.values(obj)[0] != undefined) {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${
                keyArr[0]
              }">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[1]
              }">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-3" name="${
                keyArr[2]
              }">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[3]
              }">${obj[keyArr[3]]}</div>
              <div class="content-table-head table-col fl-3" name="${
                keyArr[4]
              }">${obj[keyArr[4]]}</div>
              <div class="content-table-head table-col fl-4" name="${
                keyArr[5]
              }">${obj[keyArr[5]]}</div>
              <div class="content-table-head table-col fl-4" name="${
                keyArr[6]
              }">${obj[keyArr[6]]}</div>
              <div class="content-table-head table-col fl-4" name="${
                keyArr[7]
              }">${obj[keyArr[7]]}</div>
              <div class="content-table-head table-col fl-4" name="${
                keyArr[8]
              }">${obj[keyArr[8]]}</div>
              <div class="content-table-head table-col fl-4" name="${
                keyArr[9]
              }">${obj[keyArr[9]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt' data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;

        break;

      case "CLASS":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row">
            <div class="content-table-head table-col table-title fl-1 flex-box" name="CLASS_ID">
              <div class="">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_ID">
              <div class="">Course ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="TEACHER_ID">
              <div class="">Teacher ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>         
            <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASSROOM">
              <div class="">Classroom</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>    
          </div>`;
        }

        htmls += `<div class="row-container">`;

         DataArr.forEach((obj) => 
        {
          if (obj != undefined && Object.values(obj)[0] != undefined)
          {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${keyArr[0]}">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[1]}">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[2]}">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[3]}">${obj[keyArr[3]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case "TIMETABLE":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row">
              <div class="content-table-head table-col table-title fl-1 flex-box" name="CLASS_ID">
                <div class="">ID</div>
                <div class="order-option flex-box">
                  <i class='bx bxs-up-arrow' data-order='asc'></i>
                  <i class='bx bxs-down-arrow' data-order='desc'></i>
                </div>
              </div>
              <div class="content-table-head table-col table-title fl-2 flex-box" name="WEEKLYDAY">
                <div class="">Weeklyday</div>
                <div class="order-option flex-box">
                  <i class='bx bxs-up-arrow' data-order='asc'></i>
                  <i class='bx bxs-down-arrow' data-order='desc'></i>
                </div>
              </div>
              <div class="content-table-head table-col table-title fl-2 flex-box" name="DAYPERIOD">
                <div class="">Dayperiod</div>
                <div class="order-option flex-box">
                  <i class='bx bxs-up-arrow' data-order='asc'></i>
                  <i class='bx bxs-down-arrow' data-order='desc'></i>
                </div>
              </div>           
            </div>`;
        }

        htmls += `<div class="row-container">`;

         DataArr.forEach((obj) => 
        {
          if (obj != undefined && Object.values(obj)[0] != undefined)
          {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
                <div class="content-table-head table-col fl-1" name="${keyArr[0]}">${obj[keyArr[0]]}</div>
                <div class="content-table-head table-col fl-2" name="${keyArr[1]}">${obj[keyArr[1]]}</div>
                <div class="content-table-head table-col fl-2" name="${keyArr[2]}">${obj[keyArr[2]]}</div>
                <div class="config-btn-container">
                  <i class='bx bxs-edit-alt'data-config="update"></i>
                  <i class='bx bx-x' data-config="delete"></i>
                </div>
              </div>`
            };
        });
        htmls += `</div>`;
        break;

      case "RESULT":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row">
            <div class="content-table-head table-col table-title fl-1 flex-box" name="CLASS_ID">
              <div class="">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="STUDENT_ID">
              <div class="">Student ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="SPEAKING">
              <div class="">Speaking</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="LISTENING">
              <div class="">Listening</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="READING">
              <div class="">Reading</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="WRITING">
              <div class="">Writing</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="OVERALL">
              <div class="">Overall</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>          
          </div>`;
        }

        htmls += `<div class="row-container">`;

         DataArr.forEach((obj) => 
        {
          if (obj != undefined && Object.values(obj)[0] != undefined)
          {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${keyArr[0]}">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[1]}">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[2]}">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[3]}">${obj[keyArr[3]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[4]}">${obj[keyArr[4]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[5]}">${obj[keyArr[5]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[6]}">${obj[keyArr[6]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case "CLASS_DETAIL":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row">
            <div class="content-table-head table-col table-title fl-1 flex-box" name="CLASS_ID">
              <div class="">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_START">
              <div class="">Student ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_END">
              <div class="">Speaking</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="LESSONS">
              <div class="">Listening</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>            
          </div>`;
        }

        htmls += `<div class="row-container">`;

         DataArr.forEach((obj) => 
        {
          if (obj != undefined && Object.values(obj)[0] != undefined)
          {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${keyArr[0]}">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[1]}">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[2]}">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[3]}">${obj[keyArr[3]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case "BILL":
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row">
            <div class="content-table-head table-col table-title fl-1 flex-box" name="BILL_ID">
              <div class="">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="STUDENT_ID">
              <div class="">Student ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_P">
              <div class="">Date Payment</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="METHOD_P">
              <div class="">Method Payment</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="PAYMENT">
            <div class="">Payment</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          </div>`;
        }

        htmls += `<div class="row-container">`;

         DataArr.forEach((obj) => 
        {
          if (obj != undefined && Object.values(obj)[0] != undefined)
          {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1" name="${keyArr[0]}">${obj[keyArr[0]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[1]}">${obj[keyArr[1]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[2]}">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[3]}">${obj[keyArr[3]]}</div>
              <div class="content-table-head table-col fl-2" name="${keyArr[4]}">${obj[keyArr[4]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;
    }

    let table = $("#content-table");

    //render nội dung bảng
    if (flag != web.IsTitleRendered)
      // Nếu flag == web.IsTitleRender thì tức là nó đã render rồi, còn ko thì đã chuyển bảng || chưa render
      //Nếu đây lần render đầu tiên
      table.innerHTML = htmls; //render cả tiêu đề
    else table.children[1].innerHTML = htmls;

    //Mỗi lần render lại là phải restart 2 handle event order và configRow
    if (flag != web.IsTitleRendered) web.handleOrder();

    web.handleConfigRow();

    web.IsTitleRendered = flag; // set lại trạng thái đã render title hay chưa
    //set lại chiều cao của sidebar để fit với bảng
    $(".sidebar").style.height = $(".main-content").scrollHeight + "px";
  },
  // Hàm render options list dựa trên bảng đang đc tham chiếu
  renderOptionLists: () => {
    // render danh sách những lựa chọn theo key để tìm kiếm
    for (let selectInput of $$(".select-input")) {
      //để hàm riêng đi: not done yet
      selectInput.addEventListener("focus", function (e) {
        let htmls = "";
        let table = selectInput.dataset.table;

        //Nếu dữ liệu cột nằm trong bảng của page thì ko cần gọi dữ liệu từ database
        if (web.DataArr[table]) { // Bảng đã có dữ liệu thì ko cần gửi request cho db
          web.DataArr[table].forEach((row) => {
            if(row[selectInput.name] != undefined) // Nếu nó chưa có dữ nào thì đừng render
              htmls += `<option value="${row[selectInput.name]}"></option>`;
          });
          selectInput
            .closest(".input-field")
            .querySelector("datalist").innerHTML = htmls;
        } else {
          web.getData(table).then((value) => {
            web.handleChangeTable(value, table, false); // tiền xử lí dữ liệu nếu bảng kco hàng nào
            web.DataArr[table].forEach((row) => {
              if(row[selectInput.name] != undefined) // Nếu nó chưa có dữ nào thì đừng render
                htmls += `<option value="${row[selectInput.name]}"></option>`;
            });

            web.DataArr[table] = value;

            selectInput
              .closest(".input-field")
              .querySelector("datalist").innerHTML = htmls;
          });
        }
      });
    }
  },
  //Hàm render ra những lựa chọn để có thể chọn khi tìm kiếm
  renderSearchingOptions: () => {
    //render danh sách option của thanh tìm kiếm
    let htmls = "";
    for (let col in web.DataArr[web.Table][0])
      htmls += `<option value="${col}">${col}</option>`;
    $(".searching-option").innerHTML = htmls;
  },
  renderInputForm: () => {
    let dataArr = web.DataArr[web.Table];

    //Khởi tạo header cho modal
    let htmls = `
      <div class="modal-header">
        ${web.ConfigState == "add" ? "ADD ROW MODAL" : "UPDATE ROW MODAL"}
      </div>`;

    // Khởi tạo form add và update
    let addConfig = `<form class="modal-body flex-box config-form" data-config="add">`;
    let updateConfig = `<form class="modal-body flex-box config-form" data-config="update">`;
    for (let key in dataArr[0]) {
      let message = "";
      let title = "";
      let constraint = "";
      
      //them constraints 
      if (key.includes("ID")) constraint = "id,required,noSpecialChar";
      if (key.includes("NAME")) constraint = "required,noSpecialChar,noNumber";
      if (key.includes("PHONE")) constraint = "required,phone";
      if (key.includes("EMAIL")) constraint = "required,email";
      if (key.includes("DATE")) constraint = "required";

      if (!constraint) constraint = "required";

      //them title voi msg
      switch (web.Table) {
        case "STUDENT":
          {
            if (key.includes("ID")) {
              title = `Student ID`;
              message = `Example: "ST0, ST1, ..."`;
            }

            if (key.includes("NAME")) {
              title = `Student Name`;
              message = `Example: "Trần Anh Khoa"`;
            }

            if (key.includes("PHONE")) {
              title = `Student Phone`;
              message = `Example: "0702455222, +8472455222"`;
            }

            if (key.includes("EMAIL")) {
              title = `Student Email`;
              message = `Example: "student@gmail.com"`;
            }

            if (key.includes("ADDRESS")) {
              title = `Student Address`;
              message = `Example: "01 Nguyễn Đình Chiểu, Nha Trang, Khánh Hòa"`;
            }

            if (key.includes("GENDER")) {
              title = `Student Gender`;
              message = `Example: "Nam, Nữ, Khác"`;
            }

            if (key.includes("DATE")) {
              title = `Student Date`;
              message = `Example: "dd/mm/yyyy"`;
            }
          }
          break;

        case "TEACHER":
          {
            if (key.includes("ID")) {
              title = `Teacher ID`;
              message = `Example: "ST0, ST1, ..."`;
            }

            if (key.includes("NAME")) {
              title = `Teacher Name`;
              message = `Example: "Trần Anh Khoa"`;
            }

            if (key.includes("NATION")) {
              title = `Teacher Nation`;
              message = `Example: "Vietnam"`;
            }

            if (key.includes("PHONE")) {
              title = `Teacher Phone`;
              message = `Example: "0702455222, +8472455222"`;
            }

            if (key.includes("EMAIL")) {
              title = `Teacher Email`;
              message = `Example: "Teacher@gmail.com"`;
            }

            if (key.includes("ADDRESS")) {
              title = `Teacher Address`;
              message = `Example: "01 Nguyễn Đình Chiểu, Nha Trang, Khánh Hòa"`;
            }

            if (key.includes("GENDER")) {
              title = `Teacher Gender`;
              message = `Example: "Nam, Nữ, Khác"`;
            }

            if (key.includes("DATE")) {
              title = `Student Date`;
              message = `Example: "dd/mm/yyyy"`;
            }

            if (key.includes("DEGREE")) {
              title = `Degree`;
              message = `Example: "master"`;
            }

            if (key == "IELTS_OVERALL") {
              title = `Ielts Overall`;
              message = `Example: "8.5"`;
            }

            if (key == "...") {
              title = `Student Date`;
              message = `Example: "Undergraduate, master, ..."`;
            }
          }
          break;

        case "COURSE":
          {
            if (key.includes("ID")) {
              title = `Course ID`;
              message = `Example: "C0, C1, ..."`;
            }

            if (key.includes("NAME")) {
              title = `Course Name`;
              message = `Example: "Trần Anh Khoa"`;
            }

            if (key.includes("FEE")) {
              title = `Course Fee`;
              message = `Example: "10000000"`;
            }

            if (key.includes("TYPE")) {
              title = `Course Type`;
              message = `Example: "Junior"`;
            }

            if (key.includes("LEVEL")) {
              title = `Course Level`;
              message = `Example: "Basic"`;
            }

            if (key.includes("METHOD")) {
              title = `Course Method`;
              message = `Example: "Online - Offline"`;
            }
          }
          break;

        case "CLASS":
          {
            if (key.includes("CLASS_ID")) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes("COURSE_ID")) {
              title = `Course ID`;
              message = `Example: "C0, C1, ..."`;
              constraint = "subid,required,noSpecialChar";
            }
            if (key.includes("TEACHER_ID")) {
              title = `Teacher ID`;
              message = `Example: "T1, T2, ..."`;
              constraint = "subid,required,noSpecialChar";
            }
            if (key.includes("CLASSROOM")) {
              title = `Classroom`;
              message = `Example: "P100, P201, ..."`;
            }
          }
          break;

        case "TIMETABLE":
          {
            if (key.includes("CLASS_ID")) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes("WEEKLYDAY")) {
              title = `Weeklyday`;
              message = `Example: "2, 3, ..."`;
            }
            if (key.includes("DAYPERIOD")) {
              title = `Dayperiod`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;

        case "RESULT":
          {
            if (key.includes("CLASS_ID")) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
              constraint = "ids,subid,required,noSpecialChar";

            }
            if (key.includes("STUDENT_ID")) {
              title = `Student ID`;
              message = `Example: "2, 3, ..."`;
              constraint = "ids,subid,required,noSpecialChar";
            }
            if (key.includes("SPEAKING")) {
              title = `Speaking`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("LISTENING")) {
              title = `Listening`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("READING")) {
              title = `Reading`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("WRITING")) {
              title = `Writing`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("OVERALL")) {
              title = `Overall`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;

        case "CLASS_DETAIL":
          {
            if (key.includes("CLASS_ID")) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes("DATE_START")) {
              title = `Date Start`;
              message = `Example: "2, 3, ..."`;
            }
            if (key.includes("DATE_END")) {
              title = `Date End`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("LESSONS")) {
              title = `Lessons`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;

        case "BILL":
          {
            if (key.includes("BILL_ID")) {
              title = `Bill ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes("STUDENT_ID")) {
              title = `Student ID`;
              message = `Example: "2, 3, ..."`;
            }
            if (key.includes("DATE_P")) {
              title = `Date Payment`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("METHOD_P")) {
              title = `Method Payment`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes("PAYMENT")) {
              title = `Payment`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;
      }

      if (constraint.includes("subid")) {
        //Thêm datalist
        addConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <input id="A-${key}" name="${key}" list="list-${key}" type="text" class="fl-2 select-input" data-constraint="${constraint}" data-table="${key.slice(
          0,
          key.length - 3
        )}">
            <datalist id="list-${key}"></datalist>
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;

        updateConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <input id="U-${key}" name="${key}" list="list-${key}" value="${
          web.inputObj[key]
        }" type="text" class="fl-2 select-input" data-constraint="${constraint}" data-table="${key.slice(
          0,
          key.length - 3
        )}">
            <datalist id="list-${key}"></datalist>
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;
      } //kco datalist
      else {
        addConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <input id="A-${key}" name="${key}" type="text" class="fl-2" data-constraint="${constraint}">
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;

        if (key.includes("ID"))
          //ID update thì set readonly
          updateConfig += `<div class="input-field flex-box">                      
            <div class="flex-box input-container">
              <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
              <input id="U-${key}" name="${key}" value="${web.inputObj[key]}" type="text" class="fl-2" data-constraint="" class="select-input" data-table="HOCSINH" readonly>
            </div>
            <span class="message "message>Hãy chọn id hợp lệ</span>
            <span class="message error"></span>
          </div>`;
        else
          updateConfig += `<div class="input-field flex-box">                      
            <div class="flex-box input-container">
              <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
              <input id="U-${key}" name="${key}" value="${web.inputObj[key]}" type="text" class="fl-2" data-constraint="${constraint}">
            </div>
            <span class="message ">${message}</span>
            <span class="message error"></span>
          </div>`;
      }
    }
    addConfig += `</form>`;
    updateConfig += `</form>`;

    if (web.ConfigState == "add")
      htmls =
        htmls +
        addConfig +
        `<div class="modal-footer flex-box">
          <button id="config-btn" class="form-btn btn" data-handle="">
            <i class="icon-footer fa-solid fa-check"></i>
              Save
          </button>
        </div>`;
    else
      htmls =
        htmls +
        updateConfig +
        `<div class="modal-footer flex-box">
          <button id="config-btn" class="form-btn btn" data-handle="">
            <i class="icon-footer fa-solid fa-check"></i>
              Save
          </button>
        </div>`;

    $(".config-modal").innerHTML = htmls;

    web.handleSubmitForm();
    web.renderOptionLists();
    web.handleValidInput();
  },
  //Hàm render alert confirm box
  renderConfirmAlert: () => {
    let msg = "";
    if (web.ConfigState == "add") {
      msg = "Do you want to add row?";
    } else if (web.ConfigState == "update") {
      msg = "Do you want to update row?";
    } else {
      msg = "Do you want to delete row?";
    }

    let htmls = `<div class="alert-box flex-box">
      <div class="alert-message">${msg}</div>
      <div class="btn-container flex-box">
        <div class="alert-btn cancel-btn btn">CANCEL</div>
        <div class="alert-btn confirm-btn btn">YES</div>
      </div>
    </div>`;
    $(".alert-container").innerHTML = htmls;
    $(".alert-container").classList.remove("close");
    web.handleAlertChoose();
  },
  //Hàm lấy tất cả bản ghi của 1 bảng từ db
  getData: async (
    tableName,
    id = "",
    val = "" //async function return Promise => dùng then() để xử lí
  ) => {
    let myPromise = new Promise(function (resolve) {
      let xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
      xmlhttp.onreadystatechange = function () {
        //bat dong bo, onload se cham hon so voi cac code khac
        if (this.readyState == 4 && this.status == 200) {
          let dataArr = JSON.parse(this.responseText);
          dataArr.forEach((obj) => {
            for (let key in obj)
              if (key.includes("DATE"))
                obj[key] = obj[key].date
                  .slice(0, 10)
                  .split("-")
                  .reverse()
                  .join("-"); //Lấy 10 chữ đầu(yyyy/mm/dd) -> đảo ngược -> dd/mm/yyyy
          });

          resolve(dataArr);
        }
      };
      xmlhttp.open(
        "GET",
        `./Php/get_all_data.php?table=${tableName}&id=${id}&val=${val}`
      ); //trhop lay DL thi dung get
      xmlhttp.send();
    });

    return await myPromise; //trả về Promise có result là mảng nhận đc từ database
  },
  //Hàm lấy tất cả bản ghi của 1 cột trong bảng từ db
  getCol: async (tableName = "", colName = "") => {
    let myPromise = new Promise((resolve) => {
      if (tableName == "" || colName == "") resolve([[""]]);
      else {
        const xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp

        xmlhttp.onreadystatechange = function () {
          //bat dong bo, onload se cham hon so voi cac code khac
          if (this.readyState == 4 && this.status == 200)
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
  // Hàm thêm bản ghi vào bảng
  addRow: () => {
    let dataObj = web.inputObj;

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
        web.getData(web.Table).then((value) => {
          web.handleChangeTable(value);
          web.resetInputValue();

          $(".alert-container").classList.add("close");
          $(".config-modal-container").classList.add("close");
        });
      }
    };
    xmlhttp.send(`add=${JSON.stringify(dataObj)}`);
  },
  // Hàm cập nhật lại nội dung của bản ghi
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
        //gọi lại dữ liệu và render lại
        web.getData(web.Table).then((value) => {
          web.handleChangeTable(value);
          web.resetInputValue();

          // Đóng form và alert box
          $(".alert-container").classList.add("close");
          $(".config-modal-container").classList.add("close");
        });
      }
    };

    let dataObj = web.getInputData();

    for (let col in dataObj) {
      if (dataObj.col == "") delete dataObj.col;
    }

    dataObj.tableName = web.Table;

    xmlhttp.send(`update=${JSON.stringify(dataObj)}`);
  },
  // Hàm xóa 1 bản ghi
  deleteRow: (tableName = web.Table, id, key) => {
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open("POST", "./Php/delete_row.php");
    xmlhttp.setRequestHeader(
      "Content-type",
      "application/x-www-form-urlencoded"
    );
    xmlhttp.onreadystatechange = function () {
      //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //gọi lại dữ liệu và render lại
        web.getData(web.Table).then((value) => {
          //xử lí chuyển bảng
          web.handleChangeTable(value);
          //tắt alert box
          $(".alert-container").classList.add("close");
        });
      }
    };

    let dataObj = { tableName: tableName };

    dataObj[key] = id;

    xmlhttp.send(`delete=${JSON.stringify(dataObj)}`);
  },
  // Hàm reset giá trị của input
  resetInputValue: () => {
    let inputs = $$("input");
    for (const input of inputs) {
      input.value = "";
    }
  },
  // Hàm reset hiển thị lỗi của input
  resetError: (input) => {
    let inputField = input.closest(".input-field");
    input.classList.remove("error");
    inputField.querySelector("span.error").innerText = "";
    inputField
      .querySelector("span.message:not(.error)")
      .classList.remove("close");

    web.IsValidate = true; // reset valid state của form
  },
  // Hàm validate dữ liệu của input
  validate: (input, types) => {
    types = types.split(","); // tách các type thành mảng
    let inputField = input.closest(".input-field");
    let isValidate = true;
    let errorMsg = "";
    let errorElm = inputField.querySelector("span.error");
    input.value = input.value.trim();    

    //Lý do để Promise bên ngoài là vì, hàm lấy cột trả về Promise nếu ko để mọi t/hop trong .then() thì sẽ xảy ra bất đồng bộ
    for (let type of types) {
      switch (type) {
        case "id": {
          for (let row of web.DataArr[web.Table]) {
            if (row[input.name] == undefined) break;

            if (input.value === row[input.name]) {
              errorMsg = "Id đã tồn tại";
              isValidate = false;
              break;
            }
          }
          break;
        }

        case "ids": {
          errorMsg = "";
          isValidate = true;

          let inputs = input.closest('.config-form').querySelectorAll('input[name*="_ID"]');
          let obj = {}

          for(let input of inputs)        
            obj[input.name] = input.value;
                    
          for (let row of web.DataArr[web.Table]) {
            if(row[input.name] == undefined) // Bang kco du lieu thi break
              break;

            let flag = false; // xac dinh trang thai ban dau la bi trung` PK

            for (let key in obj)
            {
              console.log(row[key] + "+" + obj[key] + "+" + flag)
              if (obj[key] !== row[key])               
                flag = true; // ko bi trung` PK
            }

            if(!flag) // Neu bi trung` thi break
            {
              errorMsg = "Id da ton tai";
              isValidate = false;              
              break;
            }
          }          
        }
        break;

        case "subid": {
          errorMsg = "Sub ID không tồn tại";
          isValidate = false;

          if(web.DataArr[input.dataset.table])
            for (let row of web.DataArr[input.dataset.table]) {
              if (row[input.name] != undefined && input.value === row[input.name]) {
                errorMsg = "";
                isValidate = true;
                break;
              }
           }
          break;
        }

        case "phone": {
          let regex = /^(0|\+84)\d{9}$/;
          if (!input.value.match(regex)) {
            errorMsg = "Số điện thoại không hợp lệ!";
            isValidate = false;
          }
          break;
        }
        case "email": {
          let regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!input.value.toLowerCase().match(regex)) {
            errorMsg = "Email không hợp lệ!";
            isValidate = false;
          }
          break;
        }
        case "required": {
          if (input.value.trim() == "") {
            errorMsg = "Dữ liệu này không được để trống";
            isValidate = false;
            break;
          }
          break;
        }
        case "noSpecialChar": {
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
        case "noNumber": {
          for (let ch of input.value) {
            if (!isNaN(Number(ch)) && ch != " ") {
              errorMsg = "Không được phép nhập ký tự số";
              isValidate = false;
              break;
            }
          }
        }
      }

      if(!isValidate) //neu sai roi thi ko can xet cac constraint khac nua
        break;
    }

    if (!isValidate) {
      inputField
        .querySelector("span.message:not(.error)")
        .classList.add("close");
      input.classList.add("error");
      errorElm.innerText = errorMsg;
    } 
    else
    {
      if(input.dataset.constraint.includes('ids'))
      {
        let inputs = input.closest('.config-form').querySelectorAll('input[name*="_ID"]');
        for(let input of inputs)
          web.resetError(input);
      }
      else
        web.resetError(input);
    }

    console.log(isValidate)
    return isValidate;
  },
  // Hàm lấy value từ input đang tồn tại (tiền xử lí dữ liệu)
  getInputData: () => {
    let dataObj = {};

    let inputList = $$(`form.config-form .input-field input`); //danh sach input tuong ung voi config-state

    for (let input of inputList) dataObj[input.name] = input.value.trim();

    return dataObj;
  },
  // Hàm tìm kiếm 1/nhiều bản ghi dựa trên 1 cột nào đó (duyệt qua mảng)
  findData: () => {
    let foundDataArr = web.DataArr[web.Table];
    let option = $(".searching-option").value;
    let condition = $(".searching-input").value.toLowerCase();

    foundDataArr = foundDataArr.map((row) => {
      //duyệt qua mảng dữ liệu chính
      if (row[option].toLowerCase().startsWith(condition))
        //lấy ra giá trị của key tương ứng và so sánh với giá trị đang tìm
        return row;
    });

    web.RenderArr = foundDataArr; // set mảng render với nội dung đã tìm kiếm đc
    web.render(web.RenderArr, web.Table);
  },
  // Sắp xếp dữ liệu
  sortData: (arr, col, option) => {
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i; j < arr.length; j++) {
        let temp_obj = {};
        if (arr[i] != undefined && arr[j] != undefined) {
          if (option == "asc") {
            if (arr[i][col] > arr[j][col]) {
              temp_obj = arr[i];
              arr[i] = arr[j];
              arr[j] = temp_obj;
            }
          } else if (arr[i][col] < arr[j][col]) {
            temp_obj = arr[i];
            arr[i] = arr[j];
            arr[j] = temp_obj;
          }
        }
      }
    }

    return arr;
  },

  // Xử lí 2 nút chức năng trên mỗi dòng
  handleConfigRow: () => {
    let configBtns = $$(
      ".config-btn-container .bx-x,.config-btn-container .bxs-edit-alt"
    );

    for (let btn of configBtns) {
      btn.addEventListener("click", function (e) {
        let row = btn.closest(".table-row");
        let id = row.children[0].innerText; // Lấy ra ID

        if (btn.dataset.config == "delete") {
          //Neu click xoa
          let key = Object.keys(web.DataArr[web.Table][0]).find((item) =>
            item.includes("ID")
          ); //lấy ra key name của ID
          web.inputObj = { [key]: id };
          web.ConfigState = "delete";
          web.renderConfirmAlert();
        } else {
          for (let item of row.children)
            web.inputObj[item.getAttribute("name")] = item.innerText;
          // Đưa dữ liệu ban đầu (trước khi update) vào Input Obj để bên config modal có thể đưa
          // những dữ liệu này hiển thị bên update modal

          web.ConfigState = "update";
          web.renderInputForm();
          $(".config-modal-container").classList.remove("close");
        }
      });
    }
  },

  // Xử lí 2 lựa chọn Cancel / Yes của alert box
  handleAlertChoose: () => {
    let cancel = $(".alert-box .cancel-btn");
    let yes = $(".alert-box .confirm-btn");

    cancel.addEventListener("click", function (e) {
      $(".alert-container").classList.add("close");
    });

    yes.addEventListener("click", function (e) {
      if (web.ConfigState == "add") web.addRow();
      else if (web.ConfigState == "update") web.updateRow();
      else {
        let key = Object.keys(web.inputObj)[0];
        web.deleteRow(web.Table, web.inputObj[key], key);
      }
    });
  },

  // Xử lí submit form
  handleSubmitForm: () => {
    $("#config-btn").addEventListener("click", function (e) {
      let inputList = $$(`form .input-field input`); //danh sach input tuong ung voi config-state
      e.preventDefault();

      for (let input of inputList) {
        if (input.value == "") {
          if (!web.validate(input, input.dataset.constraint))
            //ktra xem dữ liệu trống đó có bắt buộc ko
            web.IsValidate = false;
        }
      }

      web.inputObj = web.getInputData();
      if (web.IsValidate) web.renderConfirmAlert();
    });
  },

  handleOrder: () => {
    for (let item of $$(".order-option i")) {
      item.addEventListener("click", function (e) {
        if (item.classList.contains("active")) {
          //Nếu click order option đang active (hủy sort)
          item.classList.remove("active");
          //render lại theo mảng gốc ban đầu
          web.render(web.DataArr[web.Table], web.Table);
        } else {
          for (let item of $$(".order-option i"))
            item.classList.remove("active");

          let col = item.closest(".table-title");

          item.classList.add("active");
          web.render(
            web.sortData(
              web.RenderArr,
              col.getAttribute("name"),
              item.dataset.order
            ),
            web.Table
          );
        }
      });
    }
  },

  //Xử lí việc lấy dữ liệu từ db khi chuyển bảng hoặc mới load trang và xử lí bảng kco bản ghi
  handleChangeTable: (
    value,
    table = web.Table,
    isRender = true // tham số t2 cho chọn render lại bảng hay ko, hay chỉ là xử lí mảng kco bản ghi nào
  ) => {
    //Neu Bang chua co dong du lieu nao
    if (Object.getOwnPropertyNames(value[0])[0] == "COLUMN_NAME") {
      //Neu key cua dong tien la column_name => bang kco du lieu nao
      let obj = {};
      for (let item of value) obj[Object.values(item)[0]] = undefined;
      web.DataArr[table] = [obj];
    } else web.DataArr[table] = value;

    if (isRender) {
      web.render(web.DataArr[web.Table], web.Table);
      web.RenderArr = web.DataArr[web.Table];
      web.renderSearchingOptions();
    }
  },

  handleValidInput: () => {
    //Kiểm tra value ở input có valid hay ko --> tach ham`
    for (let input of $$(`form.config-form .input-field input`)) {
      input.addEventListener(
        "focusout",
        function (
          e //blur
        ) {
          web.IsValidate = web.validate(input, input.dataset.constraint);
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

      input.addEventListener(
        "focusin",
        function (
          e //blur
        ) {
          web.resetError(input);
        }
      );
    }
  },

  restartHandleEvents: () => {
    web.handleConfigRow();
  },

  handleEvents: () => {
    //Bien dung chung

    // Xử lí tắt modal
    $(".config-modal-container").addEventListener("click", function (e) {
      e.stopPropagation();
      e.target.classList.add("close");

      let inputList = $$(`form .input-field input`);
      for (let input of inputList) web.resetError(input);

      //web.setConfigState($(".nav-item.add-config"));
      web.resetInputValue();
    });

    for (let modal of $$(".modal")) {
      modal.addEventListener("click", function (e) {
        e.stopPropagation();
      });
    }

    // Mở add modal
    $("#table-config").addEventListener("click", function (e) {
      web.ConfigState = "add";
      web.renderInputForm();
      $(".config-modal-container").classList.remove("close");
    });

    //Xử lí tìm kiếm dữ liệu trên searching bar
    $(".searching-input").addEventListener("keyup", function (e) {
      web.findData();
    });

    //Ngăn chặn hvi mđịnh từ alert-container
    $(".alert-box").addEventListener("click", function (e) {
      e.stopPropagation();
    });

    //xu li chuyen bang
    for (let item of $$(".list-sidebar")) {
      item.addEventListener("click", function (e) {
        if (item.dataset.table != web.Table) {
          web.Table = item.dataset.table;

          if (!web.DataArr[web.Table])
            //Nếu bảng này chưa đc gửi request bao giờ thì gửi request
            web.getData(web.Table).then((value) => {
              //Neu Bang chua co dong du lieu nao
              web.handleChangeTable(value);

              //Kích hoạt active cho table-nav vừa mới click
              $(".list-sidebar.active").classList.remove("active");
              item.classList.add("active");
            });
          //do bat dong bo nen phai lap code
          else {
            // Bảng đã có -> Không cần gửi request lại
            $(".list-sidebar.active").classList.remove("active");
            item.classList.add("active");

            web.render(web.DataArr[web.Table], web.Table);
            web.RenderArr = web.DataArr[web.Table];
            web.renderSearchingOptions();
          }
        }
      });
    }

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
      let delayTime = lists.classList.contains("close") ? 200 : 120;
      setTimeout(() => {
        name_sidebar.classList.toggle("close");
        lists.classList.toggle("close");
      }, delayTime);
    });
  },
  start: () => {
    web.getData(web.Table).then((value) => {
      web.handleChangeTable(value);
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
    let setting = $(".icon-arrow-down");
    let formSetting = $(".log-out");
    // Click setting log out
    setting.addEventListener("click", function () {
      formSetting.classList.toggle("close");
    });

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
  },
  start: () => {
    noneTables.handleEvents();
  },
};

web.start();
// noneTables.start();

/*SH!T NOTES
 */
