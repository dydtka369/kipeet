function validateForm() {
    const emailInput = document.querySelector('input[name="email"]');
    const emailValue = emailInput.value;
    const emailPattern = /\S+@\S+\.\S+/;
    if (!emailPattern.test(emailValue)) {
      alert('유효한 이메일 주소가 아닙니다.');
      return false;
    }
    const passwordInput = document.querySelector('input[name="loginPw"]');
    const passwordValue = passwordInput.value;
    const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(passwordValue)) {
      alert('비밀번호는 8자 이상, 영문과 숫자가 포함되어야 합니다.');
      return false;
    }
    const passwordConfirmInput = document.querySelector('input[name="loginPwConfirm"]');
    const passwordConfirmValue = passwordConfirmInput.value;
    if (passwordValue !== passwordConfirmValue) {
      alert('비밀번호 확인이 일치하지 않습니다.');
      return false;
    }
    return true;
  }