
function  check() {
    let month = parseInt(document.getElementById('month').value);
    let message;
    switch (month) {
        case 1:
            message = "có 31 ngày";
            break;
        case 2:
            message = "có 28 hoặc 29 ngày";
            break;
        case 3:
            message = "có 31 ngày";
            break;
        case 4:
            message = "có 30 ngày";
            break;
        case 5:
            message = "có 31 ngày";
            break;
        case 6:
            message = "có 30 ngày";
            break;
        case 7:
            message = "có 31 ngày";
            break;
        case 8:
            message = "có 30 ngày";
            break;
        case 9:
            message = "có 31 ngày";
            break;
        case 10:
            message = "có 30 ngày";
            break;
        case 11:
            message = "có 31 ngày";
            break;
        case 12:
            message = "có 30 ngày";
            break;
        default:
            message = "không hợp lệ!";
            break;
    }
    let result = document.getElementById('result');
    result.innerText = "Tháng "+ month +" " + message;
}
