window.Kakao.init('0850eafbca907dd881e8620df6f527ac');

    function kakaoLogin() {
        window.Kakao.Auth.login({
            scope: 'profile_image,account_email,gender', //동의항목 페이지에 있는 개인정보 보호 테이블의 활성화된 ID값을 넣습니다.
            success: function(response) {
                console.log(response) // 로그인 성공하면 받아오는 데이터
                window.Kakao.API.request({ // 사용자 정보 가져오기 
                    url: '/v2/user/me',
                    success: (res) => {
                        const kakao_account = res.kakao_account;
                        console.log(kakao_account)
                    }
                });
                window.location.href='http://127.0.0.1:5500/kakaoindex.html' //리다이렉트 되는 코드
                // window.location.href='http://192.168.4.43:5500/kakaoindex.html'
            },
            fail: function(error) {
                console.log(error);
            }
        });
        
    }

function secession() {
	Kakao.API.request({
    	url: '/v1/user/unlink',
    	success: function(response) {
    		console.log(response);
    		// callback(); //연결끊기(탈퇴)성공시 서버에서 처리할 함수
    		window.location.href='/'
    	},
    	fail: function(error) {
    		console.log('탈퇴 미완료')
    		console.log(error);
    	},
	});
};


    