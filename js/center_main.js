window.onload=function(){
  $('.col_local_all a').click(function(e) {
    e.preventDefault();
    $('.localList2').hide();
    $('.all_center').animate({
      marginTop: 350
    },'fast')

  });
  
  $('.l').click(function(e) {
    e.preventDefault();
    $('.localList2').show();
    $('.all_center').animate({
      marginTop: 600
    },'fast')

  });
    $('.col_local>a').click(function() {
        $(this).attr('전체');
        $('.col_local>a').removeClass('selected');
        $(this).addClass('selected');  
      });
      $('.col_local2>a').click(function() {
        $('.col_local2>a').removeClass('selected');  
        $(this).addClass('selected');  
      });
      $('.col_local2>a').click(function() {
        $('.col_local2>a').removeClass('selected');
        $(this).addClass('selected');
       
      });
   
      // 지역 클릭 영역
        $('.col_local a').eq(1).on('click', function() {
          let localText = ['전체', '강남', '강동', '광진', '노원', '도봉'];
          $('.col_local2 a').each(function(index) {
            if (index <= 8) { 
              $(this).text(localText[index]);
              $(this).show();
            } else {
              $(this).hide();
            }
          });
        });
        
      $('.col_local a').eq(2).on('click', function() {
        var localText = ['전체', '해운대', '서면', '광안리'];
        $('.col_local2 a').each(function(index) {
          if (index <= 3) { 
            $(this).text(localText[index]);
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
      $('.col_local a').eq(3).on('click', function() {
        var localText = ['전체', '인천중구', '연수구', '강화도'];
        $('.col_local2 a').each(function(index) {
          if (index <= 3) { 
            $(this).text(localText[index]);
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
     
      $('.col_local a').eq(4).on('click', function() {
        $('.col_local2 a').each(function(index) {
          var localText = ['전체', '반곡동', '소담동', '보람동', '대평동'];
          if (index <= 4) { 
            $(this).text(localText[index]);
            $(this).show();
          } else {
            $(this).hide();
          }
        });
     
      });
      $('.col_local a').eq(5).on('click', function() {
        $('.col_local2 a').each(function(index) {
          var localText = ['전체', '수원','의정부', '부천','남양주'];
          if (index <= 4) { 
            $(this).text(localText[index]);
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
      $('.col_local a').eq(6).on('click', function() {
        $('.col_local2 a').each(function(index) {
          var localText = ['전체', '제주시', '서귀포시'];
          if (index <= 2) { 
            $(this).text(localText[index]);
            $(this).show();
          } else {
            $(this).hide();
          }
        });
      });
    // 지역 클릭 영역 끝
};