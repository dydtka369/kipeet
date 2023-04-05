
function loginCheck(){
    let frmLogin = document.frmLogin;
    let email = document.getElementById('txtEmail').value;

    if(email == "") {
        alert("등록하신 이메일을 입력해주세요");
    }else {
        frmLogin.submit();
    }
}
