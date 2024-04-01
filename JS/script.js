const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = {
  DataArr: {}, // Mảng nhận các bản ghi lấy đc từ db
  RenderArr: [], // Mảng nhận các bản ghi đang được render ra màn hình
  inputArr: {}, // Mảng chứa các cặp key và value hiện có trong input-modal
  Table: $("#content-table").dataset.table,
  ConfigState: "add-config", // Trạng thái hiện tại của config modal
  IsValidate: true,
  IsTitleRendered: false,
  // Hàm render bảng (ndung chính của trang web)
  render: (DataArr, option) => {
    let htmls = "";
    let flag = false;

    if (web.Table != $("#content-table").dataset.table) {
      $("#content-table").dataset.table = web.Table;
      flag = true;
      web.IsTitleRendered = false; //reset lai trang thai da render title hay chua
    }

    switch (option) {
      case "STUDENT":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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
          <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_PHONE">
            <div class="name-col">Phone</div>
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
          <div class="content-table-head table-col table-title fl-3 flex-box" name="ST_ADDRESS">
            <div class="name-col">Address</div>
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].STUDENT_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].ST_NAME}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].ST_PHONE}</div>
              <div class="content-table-head table-col fl-3">${DataArr[x].ST_EMAIL}</div>
              <div class="content-table-head table-col fl-3">${DataArr[x].ST_ADDRESS}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].ST_GENDER}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].ST_DATE}</div>
            </div>`;

        htmls += `</div>`;

        break;

      case "COURSE":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].COURSE_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].COURSE_NAME}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].COURSE_LEVEL}</div>
              <div class="content-table-head table-col fl-3">${DataArr[x].COURSE_TYPE}</div>
              <div class="content-table-head table-col fl-3">${DataArr[x].COURSE_METHOD}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].COURSE_LEVEL}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].COURSE_FEE}</div>
            </div>`;

        htmls += `</div>`;
        break;

      case "TEACHER":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr) {
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].TEACHER_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].TR_NAME}</div>
              <div class="content-table-head table-col fl-3">${DataArr[x].TR_NATION}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].TR_PHONE}</div>
              <div class="content-table-head table-col fl-3">${DataArr[x].TR_EMAIL}</div>
              <div class="content-table-head table-col fl-4">${DataArr[x].TR_ADDRESS}</div>
              <div class="content-table-head table-col fl-4">${DataArr[x].TR_GENDER}</div>
              <div class="content-table-head table-col fl-4">${DataArr[x].TR_DATE}</div>
              <div class="content-table-head table-col fl-4">${DataArr[x].TR_DEGREE}</div>
              <div class="content-table-head table-col fl-4">${DataArr[x].IELTS_OVERALL}</div>
            </div>`;
        }
        break;

      case "CLASS":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].CLASS_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].COURSE_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].TEACHER_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].CLASSROOM}</div>
            </div>`;

        htmls += `</div>`;
        break;

      case "TIMETABLE":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
                <div class="content-table-head table-col fl-1">${DataArr[x].CLASS_ID}</div>
                <div class="content-table-head table-col fl-2">${DataArr[x].WEEKLYDAY}</div>
                <div class="content-table-head table-col fl-2">${DataArr[x].DAYPERIOD}</div>
              </div>`;

        htmls += `</div>`;
        break;

      case "RESULT":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].CLASS_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].STUDENT_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].SPEAKING}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].LISTENING}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].READING}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].WRITING}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].OVERALL}</div>
            </div>`;

        htmls += `</div>`;
        break;

      case "CLASS_DETAIL":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].CLASS_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].DATE_START}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].DATE_END}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].LESSONS}</div>
            </div>`;

        htmls += `</div>`;
        break;

      case "BILL":
        if (!web.IsTitleRendered) {
          // tránh render lại title
          web.IsTitleRendered = true; //Da render tieu de roi
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

        for (let x in DataArr)
          if (
            DataArr[x] != undefined &&
            Object.values(DataArr[x])[0] != undefined
          )
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-1">${DataArr[x].BILL_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].STUDENT_ID}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].DATE_P}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].METHOD_P}</div>
              <div class="content-table-head table-col fl-2">${DataArr[x].PAYMENT}</div>
            </div>`;

        htmls += `</div>`;
        break;
    }

    let table = $("#content-table");
    //render nội dung bảng
    if (!table.children[0] || flag)
      // 3 THop: chua render title(!table.children[0]) || render rồi (flag=false) || chuyen sang bang moi (flag =true)
      //Nếu đây lần render đầu tiên
      table.innerHTML = htmls; //render cả tiêu đề
    else table.children[1].innerHTML = htmls;

    //set lại chiều cao của sidebar để fit với bảng
    $(".sidebar").style.height = $(".main-content").scrollHeight + "px";
  },
  // Hàm render options list dựa trên bảng đang đc tham chiếu
  renderOptionLists: (colData, selector) => {
    let htmls = "";
    colData.forEach((item) => {
      htmls += `<option value="${item}"></option>`;
    });

    selector.closest(".input-field").querySelector("datalist").innerHTML =
      htmls;
  },
  // Hàm render ra 1 bản ghi dựa trên id và bảng được truyền vào
  renderConfirmLists: (dataArr) => {
    let htmls = "";

    if (!dataArr)
      htmls += `<div class="infor-spot"><b>undefined: </b>undefined</div>`;
    else
      for (let data in dataArr)
        htmls += `<div class="infor-spot"><b>${data}: </b>${dataArr[data]}</div>`;

    $(".delete-form .infor-field").innerHTML = htmls;
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
    let htmls = `
      <div class="modal-header">
        Configure Table
      </div>

      <div class="modal-nav flex-box">
        <div class="nav-item add-config active" data-config="add-config">
            Add Profile</div>
        <div class="nav-item update-config" data-config="update-config">
            Edit Profile</div>
      </div>`;

    let addConfig = `<form class="modal-body flex-box config-form add-form add-config" data-config="add-config">`;
    let updateConfig = `<form class="modal-body flex-box config-form update-form update-config close" data-config="update-config">`;
    let deleteConfig = `<form class="modal-body flex-box config-form delete-form delete-config close" data-config="delete-config">`;
    if (dataArr[0]) {
      for (let key in dataArr[0]) {
        let message = "";
        let title = "";
        let constraint = "";

        //them constaints
        if (key.includes("ID")) constraint = "id,required,noSpecialChar";
        if (key.includes("NAME"))
          constraint = "required,noSpecialChar,noNumber";
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
                title = `Student Name`;
                message = `Example: "Trần Anh Khoa"`;
              }

              if (key.includes("FEE")) {
                title = `Student Nation`;
                message = `Example: "Vietnam"`;
              }

              if (key.includes("TYPE")) {
                title = `Student Phone`;
                message = `Example: "0702455222, +8472455222"`;
              }

              if (key.includes("LEVEL")) {
                title = `Student Email`;
                message = `Example: "student@gmail.com"`;
              }

              if (key.includes("METHOD")) {
                title = `Student Address`;
                message = `Example: "01 Nguyễn Đình Chiểu, Nha Trang, Khánh Hòa"`;
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
              }
              if (key.includes("TEACHER_ID")) {
                title = `Teacher ID`;
                message = `Example: "T1, T2, ..."`;
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
              }
              if (key.includes("STUDENT_ID")) {
                title = `Student ID`;
                message = `Example: "2, 3, ..."`;
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

        addConfig += `<div class="input-field flex-box">                      
            <div class="flex-box input-container">
              <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
              <input id="A-${key}" name="${key}" type="text" class="fl-2" data-constraint="${constraint}">
            </div>
            <span class="message ">${message}</span>
            <span class="message error"></span>
          </div>`;

        if (key.includes("ID"))
          updateConfig += `<div class="input-field flex-box">                      
              <div class="flex-box input-container">
                <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
                <input id="U-${key}" name="${key}" list="U-${key}-List" type="text" class="fl-2" data-constraint="require,subid" class="select-input" data-table="HOCSINH">
                <datalist id="U-${key}-List"></datalist>
              </div>
              <span class="message "message>Hãy chọn id hợp lệ</span>
              <span class="message error"></span>
            </div>`;
        else
          updateConfig += `<div class="input-field flex-box">                      
              <div class="flex-box input-container">
                <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
                <input id="U-${key}" name="${key}" type="text" class="fl-2" data-constraint="${constraint}">
              </div>
              <span class="message ">${message}</span>
              <span class="message error"></span>
            </div>`;
      }
      addConfig += `</form>`;
      updateConfig += `</form>`;

      htmls =
        htmls +
        addConfig +
        updateConfig +
        `<div class="modal-footer flex-box">
        <button id="config-btn" class="form-btn btn" data-handle="">
          <i class="icon-footer fa-solid fa-check"></i>
            Save
        </button>
      </div>`;

      $(".config-modal").innerHTML = htmls;
    }
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
        if (this.readyState == 4 && this.status == 200)
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
        $(".alert-container").classList.remove("close");
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
  // Hàm handle chuyển đổi các form trong config modal
  setConfigState: (selector) => {
    let item = selector;
    let modal = $(".config-modal");
    let form = $(`.config-form.${item.dataset.config}`);
    let preForm = $(`.config-form:not(.close)`);

    // Thêm class của config mới cho modal
    modal.classList.remove(web.ConfigState);
    modal.classList.add(item.dataset.config);

    //Đóng form cũ và mở form mới click vào
    preForm.classList.add("close");
    form.classList.remove("close");

    // Thêm trạng thái active cho nav-bar
    $(".nav-item.active").classList.remove("active");
    item.classList.add("active");

    // Set lại config mới cho web
    web.ConfigState = item.dataset.config;
    modal.dataset.config = web.ConfigState;
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
    web
      .getCol(input.dataset.table ? input.dataset.table : "", input.name)
      .then((colData) => {
        for (let type of types) {
          switch (type) {
            case "id": {
              for (let row of web.DataArr[web.Table]) {
                if (
                  Object.getOwnPropertyNames(row, keys)[0] != "COLUMN_NAME" &&
                  input.value === row[input.name]
                ) {
                  errorMsg = "Id đã tồn tại";
                  isValidate = false;
                  break;
                }
              }
              break;
            }
            case "subid": {
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
  // Hàm lấy value từ input đang tồn tại (tiền xử lí dữ liệu)
  getInputData: () => {
    let dataObj = {};

    let inputList = $$(`form.${web.ConfigState} .input-field input`); //danh sach input tuong ung voi config-state

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

  handleEvents: () => {
    //Bien dung chung

    $("#config-btn").addEventListener("click", function (e) {
      let inputList = $$(`form.${web.ConfigState} .input-field input`); //danh sach input tuong ung voi config-state
      e.preventDefault();

      let flag = 0;

      for (let input of inputList) {
        if (input.value == "") {
          if (!web.validate(input, input.dataset.constraint))
            //ktra xem dữ liệu trống đó có bắt buộc ko
            web.IsValidate = false;
        }
      }

      //if (!(flag && web.IsValidate)) web.IsValidate = true;

      web.inputArr = web.getInputData();
      if (web.IsValidate)
        switch (web.ConfigState) {
          case "add-config":
            web.addRow();
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
    });

    $(".config-modal-container").addEventListener("click", function (e) {
      e.stopPropagation();
      e.target.classList.add("close");

      let inputList = $$(`form.${web.ConfigState} .input-field input`);
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
        let inputList = $$(`form.${web.ConfigState} .input-field input`);
        for (let input of inputList) web.resetError(input);
        web.setConfigState(e.target);
        web.resetInputValue();
      });
    }

    for (let selectInput of $$(".select-input")) {
      let colData = [];
      selectInput.addEventListener("focus", function (e) {
        //Nếu dữ liệu cột nằm trong bảng của page thì ko cần gọi dữ liệu từ database
        if (
          selectInput.dataset.table == web.Table ||
          selectInput.dataset.table == undefined
        ) {
          colData = web.DataArr[web.Table].map((row) => {
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

    //Kiểm tra value ở input có valid hay ko
    for (let input of $$(`form.${web.ConfigState} .input-field input`)) {
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
    }

    //Bấm tắt Modal thông báo đã thêm thành công
    for (let item of $$(".alert-btn,.alert-container")) {
      item.addEventListener("click", function (e) {
        //get data and render data again
        web.getData(web.Table).then((value) => {
          web.DataArr[web.Table] = value;
          web.render(web.DataArr[web.Table], web.Table);
          web.RenderArr = web.DataArr[web.Table];
          //tắt alert modal đi
          $(".alert-container").classList.add("close");
          $(".config-modal-container:not(close)").classList.add("close");

          //set lại state cho modal
          web.setConfigState($(".nav-item.add-config"));
          web.resetInputValue();
        });
      });
    }

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
              if (Object.getOwnPropertyNames(value[0])[0] == "COLUMN_NAME") {
                //Neu key cua dong tien la column_name => bang kco du lieu nao
                let obj = {};
                for (let item of value) obj[Object.values(item)[0]] = undefined;
                web.DataArr[web.Table] = [obj];
              } else web.DataArr[web.Table] = value;

              $(".list-sidebar.active").classList.remove("active");
              item.classList.add("active");
              //web.handleChangeTable();

              web.render(web.DataArr[web.Table], web.Table);
              web.RenderArr = web.DataArr[web.Table];
              web.renderSearchingOptions();
              web.renderInputForm();
            });
          //do bat dong bo nen phai lap code
          else {
            $(".list-sidebar.active").classList.remove("active");
            item.classList.add("active");
            //web.handleChangeTable();

            web.render(web.DataArr[web.Table], web.Table);
            web.RenderArr = web.DataArr[web.Table];
            web.renderSearchingOptions();
            web.renderInputForm();
          }
        }
      });
    }

    // $(".delete-form input").addEventListener("keyup", function (e) {
    //   let id = e.target.name;
    //   let val = e.target.value;

    //   //get 1 row data from Promise get data
    //   web.getData(web.Table, id, val).then((value) => {
    //     web.renderConfirmLists(value);
    //   });
    // });

    for (let item of $$(".order-option i")) {
      item.addEventListener("click", function (e) {
        for (let item of $$(".order-option i")) item.classList.remove("active");

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
      //Neu Bang chua co dong du lieu nao
      if (Object.getOwnPropertyNames(value[0])[0] == "COLUMN_NAME") {
        //Neu key cua dong tien la column_name => bang kco du lieu nao
        let obj = {};
        for (let item of value) obj[Object.values(item)[0]] = undefined;
        web.DataArr[web.Table] = [obj];
      } else web.DataArr[web.Table] = value;

      web.render(web.DataArr[web.Table], web.Table);
      web.RenderArr = [web.Table];
      web.renderSearchingOptions();
      web.renderInputForm();
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
    setting.addEventListener("click", function() {
      formSetting.classList.toggle("close");
    })
   
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
