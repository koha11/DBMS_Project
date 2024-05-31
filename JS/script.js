const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const web = {
  DataArr: {}, // Mảng nhận các bản ghi lấy đc từ db
  RenderArr: [], // Mảng nhận các bản ghi đang được render ra màn hình
  inputObj: {}, // Mảng chứa các cặp key và value hiện có trong input-modal
  Table: $('#content-table').dataset.table,
  ConfigState: 'add', // Trạng thái hiện tại của config modal
  IsValidate: true,
  IsTitleRendered: false,
  Role: '',
  flagStorage: [],
  setRole: (role) => {
    switch (role) {
      case 'admin':
        web.Role = 'admin';
        break;
    }
  },
  // Hàm render bảng (ndung chính của trang web)
  render: (DataArr, option) => {
    let htmls = '';
    let flag = web.IsTitleRendered;

    web.renderCountText(); //đếm
    web.renderNoteText();

    if (web.Table == 'BILL')
      //Bỏ ẩn check btn của bill
      $('#sub-config').classList.remove('close');

    if (web.Table == 'TIMETABLE') {
      // Bỏ ẩn tìm kiếm theo tháng + năm của timetable
      $('.date-option-container').classList.remove('close');
      $('.valid-TB-btn').classList.remove('close');
    }

    if (web.Table != $('#content-table').dataset.table) {
      if ($('#content-table').dataset.table == 'BILL')
        $('#sub-config').classList.add('close');

      if ($('#content-table').dataset.table == 'TIMETABLE') {
        $('.date-option-container').classList.add('close');
        $('.valid-TB-btn').classList.add('close');
      }

      $('#content-table').dataset.table = web.Table;
      flag = false;
      web.IsTitleRendered = false; //reset lai trang thai da render title hay chua
    }

    switch (option) {
      case 'STUDENT':
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

      case 'COURSE':
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
          <div class="content-table-head table-col table-title fl-3 flex-box" name="COURSE_NAME">
            <div class="">Course Name</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_TYPE">
            <div class="">Type</div>
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
          <div class="content-table-head table-col table-title fl-3 flex-box" name="COURSE_FEE">
          <div class="">Fee</div>
          <div class="order-option flex-box">
            <i class='bx bxs-up-arrow' data-order='asc'></i>
            <i class='bx bxs-down-arrow' data-order='desc'></i>
          </div>
          </div>  
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_METHOD">
            <div class="">Method</div>
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
              <div class="content-table-head table-col fl-3" name="${
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
              <div class="content-table-head table-col fl-2" name="${
                keyArr[5]
              }">${obj[keyArr[5]] ? 'Offline' : 'Online'}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });

        htmls += `</div>`;
        break;

      case 'TEACHER':
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
            <div class="content-table-head table-col table-title fl-1 flex-box" name="TR_NATION">
              <div class=""><i class="fa-solid fa-flag"></i></div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-1 flex-box" name="TR_GENDER">
              <div class=""><i class="fa-solid fa-venus-mars"></i></div>
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

            <div class="content-table-head table-col table-title fl-1 flex-box" name="TR_DEGREE">
              <div class=""><i class="fa-solid fa-graduation-cap"></i></div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-1 flex-box" name="IELTS_OVERALL">
              <div class="">Ielts</div>
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
              <div class="content-table-head table-col fl-1" name="${
                keyArr[2]
              }">${obj[keyArr[2]]}</div>
              <div class="content-table-head table-col fl-1" name="${
                keyArr[3]
              }">${obj[keyArr[3]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[4]
              }">${obj[keyArr[4]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[5]
              }">${obj[keyArr[5]]}</div>
              <div class="content-table-head table-col fl-3" name="${
                keyArr[6]
              }">${obj[keyArr[6]]}</div>
              <div class="content-table-head table-col fl-3" name="${
                keyArr[7]
              }">${obj[keyArr[7]]}</div>
              <div class="content-table-head table-col fl-1" name="${
                keyArr[8]
              }">${obj[keyArr[8]]}</div>
              <div class="content-table-head table-col fl-1" name="${
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

      case 'CLASS':
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
            <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASS_ID">
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

        DataArr.forEach((obj) => {
          if (obj != undefined && Object.values(obj)[0] != undefined) {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-2" name="${
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
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case 'TIMETABLE':
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
            <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASS_ID">
              <div class="">Class ID</div>
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
              <div class="period-detail">
                ?
                <div class="period-detail-modal">
                  <ul>
                    <li>Period 1: 7h30 -> 9h00</li>
                    <li>Period 2: 9h30 -> 11h00</li>
                    <li>Period 3: 13h00 -> 14h30</li>
                    <li>Period 4: 15h00 -> 16h30</li>
                    <li>Period 5: 17h30 -> 19h00</li>
                    <li>Period 6: 19h30 -> 21h00</li>
                  </ul>
                </div>
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

        DataArr.forEach((obj) => {
          if (obj != undefined && Object.values(obj)[0] != undefined) {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
                <div class="content-table-head table-col fl-2" name="${
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
                <div class="content-table-head table-col fl-2" name="${
                  keyArr[4]
                }">${obj[keyArr[4]]}</div>
                <div class="config-btn-container">
                  <i class='bx bxs-edit-alt'data-config="update"></i>
                  <i class='bx bx-x' data-config="delete"></i>
                </div>
              </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case 'RESULT':
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
            <div class="content-table-head table-col table-title fl-2 flex-box" name="STUDENT_ID">
              <div class="">Student ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASS_ID">
              <div class="">Class ID</div>
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
            <div class="content-table-head table-col table-title fl-2 flex-box" name="SPEAKING">
              <div class="">Speaking</div>
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

        DataArr.forEach((obj) => {
          if (obj != undefined && Object.values(obj)[0] != undefined) {
            let keyArr = Object.keys(obj);
            htmls += `<div class="table-row">
              <div class="content-table-head table-col fl-2" name="${
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
              <div class="content-table-head table-col fl-2" name="${
                keyArr[4]
              }">${obj[keyArr[4]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[5]
              }">${obj[keyArr[5]]}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[6]
              }">${obj[keyArr[6]]}</div>
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case 'CLASS_DETAIL':
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
            <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASS_ID">
              <div class="">ID</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_START">
              <div class="">Date Start</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_END">
              <div class="">Date End</div>
              <div class="order-option flex-box">
                <i class='bx bxs-up-arrow' data-order='asc'></i>
                <i class='bx bxs-down-arrow' data-order='desc'></i>
              </div>
            </div>
            <div class="content-table-head table-col table-title fl-2 flex-box" name="LESSONS">
              <div class="">Lessons</div>
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
              <div class="content-table-head table-col fl-2" name="${
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
              <div class="config-btn-container">
                <i class='bx bxs-edit-alt'data-config="update"></i>
                <i class='bx bx-x' data-config="delete"></i>
              </div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;

      case 'BILL':
        if (!flag) {
          // tránh render lại title
          flag = true; //Da render tieu de roi
          htmls += `<div class="table-row title-row">
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
              }">${obj[keyArr[3]] == 1 ? 'Banking' : 'Cash'}</div>
              <div class="content-table-head table-col fl-2" name="${
                keyArr[4]
              }">${obj[keyArr[4]]}</div>
            </div>`;
          }
        });
        htmls += `</div>`;
        break;
    }

    let table = $('#content-table');

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
    $('.sidebar').style.height = $('.main-content').scrollHeight + 'px';
  },
  // Hàm render options list dựa trên bảng đang đc tham chiếu
  renderOptionLists: () => {
    // render danh sách những lựa chọn theo key để tìm kiếm
    for (let selectInput of $$('.select-input')) {
      //để hàm riêng đi: not done yet
      selectInput.addEventListener('focus', function (e) {
        let htmls = '';
        let table = selectInput.dataset.table;
        let distinctArr = [];

        //Nếu dữ liệu cột nằm trong bảng của page thì ko cần gọi dữ liệu từ database
        if (web.DataArr[table]) {
          // Bảng đã có dữ liệu thì ko cần gửi request cho db
          web.DataArr[table].forEach((row) => {
            if (row[selectInput.name] != undefined)
              if (!selectInput.name.includes('ID')) {
                // Nếu nó chưa có dữ nào thì đừng render
                //case datalist tháng năm của timetable
                let isSame = distinctArr.find(
                  (data) => data == row[selectInput.name]
                );

                if (!isSame) {
                  //Nếu ko bị trùng thì render ra html và bỏ vào mảng
                  distinctArr.push(row[selectInput.name]);
                  htmls += `<option value="${row[selectInput.name]}"></option>`;
                }
              } else
                htmls += `<option value="${row[selectInput.name]}"></option>`;
          });

          selectInput
            .closest('.input-field')
            .querySelector('datalist').innerHTML = htmls;
        } else {
          web.getData(table).then((value) => {
            web.handleChangeTable(value, table, false); // tiền xử lí dữ liệu nếu bảng kco hàng nào
            web.DataArr[table].forEach((row) => {
              if (row[selectInput.name] != undefined)
                // Nếu nó chưa có dữ nào thì đừng render
                htmls += `<option value="${row[selectInput.name]}"></option>`;
            });

            web.DataArr[table] = value;

            selectInput
              .closest('.input-field')
              .querySelector('datalist').innerHTML = htmls;
          });
        }
      });
    }
  },
  //Hàm render ra những lựa chọn để có thể chọn khi tìm kiếm
  renderSearchingOptions: () => {
    //render danh sách option của thanh tìm kiếm
    let htmls = '';

    for (let col in web.DataArr[web.Table][0])
      if (col != 'CLASS_MONTH' && col != 'CLASS_YEAR')
        htmls += `<option value="${col}">${col}</option>`;

    $('.searching-option').innerHTML = htmls;
  },
  //Hàm render input form
  renderInputForm: () => {
    let dataArr = web.DataArr[web.Table];

    //Khởi tạo header cho modal
    let htmls = `
      <div class="modal-header">
        ${web.ConfigState == 'add' ? 'ADD ROW MODAL' : 'UPDATE ROW MODAL'}
      </div>`;

    // Khởi tạo form add và update
    let addConfig = `<form class="modal-body flex-box config-form" data-config="add">`;
    let updateConfig = `<form class="modal-body flex-box config-form" data-config="update">`;
    for (let key in dataArr[0]) {
      let message = '';
      let title = '';
      let constraint = '';

      //them constraints
      if (key.includes('ID')) {
        if (key.slice(0, key.length - 3) != web.Table)
          constraint = 'subid,required,noSpecialChar';
        else constraint = 'id,required,noSpecialChar';
      }
      if (key.includes('NAME')) constraint = 'required,noSpecialChar,noNumber';
      if (key.includes('PHONE')) constraint = 'required,phone';
      if (key.includes('EMAIL')) constraint = 'required,email';
      if (key.includes('DATE')) constraint = 'required';

      if (!constraint) constraint = 'required';

      //them title voi msg
      switch (web.Table) {
        case 'STUDENT':
          {
            if (key.includes('ID')) {
              title = `Student ID`;
              message = `Example: "ST0, ST1, ..."`;
            }

            if (key.includes('NAME')) {
              title = `Student Name`;
              message = `Example: "Trần Anh Khoa"`;
            }

            if (key.includes('PHONE')) {
              title = `Student Phone`;
              message = `Example: "0702455222, +8472455222"`;
            }

            if (key.includes('EMAIL')) {
              title = `Student Email`;
              message = `Example: "student@gmail.com"`;
            }

            if (key.includes('ADDRESS')) {
              title = `Student Address`;
              message = `Example: "01 Nguyễn Đình Chiểu, Nha Trang, Khánh Hòa"`;
            }

            if (key.includes('GENDER')) {
              title = `Student Gender`;
              message = `Example: "Nam, Nữ, Khác"`;
            }

            if (key.includes('DATE')) {
              title = `Student Date`;
              message = `Example: "dd/mm/yyyy"`;
            }
          }
          break;

        case 'TEACHER':
          {
            if (key.includes('ID')) {
              title = `Teacher ID`;
              message = `Example: "ST0, ST1, ..."`;
            }

            if (key.includes('NAME')) {
              title = `Teacher Name`;
              message = `Example: "Trần Anh Khoa"`;
            }

            if (key.includes('NATION')) {
              title = `Teacher Nation`;
              message = `Example: "Vietnam"`;
            }

            if (key.includes('PHONE')) {
              title = `Teacher Phone`;
              message = `Example: "0702455222, +8472455222"`;
            }

            if (key.includes('EMAIL')) {
              title = `Teacher Email`;
              message = `Example: "Teacher@gmail.com"`;
            }

            if (key.includes('ADDRESS')) {
              title = `Teacher Address`;
              message = `Example: "01 Nguyễn Đình Chiểu, Nha Trang, Khánh Hòa"`;
            }

            if (key.includes('GENDER')) {
              title = `Teacher Gender`;
              message = `Example: "Nam, Nữ, Khác"`;
            }

            if (key.includes('DATE')) {
              title = `Student Date`;
              message = `Example: "dd/mm/yyyy"`;
            }

            if (key.includes('DEGREE')) {
              title = `Degree`;
              message = `Example: "master"`;
            }

            if (key == 'IELTS_OVERALL') {
              title = `Ielts Overall`;
              message = `Example: "8.5"`;
            }

            if (key == '...') {
              title = `Student Date`;
              message = `Example: "Undergraduate, master, ..."`;
            }
          }
          break;

        case 'COURSE':
          {
            if (key.includes('ID')) {
              title = `Course ID`;
              message = `Example: "C0, C1, ..."`;
            }

            if (key.includes('NAME')) {
              title = `Course Name`;
              message = `Example: "Trần Anh Khoa"`;
            }

            if (key.includes('FEE')) {
              title = `Course Fee`;
              message = `Example: "10000000"`;
            }

            if (key.includes('TYPE')) {
              title = `Course Type`;
              message = `Example: "Junior"`;
            }

            if (key.includes('LEVEL')) {
              title = `Course Level`;
              message = `Example: "Basic"`;
            }

            if (key.includes('METHOD')) {
              title = `Course Method`;
              message = `Example: "Online - Offline"`;
            }
          }
          break;

        case 'CLASS':
          {
            if (key.includes('CLASS_ID')) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes('COURSE_ID')) {
              title = `Course ID`;
              message = `Example: "C0, C1, ..."`;
            }
            if (key.includes('TEACHER_ID')) {
              title = `Teacher ID`;
              message = `Example: "T1, T2, ..."`;
            }
            if (key.includes('CLASSROOM')) {
              title = `Classroom`;
              message = `Example: "P100, P201, ..."`;
            }
          }
          break;

        case 'TIMETABLE':
          {
            if (key.includes('CLASS_ID')) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
              constraint = 'ids,subid,required,noSpecialChar';
            }
            if (key.includes('WEEKLYDAY')) {
              title = `Weeklyday`;
              message = `Example: "2, 3, ..."`;
              constraint = 'ids,required';
            }
            if (key.includes('DAYPERIOD')) {
              title = `Dayperiod`;
              message = `Example: "1, 2, ..."`;
              constraint = 'ids,required';
            }
          }
          break;

        case 'RESULT':
          {
            if (key.includes('CLASS_ID')) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
              constraint = 'ids,subid,required,noSpecialChar';
            }
            if (key.includes('STUDENT_ID')) {
              title = `Student ID`;
              message = `Example: "2, 3, ..."`;
              constraint = 'ids,subid,required,noSpecialChar';
            }
            if (key.includes('SPEAKING')) {
              title = `Speaking`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes('LISTENING')) {
              title = `Listening`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes('READING')) {
              title = `Reading`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes('WRITING')) {
              title = `Writing`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;

        case 'CLASS_DETAIL':
          {
            if (key.includes('CLASS_ID')) {
              title = `Class ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes('DATE_START')) {
              title = `Date Start`;
              message = `Example: "2, 3, ..."`;
            }
            if (key.includes('DATE_END')) {
              title = `Date End`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes('LESSONS')) {
              title = `Lessons`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;

        case 'BILL':
          {
            if (key.includes('BILL_ID')) {
              title = `Bill ID`;
              message = `Example: "CL0, CL1, ..."`;
            }
            if (key.includes('STUDENT_ID')) {
              title = `Student ID`;
              message = `Example: "2, 3, ..."`;
            }
            if (key.includes('DATE_P')) {
              title = `Date Payment`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes('METHOD_P')) {
              title = `Method Payment`;
              message = `Example: "1, 2, ..."`;
            }
            if (key.includes('PAYMENT')) {
              title = `Payment`;
              message = `Example: "1, 2, ..."`;
            }
          }
          break;
      }

      if (
        (web.Table == 'TIMETABLE' &&
          (key == 'COURSE_ID' ||
            key == 'CLASSROOM' ||
            key == 'CLASS_MONTH' ||
            key == 'CLASS_YEAR')) || //mấy cái col này ko thuộc bảng timetable
        (web.Table == 'RESULT' && key == 'OVERALL')
      )
        continue;

      if (constraint.includes('subid')) {
        //Thêm datalist
        addConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <input id="A-${key}" name="${key}" list="list-${key}" type="${
          key.includes('DATE') ? 'date' : 'text'
        }" class="fl-2 select-input" data-constraint="${constraint}" data-table="${key.slice(
          0,
          key.length - 3
        )}">
            <datalist id="list-${key}"></datalist>
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;

        if (key.includes('ID'))
          updateConfig += `<div class="input-field flex-box">                      
            <div class="flex-box input-container">
              <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
              <input id="U-${key}" name="${key}" value="${web.inputObj[key]}" type="text" class="fl-2" data-constraint="" readonly>
            </div>
            <span class="message ">${message}</span>
            <span class="message error"></span>
          </div>`;
        else
          updateConfig += `<div class="input-field flex-box">                      
            <div class="flex-box input-container">
              <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
              <input id="U-${key}" name="${key}" list="list-${key}" value="${
            web.inputObj[key]
          }" type="${
            key.includes('DATE') ? 'date' : 'text'
          }" class="fl-2 select-input" data-constraint="${constraint}" data-table="${key.slice(
            0,
            key.length - 3
          )}">
              <datalist id="list-${key}"></datalist>
            </div>
            <span class="message ">${message}</span>
            <span class="message error"></span>
          </div>`;
      } else if (key.includes('GENDER')) {
        addConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <div class="radio-input-field flex-box fl-2">
              <input id="r1-${key}" name="${key}" type="radio" value="Male" class="fl-2" checked>
              <label for="r1-${key}">Male</label>
              <input id="r2-${key}" name="${key}" type="radio" value="Female" class="fl-2">
              <label for="r2-${key}">Female</label>
              <input id="r3-${key}" name="${key}" type="radio" value="Other" class="fl-2">
              <label for="r3-${key}">Other</label>
            </div>            
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;

        updateConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <div class="radio-input-field flex-box fl-2">
              <input id="r1-${key}" name="${key}" type="radio" value="Male" class="fl-2" checked>
              <label for="r1-${key}">Male</label>
              <input id="r2-${key}" name="${key}" type="radio" value="Female" class="fl-2">
              <label for="r2-${key}">Female</label>
              <input id="r3-${key}" name="${key}" type="radio" value="Other" class="fl-2">
              <label for="r3-${key}">Other</label>
            </div>            
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;
      } else {
        //kco datalist
        addConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <input id="A-${key}" name="${key}" type="${
          key.includes('DATE') ? 'date' : 'text'
        }" class="fl-2" data-constraint="${constraint}">
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;

        //ID update thì set readonly
        updateConfig += `<div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="U-${key}" name="configInputLabel" class="fl-1">${title}</label>
            <input id="U-${key}" name="${key}" value="${
          web.inputObj[key]
        }" type="${
          key.includes('DATE') ? 'date' : 'text'
        }" class="fl-2" data-constraint="${
          key.includes('ID') ? '' : constraint
        }" ${key.includes('ID') ? 'readonly' : ''}>
          </div>
          <span class="message ">${message}</span>
          <span class="message error"></span>
        </div>`;
      }
    }
    addConfig += `</form>`;
    updateConfig += `</form>`;

    if (web.ConfigState == 'add')
      htmls =
        htmls +
        addConfig +
        `<div class="modal-footer flex-box">
          <button id="config-btn" class="form-btn btn">
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

    $('.config-modal').innerHTML = htmls;
    $('.config-modal-container:not(.small)').classList.remove('close');

    web.handleSubmitForm();
    web.renderOptionLists();
    web.handleValidInput();
  },
  //Hàm render small input form
  renderSmallInputForm: () => {
    let htmls = `<form class="modal-body flex-box config-form" data-config="add">`;
    if (web.Table == 'BILL') {
      htmls += `
        <div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="A-st_id" name="configInputLabel" class="fl-1">Student ID</label>
            <input id="A-st_id" list="list-Bill" name="STUDENT_ID" type="text" class="fl-2 select-input" data-constraint="subid,required" data-table = "STUDENT">
            <datalist id="list-Bill"></datalist>
          </div>
          <span class="message "></span>
          <span class="message error"></span>
        </div>

        <div class="input-field flex-box">                      
          <div class="flex-box input-container">
            <label for="" name="configInputLabel" class="fl-1">Method Payment</label>
            <div class="radio-input-field flex-box fl-2">
              <input id="r1" name="METHOD_P" type="radio" value="1" class="fl-2" checked>
              <label for="r1">Banking</label>
              <input id="r2" name="METHOD_P" type="radio" value="0" class="fl-2">
              <label for="r2">Cash</label>                      
            </div>                                
          </div>
          <span class="message "></span>
          <span class="message error"></span>
        </div>
      </form>`;
    } else {
      htmls += `<div class="input-field flex-box">                      
      <div class="flex-box input-container">
        <label for="A-st_id_res" name="configInputLabel" class="fl-1">Student ID</label>
        <input id="A-st_id_res" list="list-result-st" name="STUDENT_ID" type="text" class="fl-2 select-input" data-constraint="ids,subid,required" data-table = "STUDENT">
        <datalist id="list-result-st"></datalist>
      </div>
      <span class="message"></span>
      <span class="message error"></span>
    </div>

    <div class="input-field flex-box">                      
      <div class="flex-box input-container">
        <label for="A-cl_id" name="configInputLabel" class="fl-1">Class ID</label>
        <input id="A-cl_id" list="list-result-cl" name="CLASS_ID" type="text" class="fl-2 select-input" data-constraint="ids,subid,required" data-table = "CLASS">                    
        <datalist id="list-result-cl"></datalist>
      </div>
      <span class="message "></span>
      <span class="message error"></span>
    </div></form>`;
    }

    htmls += `
      <div class="modal-footer flex-box">
        <button id="config-btn" class="form-btn btn" data-handle="">
          <i class="icon-footer fa-solid fa-check"></i>
          Save
        </button>
      </div>`;

    $('.config-modal-container.small .config-modal').innerHTML = htmls;
    $('.config-modal-container.small').classList.remove('close');
    web.handleSubmitForm();
    web.renderOptionLists();
    web.handleValidInput();
  },
  //Hàm render alert confirm box
  renderConfirmAlert: () => {
    let msg = '';
    if (web.ConfigState == 'add') {
      msg = 'Do you want to add row?';
    } else if (web.ConfigState == 'update') {
      msg = 'Do you want to update row?';
    } else {
      msg = 'Do you want to delete row?';
    }

    let htmls = `<div class="alert-box flex-box">
      <div class="alert-message">${msg}</div>
      <div class="btn-container flex-box">
        <div class="alert-btn cancel-btn btn">CANCEL</div>
        <div class="alert-btn confirm-btn btn">YES</div>
      </div>
    </div>`;
    $('.alert-container').innerHTML = htmls;
    $('.alert-container').classList.remove('close');
    web.handleAlertChoose();
  },
  //Hàm render username
  renderUserName: () => {
    let usernameText = $$('.username-text');

    for (let text of usernameText)
      text.innerText = sessionStorage.getItem('name');
  },
  //Hàm render ra bảng check student (0 là in ra bảng đang nợ, 1 là in ra bảng đã nợ hơn 7 ngày và có muốn xóa ko)
  renderCheckBillList: (dataObj, option = 0) => {
    let htmls = '';
    if (option == 0) {
      $('.config-modal-container:not(.small)').classList.add('check');

      htmls = `<div class="check-header">CHECK BILL</div>
      <div class="check-body">
        <div class="table-row title-row">
          <div class="content-table-head table-col table-title fl-2 flex-box" name="STUDENT_ID">
            <div class="name-col">ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_NAME">
            <div class="name-col">Name</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASS_ID">
            <div class="name-col">Class ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_ID">
            <div class="name-col">Course ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_FEE">
            <div class="name-col">Course Fee</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_START">
            <div class="name-col">Date Start</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>                
        </div>`;
      let keyArr = Object.keys(dataObj[0]);
      for (let obj of dataObj) {
        if (obj[keyArr[0]] != undefined)
          htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-2" name="${
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
            <div class="content-table-head table-col fl-2" name="${
              keyArr[4]
            }">${obj[keyArr[4]]}</div>
            <div class="content-table-head table-col fl-2" name="${
              keyArr[5]
            }">${obj[keyArr[5]]}</div>              
          </div>`;
      }

      htmls += `</div><div class="check-footer btn">
        Remove Student over 7 Day out the class
      </div>`;
      $('.config-modal-container.check .config-modal').innerHTML = htmls;
      $('.config-modal-container.check').classList.remove('close');
      web.handleClickDBill();
    } else {
      htmls = `<div class="check-header">CHECK BILL</div>
      <div class="check-body">
        <div class="table-row title-row">
          <div class="content-table-head table-col table-title fl-2 flex-box" name="STUDENT_ID">
            <div class="name-col">ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="ST_NAME">
            <div class="name-col">Name</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="CLASS_ID">
            <div class="name-col">Class ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_ID">
            <div class="name-col">Course ID</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="COURSE_FEE">
            <div class="name-col">Course Fee</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>
          <div class="content-table-head table-col table-title fl-2 flex-box" name="DATE_START">
            <div class="name-col">Date Start</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div> 
          <div class="content-table-head table-col table-title fl-2 flex-box" name="TODAY">
            <div class="name-col">Today</div>
            <div class="order-option flex-box">
              <i class='bx bxs-up-arrow' data-order='asc'></i>
              <i class='bx bxs-down-arrow' data-order='desc'></i>
            </div>
          </div>                 
        </div>`;
      let keyArr = Object.keys(dataObj[0]);
      for (let obj of dataObj) {
        if (obj[keyArr[0]] != undefined)
          htmls += `<div class="table-row">
            <div class="content-table-head table-col fl-2" name="${
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
            <div class="content-table-head table-col fl-2" name="${
              keyArr[4]
            }">${obj[keyArr[4]]}</div>
            <div class="content-table-head table-col fl-2" name="${
              keyArr[5]
            }">${obj[keyArr[5]]}</div>     
            <div class="content-table-head table-col fl-2" name="${
              keyArr[5]
            }">${obj[keyArr[6]]}</div>           
          </div>`;
      }

      htmls += `</div><div class="check-footer">
        Thông tin những học sinh đã xóa
      </div>`;
      $('.config-modal-container.check .config-modal').innerHTML = htmls;
    }
  },
  //Hàm render ra thống kê số lượng bản ghi
  renderCountText: () => {
    let total = web.DataArr[web.Table].length;
    let now = 0;
    web.RenderArr.forEach((row) => {
      if (row != undefined) now++;
    });

    let htmls = `Table Overview <span class="table-sub-text">(${now} of ${total})</span>`;
    $('.overview').innerHTML = htmls;
  },
  //Hàm render loading bg
  renderLoading: (signal) => {
    let container = $('.loading-container');
    if (signal) {
      container.classList.add('close');
    } else {
      container.classList.remove('close');
    }
  },
  renderNoteText: () => {
    let objects = $$('.note_obj');
    let note = '';
    for (let object of objects) {
      object.addEventListener('mouseover', function (e) {
        let classStr = object.classList.value;
        if (classStr.includes('valid-TB-btn'))
          note =
            'Nút này dùng để in ra thời khóa biểu của những lớp chưa kết thúc';

        let htmls = `
          <div class="object-note-text">
            ${note}
          </div>`;

        object.innerHTML = htmls;
      });

      object.addEventListener('mouseout', function (e) {
        object.innerHTML = '';
      });
    }
  },
  //Hàm lấy tất cả bản ghi của 1 bảng từ db
  //async function return Promise => dùng then() để xử lí
  getData: async (tableName) =>
    await new Promise((resolve) => {
      let xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
      xmlhttp.onreadystatechange = function () {
        //bat dong bo, onload se cham hon so voi cac code khac
        if (this.readyState != 4) {
          web.renderLoading(0);
        }
        if (this.readyState == 4 && this.status == 200) {
          web.renderLoading(1);
          console.log(this.responseText);
          let data = JSON.parse(this.responseText);
          if (data.length == 0)
            web.getKeys(tableName).then((keys) => resolve(keys));
          else resolve(data);
        }
      };
      xmlhttp.open(
        'GET',
        `https://qlttta-api-server.onrender.com/${tableName}`
      ); //trhop lay DL thi dung get
      xmlhttp.send();
    }),

  getKeys: async (tableName) =>
    await new Promise((resolve) => {
      let xmlhttp = new XMLHttpRequest(); // khoi tao xmlhttp
      xmlhttp.onreadystatechange = function () {
        //bat dong bo, onload se cham hon so voi cac code khac
        if (this.readyState != 4) {
          web.renderLoading(0);
        }
        if (this.readyState == 4 && this.status == 200) {
          web.renderLoading(1);
          console.log(this.responseText);
          resolve(JSON.parse(this.responseText));
        }
      };
      xmlhttp.open(
        'GET',
        `https://qlttta-api-server.onrender.com/${tableName}/keys`
      ); //trhop lay DL thi dung get
      xmlhttp.send();
    }),
  // Hàm thêm bản ghi vào bảng
  addRow: () => {
    web.renderLoading(0);
    let dataObj = web.inputObj;

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open(
      'POST',
      `https://qlttta-api-server.onrender.com/${web.Table}/create`
    );

    xmlhttp.setRequestHeader('Content-type', 'application/json');

    xmlhttp.onreadystatechange = function () {
      //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        web.renderLoading(1);
        web.getData(web.Table).then((value) => {
          web.handleChangeTable(value);
          web.resetInputValue();

          $('.alert-container').classList.add('close');
          for (let container of $$('.config-modal-container'))
            container.classList.add('close');
        });
      }
    };
    xmlhttp.send(JSON.stringify(dataObj));
  },
  // Hàm cập nhật lại nội dung của bản ghi
  updateRow: async () => {
    web.renderLoading(0);
    let dataObj = web.getInputData();

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open(
      'POST',
      `https://qlttta-api-server.onrender.com/${web.Table}/update`
    );
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    xmlhttp.onreadystatechange = function () {
      //Call a function when the state changes.
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        web.renderLoading(1);
        //gọi lại dữ liệu và render lại
        web.getData(web.Table).then((value) => {
          web.handleChangeTable(value);
          web.resetInputValue();

          // Đóng form và alert box
          $('.alert-container').classList.add('close');
          $('.config-modal-container:not(.small)').classList.add('close');
        });
      }
    };
    xmlhttp.send(`${JSON.stringify(dataObj)}`);
  },
  // Hàm xóa 1 bản ghi
  deleteRow: (dataObj) => {
    web.renderLoading(0);

    const xmlhttp = new XMLHttpRequest();
    xmlhttp.open(
      'POST',
      `https://qlttta-api-server.onrender.com/${web.Table}/delete`
    );
    xmlhttp.setRequestHeader('Content-type', 'application/json');
    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        web.renderLoading(1);
        //Call a function when the state changes.
        //gọi lại dữ liệu và render lại
        web.getData(web.Table).then((value) => {
          //xử lí chuyển bảng
          web.handleChangeTable(value);
          //tắt alert box
          $('.alert-container').classList.add('close');
        });
      }
    };

    xmlhttp.send(JSON.stringify(dataObj));
  },
  getCountryData: () => {
    let data = fetch('https://restcountries.com/v3.1/all');
    data.then((value) => {
      web.flagStorage = value.map((country) => {
        return country.cioc;
      });
    });
  },
  // Hàm reset giá trị của input
  resetInputValue: () => {
    let inputs = $$('input');
    for (const input of inputs) {
      input.value = '';
    }
  },
  // Hàm reset hiển thị lỗi của input
  resetError: (input) => {
    let inputField = input.closest('.input-field');
    input.classList.remove('error');
    inputField.querySelector('span.error').innerText = '';
    inputField
      .querySelector('span.message:not(.error)')
      .classList.remove('close');

    web.IsValidate = true; // reset valid state của form
  },
  // Hàm validate dữ liệu của input
  validate: (input, types) => {
    if (input.getAttribute('type') == 'radio')
      //radio thì ko cần validate
      return;
    types = types.split(','); // tách các type thành mảng
    let inputField = input.closest('.input-field');
    let isValidate = true;
    let errorMsg = '';
    let errorElm = inputField.querySelector('span.error');
    input.value = input.value.trim();

    //Lý do để Promise bên ngoài là vì, hàm lấy cột trả về Promise nếu ko để mọi t/hop trong .then() thì sẽ xảy ra bất đồng bộ
    for (let type of types) {
      switch (type) {
        case 'id': {
          for (let row of web.DataArr[web.Table]) {
            if (row[input.name] == undefined) break;

            if (input.value === row[input.name]) {
              errorMsg = 'Id đã tồn tại';
              isValidate = false;
              break;
            }
          }
          break;
        }

        case 'ids':
          {
            errorMsg = '';
            isValidate = true;

            let inputs = input
              .closest('.config-form')
              .querySelectorAll('input[data-constraint*="ids"]');
            let obj = {};

            for (let input of inputs) obj[input.name] = input.value;

            for (let row of web.DataArr[web.Table]) {
              if (row[input.name] == undefined)
                // Bang kco du lieu thi break
                break;

              let flag = false; // xac dinh trang thai ban dau la bi trung` PK
              for (let key in obj) {
                if (obj[key] == '') return;
                if (obj[key] != row[key]) flag = true; // ko bi trung` PK
              }

              if (!flag) {
                // Neu bi trung` thi break
                errorMsg = 'Id da ton tai';
                isValidate = false;
                break;
              }
            }
          }
          break;

        case 'subid': {
          errorMsg = 'Sub ID không tồn tại';
          isValidate = false;

          if (web.DataArr[input.dataset.table])
            for (let row of web.DataArr[input.dataset.table]) {
              if (
                row[input.name] != undefined &&
                input.value === row[input.name]
              ) {
                errorMsg = '';
                isValidate = true;
                break;
              }
            }
          break;
        }

        case 'phone': {
          let regex = /^(0|\+84)\d{9}$/;
          if (!input.value.match(regex)) {
            errorMsg = 'Số điện thoại không hợp lệ!';
            isValidate = false;
          }
          break;
        }
        case 'email': {
          let regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!input.value.toLowerCase().match(regex)) {
            errorMsg = 'Email không hợp lệ!';
            isValidate = false;
          }
          break;
        }
        case 'required': {
          if (input.value.trim() == '') {
            errorMsg = 'Dữ liệu này không được để trống';
            isValidate = false;
            break;
          }
          break;
        }
        case 'noSpecialChar': {
          let specialChar = '!@#$%^&*()+=-[]\\\';,./{}|":<>?';
          for (let ch of input.value) {
            if (specialChar.indexOf(ch) != -1) {
              errorMsg = 'Không được phép nhập ký tự đặc biệt';
              isValidate = false;
              break;
            }
          }
          break;
        }
        case 'noNumber': {
          for (let ch of input.value) {
            if (!isNaN(Number(ch)) && ch != ' ') {
              errorMsg = 'Không được phép nhập ký tự số';
              isValidate = false;
              break;
            }
          }
        }
      }

      if (!isValidate)
        //neu sai roi thi ko can xet cac constraint khac nua
        break;
    }

    if (!isValidate) {
      inputField
        .querySelector('span.message:not(.error)')
        .classList.add('close');
      input.classList.add('error');
      errorElm.innerText = errorMsg;
    } else {
      if (input.dataset.constraint.includes('ids')) {
        let inputs = input
          .closest('.config-form')
          .querySelectorAll('input[name*="_ID"]');
        for (let input of inputs) web.resetError(input);
      } else web.resetError(input);
    }

    return isValidate;
  },
  // Hàm lấy value từ input đang tồn tại (tiền xử lí dữ liệu)
  getInputData: () => {
    let dataObj = {};

    let inputList = $$(
      `.config-modal-container:not(.close) form.config-form .input-field input`
    ); //danh sach input tuong ung voi config-state

    for (let input of inputList) {
      if (input.getAttribute('type') == 'radio')
        dataObj[input.name] = input.checked ? input.value : dataObj[input.name];
      else {
        dataObj[input.name] = input.value.trim();
      }
    }

    return dataObj;
  },
  // Hàm tìm kiếm 1/nhiều bản ghi dựa trên 1 cột nào đó (duyệt qua mảng)
  findData: () => {
    let foundDataArr = web.DataArr[web.Table];
    let option = $('.searching-option').value;
    let condition = $('.searching-input').value.toLowerCase();

    foundDataArr = foundDataArr.map((row) => {
      //duyệt qua mảng dữ liệu chính
      if (
        row[option] != undefined &&
        row[option].toLowerCase().startsWith(condition)
      )
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
          if (option == 'asc') {
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
      '.config-btn-container .bx-x,.config-btn-container .bxs-edit-alt'
    );

    for (let btn of configBtns) {
      btn.addEventListener('click', function (e) {
        let row = btn.closest('.table-row');
        let id = row.children[0].innerText; // Lấy ra ID

        if (btn.dataset.config == 'delete') {
          //Neu click xoa
          let key = Object.keys(web.DataArr[web.Table][0]).find((item) =>
            item.includes('ID')
          ); //lấy ra key name của ID
          web.inputObj = { [key]: id };
          web.ConfigState = 'delete';
          web.renderConfirmAlert();
        } else {
          for (let item of row.children) {
            web.inputObj[item.getAttribute('name')] = item.innerText;
            switch (web.inputObj[item.getAttribute('name')]) {
              case 'Offline':
              case 'Banking':
                web.inputObj[item.getAttribute('name')] = 1;
                break;
              case 'Online':
              case 'Cash':
                web.inputObj[item.getAttribute('name')] = 0;
                break;
            }
          }
          // Đưa dữ liệu ban đầu (trước khi update) vào Input Obj để bên config modal có thể đưa
          // những dữ liệu này hiển thị bên update modal

          web.ConfigState = 'update';
          web.renderInputForm();
          $('.config-modal-container:not(.small)').classList.remove('close');
        }
      });
    }
  },
  // Xử lí 2 lựa chọn Cancel / Yes của alert box
  handleAlertChoose: () => {
    let cancel = $('.alert-box .cancel-btn');
    let yes = $('.alert-box .confirm-btn');

    cancel.addEventListener('click', function (e) {
      $('.alert-container').classList.add('close');
    });

    yes.addEventListener('click', function (e) {
      if ($('.check')) web.handleCheckBill(0);
      else if (web.ConfigState == 'add') web.addRow();
      else if (web.ConfigState == 'update') web.updateRow();
      else {
        let dataObj = {};

        let keys = Object.keys(web.inputObj).filter(
          (col) => col.includes('ID') // lay ids de xoa hang
        );

        keys.forEach((key) => (dataObj[key] = web.inputObj[key]));

        web.deleteRow(dataObj);
      }
    });
  },
  // Xử lí submit form
  handleSubmitForm: () => {
    $('#config-btn').addEventListener('click', function (e) {
      console.log('1');
      let inputList = $$(
        `.config-modal-container:not(.close) form .input-field input[data-constraint]`
      ); //danh sach input tuong ung voi config-state
      e.preventDefault();

      for (let input of inputList) {
        if (input.value == '') {
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
    for (let item of $$('.order-option i')) {
      item.addEventListener('click', function (e) {
        if (item.classList.contains('active')) {
          //Nếu click order option đang active (hủy sort)
          item.classList.remove('active');
          //render lại theo mảng gốc ban đầu
          web.render(web.DataArr[web.Table], web.Table);
        } else {
          for (let item of $$('.order-option i'))
            item.classList.remove('active');

          let col = item.closest('.table-title');

          item.classList.add('active');
          web.render(
            web.sortData(
              web.RenderArr,
              col.getAttribute('name'),
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
    console.log(value);
    web.DataArr[table] = value.map((rawRow) => {
      console.log(rawRow);
      let finishRow = rawRow;
      if (typeof finishRow == 'object')
        for (let key in finishRow) {
          if (key.toLowerCase().includes('date'))
            finishRow[key] = finishRow[key].slice(0, 10);
        }

      return finishRow;
    });
    if (isRender) {
      $('input[name=main_searching]').value = '';
      web.RenderArr = web.DataArr[web.Table];
      web.render(web.DataArr[web.Table], web.Table);
      web.renderSearchingOptions();
    }
  },
  // Hàm chạy event kiểm tra validate cho input
  handleValidInput: () => {
    //Kiểm tra value ở input có valid hay ko --> tach ham`
    for (let input of $$(
      `.config-modal-container:not(.close) form.config-form .input-field input[data-constraint]`
    )) {
      input.addEventListener(
        'focusout',
        function (
          e //blur
        ) {
          web.IsValidate = web.validate(input, input.dataset.constraint);
        }
      );

      //khi đang tdoi du lieu trong input thì sẽ phải cài về như trc khi có lỗi
      input.addEventListener(
        'keydown',
        function (
          e //blur
        ) {
          web.resetError(input);
        }
      );

      input.addEventListener(
        'focusin',
        function (
          e //blur
        ) {
          web.resetError(input);
        }
      );
    }
  },
  // Hàm xử lý event check HS nợ học phí hoặc xóa những HS đó
  handleCheckBill: (option = 1) => {
    if (!web.DataArr.CHECK_BILL)
      web.getData('bill/check', option).then((value) => {
        let dataObj = value.length == 0 ? [{}] : value;
        if (option == 1) {
          web.DataArr.CHECK_BILL = dataObj;
          web.renderCheckBillList(dataObj);
        } //Xóa
        else {
          $('.alert-container').classList.add('close');
          web.renderCheckBillList(dataObj, 1);
        }
      });
    else {
      let value =
        web.DataArr.CHECK_BILL.length == 0 ? [{}] : web.DataArr.CHECK_BILL;
      if (option == 1) {
        web.DataArr.CHECK_BILL = value;
        web.renderCheckBillList(value);
      } //Xóa
      else {
        $('.alert-container').classList.add('close');
        web.renderCheckBillList(value, 1);
      }
    }
  },
  //Hàm xử lí khi click xóa học sinh
  handleClickDBill: () => {
    $('.check-footer.btn').addEventListener('click', function (e) {
      if (web.DataArr.CHECK_BILL[0].STUDENT_ID) web.renderConfirmAlert();
    });
  },
  //Hàm tìm TKB theo tháng/năm
  handleFindTB: () => {
    let month = $('.date-option-container input[name=CLASS_MONTH]').value;
    let year = $('.date-option-container input[name=CLASS_YEAR]').value;

    let dataArr = web.DataArr.TIMETABLE;

    let foundArr = dataArr.map((row) => {
      if (month == '' && year == '') {
        return row;
      }
      if (month == '') {
        if (row.CLASS_YEAR == year) return row;
      } else if (year == '') {
        if (row.CLASS_MONTH == month) return row;
      } else if (row.CLASS_MONTH == month && row.CLASS_YEAR == year) return row;
    });

    web.RenderArr = foundArr;
    web.render(web.RenderArr, 'TIMETABLE');
  },
  restartHandleEvents: () => {
    web.handleConfigRow();
  },

  handleEvents: () => {
    //Bien dung chung

    // Xử lí tắt modal
    for (let container of $$('.config-modal-container'))
      container.addEventListener('click', function (e) {
        e.stopPropagation();
        e.target.classList.add('close');
        e.target.classList.remove('check');

        let inputList = $$(`form .input-field input`);
        for (let input of inputList) web.resetError(input);

        //web.setConfigState($(".nav-item.add-config"));
        web.resetInputValue();
      });

    for (let modal of $$('.modal')) {
      modal.addEventListener('click', function (e) {
        e.stopPropagation();
      });
    }

    // Mở add modal
    $('#table-config').addEventListener('click', function (e) {
      web.ConfigState = 'add';
      if (web.Table == 'BILL' || web.Table == 'RESULT') {
        web.renderSmallInputForm();
      } else {
        web.renderInputForm();
      }
    });

    //Xử lí tìm kiếm dữ liệu trên searching bar
    $('.searching-input[name=main_searching]').addEventListener(
      'keyup',
      function (e) {
        web.findData();
      }
    );

    //Xử lí tìm kiếm thei tháng + năm của TB
    $('.date-search-btn').addEventListener('click', function (e) {
      web.handleFindTB();
    });

    //Ngăn chặn hvi mđịnh từ alert-container
    $('.alert-box').addEventListener('click', function (e) {
      e.stopPropagation();
    });

    //xu li chuyen bang
    for (let item of $$('.list-sidebar')) {
      item.addEventListener('click', function (e) {
        if (item.dataset.table != web.Table) {
          web.Table = item.dataset.table;

          if (!web.DataArr[web.Table])
            //Nếu bảng này chưa đc gửi request bao giờ thì gửi request
            web.getData(web.Table).then((value) => {
              //Neu Bang chua co dong du lieu nao
              web.handleChangeTable(value);

              //Kích hoạt active cho table-nav vừa mới click
              $('.list-sidebar.active').classList.remove('active');
              item.classList.add('active');
            });
          //do bat dong bo nen phai lap code
          else {
            // Bảng đã có -> Không cần gửi request lại
            $('.list-sidebar.active').classList.remove('active');
            item.classList.add('active');

            web.RenderArr = web.DataArr[web.Table];
            web.render(web.RenderArr, web.Table);
            web.renderSearchingOptions();
          }
        }
      });
    }

    // Bam btn check bill
    $('#sub-config').addEventListener('click', function (e) {
      web.handleCheckBill();
    });

    // Xử lí click refresh
    $('.sub-btn-container .refresh-btn').addEventListener(
      'click',
      function (e) {
        web.getData(web.Table).then((value) => {
          web.handleChangeTable(value);
        });
      }
    );

    let menu = $('.icon-menu');
    let sidebar = $('.sidebar');
    let lists = $('.content-sidebar');
    let name_sidebar = $('.name-sidebar');
    let settingBtn = $('.icon-arrow-down');
    let settingModal = $('.setting-modal');

    //Mo logout modal
    settingBtn.addEventListener('click', function (e) {
      e.stopPropagation();
      settingModal.classList.toggle('close');
    });

    // bam vo modal ko tat
    settingModal.addEventListener('click', function (e) {
      e.stopPropagation();
    });

    //Bam ra ngoai modal thi tat modal
    $('.view').addEventListener('click', function (e) {
      if (!settingModal.classList.contains('close'))
        settingModal.classList.add('close');
    });

    //infor

    //logout
    $('.logout-btn').addEventListener('click', function (e) {
      window.sessionStorage.clear();
      window.location.href = 'https://qlttta.onrender.com/';
    });

    // Thay đổi icon menu sidebar
    sidebar
      .querySelector('.sidebar-menu i')
      .addEventListener('click', function (e) {
        e.target.classList.toggle('fa-times');
      });

    menu.addEventListener('click', function () {
      sidebar.classList.toggle('sidebar-width');
      let delayTime = lists.classList.contains('close') ? 200 : 120;
      setTimeout(() => {
        name_sidebar.classList.toggle('close');
        lists.classList.toggle('close');
      }, delayTime);
    });
  },
  start: () => {
    web.setRole(window.sessionStorage.role);
    web.renderUserName();
    web.getData(web.Table).then((value) => {
      console.log(value);
      web.handleChangeTable(value);
      web.handleEvents();
      web.renderOptionLists();
    });
  },
};

web.start();
// noneTables.start();

/*SH!T NOTES
 */
