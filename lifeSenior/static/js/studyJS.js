//답 버튼 하나만
const buttons = document.querySelectorAll('.quiz-box-content-quizBtn button');

  buttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // 다른 버튼들에서 .active 클래스 제거
      buttons.forEach(function(btn) {
        btn.classList.remove('answeractive');
      });

      // 클릭된 버튼에 .active 클래스 추가
      button.classList.add('answeractive');
    });
});



//오늘 날짜 가져오기
var currentDate = new Date();
var month = currentDate.getMonth() + 1; 
var day = currentDate.getDate();
var dateText = month+"월 "+day+"일";
$("#speech-bubble-content-date2").text(dateText);


//문제 종류 버튼 하나만
const kindbuttons = document.querySelectorAll('.quiz-box-content-nav p');

window.addEventListener('DOMContentLoaded', function() {
  // 첫 번째 submit 버튼에 active 클래스 추가
  kindbuttons[0].classList.add('kindactive');
});

kindbuttons.forEach(function(button) {
    button.addEventListener('click', function() {
      // 다른 버튼들에서 .active 클래스 제거
      kindbuttons.forEach(function(btn) {
        btn.classList.remove('kindactive');
      });

      // 클릭된 버튼에 .active 클래스 추가
      button.classList.add('kindactive');
    });
});



//quiz slide
  var currentIndex = 0;
  $("#box-1").show();
  $("#box-2").hide();
  $("#box-3").hide();
  $("#box-4").hide();
  $("#box-5").hide();
  $("#box-6").hide();
  $("#box-7").hide();
  $('.study-next-btn').click(function() {
    ++currentIndex;
    console.log(currentIndex);
    if (currentIndex == 7) {
      currentIndex = 0; 
    }
    if(currentIndex == 0){
      $("#box-1").show();
      $("#box-2").hide();
      $("#box-3").hide();
      $("#box-4").hide();
      $("#box-5").hide();
      $("#box-6").hide();
      $("#box-7").hide();
      $("#p-1").css("border-bottom","4px solid #FF5B16");
      $("#p-1").css("color","#17181A");
      $("#p-2").css("border-bottom","4px solid #F6F7FB");
      $("#p-2").css("color","#95969D");
      $("#p-3").css("border-bottom","4px solid #F6F7FB");
      $("#p-3").css("color","#95969D");
      $("#p-4").css("border-bottom","4px solid #F6F7FB");
      $("#p-4").css("color","#95969D");
      $("#p-5").css("border-bottom","4px solid #F6F7FB");
      $("#p-5").css("color","#95969D");
      $("#p-6").css("border-bottom","4px solid #F6F7FB");
      $("#p-6").css("color","#95969D");
      $("#p-7").css("border-bottom","4px solid #F6F7FB");
      $("#p-7").css("color","#95969D");
    }
    if(currentIndex == 1){
      $("#box-1").hide();
      $("#box-2").show();
      $("#box-3").hide();
      $("#box-4").hide();
      $("#box-5").hide();
      $("#box-6").hide();
      $("#box-7").hide();
      $("#p-2").css("border-bottom","4px solid #FF5B16");
      $("#p-2").css("color","#17181A");
      $("#p-1").css("border-bottom","4px solid #F6F7FB");
      $("#p-1").css("color","#95969D");
      $("#p-3").css("border-bottom","4px solid #F6F7FB");
      $("#p-3").css("color","#95969D");
      $("#p-4").css("border-bottom","4px solid #F6F7FB");
      $("#p-4").css("color","#95969D");
      $("#p-5").css("border-bottom","4px solid #F6F7FB");
      $("#p-5").css("color","#95969D");
      $("#p-6").css("border-bottom","4px solid #F6F7FB");
      $("#p-6").css("color","#95969D");
      $("#p-7").css("border-bottom","4px solid #F6F7FB");
      $("#p-7").css("color","#95969D");
    }
    if(currentIndex == 2){
      $("#box-1").hide();
      $("#box-2").hide();
      $("#box-3").show();
      $("#box-4").hide();
      $("#box-5").hide();
      $("#box-6").hide();
      $("#box-7").hide();
      $("#p-3").css("border-bottom","4px solid #FF5B16");
      $("#p-3").css("color","#17181A");
      $("#p-2").css("border-bottom","4px solid #F6F7FB");
      $("#p-2").css("color","#95969D");
      $("#p-1").css("border-bottom","4px solid #F6F7FB");
      $("#p-1").css("color","#95969D");
      $("#p-4").css("border-bottom","4px solid #F6F7FB");
      $("#p-4").css("color","#95969D");
      $("#p-5").css("border-bottom","4px solid #F6F7FB");
      $("#p-5").css("color","#95969D");
      $("#p-6").css("border-bottom","4px solid #F6F7FB");
      $("#p-6").css("color","#95969D");
      $("#p-7").css("border-bottom","4px solid #F6F7FB");
      $("#p-7").css("color","#95969D");
    }
    if(currentIndex == 3){
      $("#box-1").hide();
      $("#box-2").hide();
      $("#box-3").hide();
      $("#box-4").show();
      $("#box-5").hide();
      $("#box-6").hide();
      $("#box-7").hide();
      $("#p-4").css("border-bottom","4px solid #FF5B16");
      $("#p-4").css("color","#17181A");
      $("#p-2").css("border-bottom","4px solid #F6F7FB");
      $("#p-2").css("color","#95969D");
      $("#p-3").css("border-bottom","4px solid #F6F7FB");
      $("#p-3").css("color","#95969D");
      $("#p-1").css("border-bottom","4px solid #F6F7FB");
      $("#p-1").css("color","#95969D");
      $("#p-5").css("border-bottom","4px solid #F6F7FB");
      $("#p-5").css("color","#95969D");
      $("#p-6").css("border-bottom","4px solid #F6F7FB");
      $("#p-6").css("color","#95969D");
      $("#p-7").css("border-bottom","4px solid #F6F7FB");
      $("#p-7").css("color","#95969D");
    }
    if(currentIndex == 4){
      $("#box-1").hide();
      $("#box-2").hide();
      $("#box-3").hide();
      $("#box-4").hide();
      $("#box-5").show();
      $("#box-6").hide();
      $("#box-7").hide();
      $("#p-5").css("border-bottom","4px solid #FF5B16");
      $("#p-5").css("color","#17181A");
      $("#p-2").css("border-bottom","4px solid #F6F7FB");
      $("#p-2").css("color","#95969D");
      $("#p-3").css("border-bottom","4px solid #F6F7FB");
      $("#p-3").css("color","#95969D");
      $("#p-4").css("border-bottom","4px solid #F6F7FB");
      $("#p-4").css("color","#95969D");
      $("#p-1").css("border-bottom","4px solid #F6F7FB");
      $("#p-1").css("color","#95969D");
      $("#p-6").css("border-bottom","4px solid #F6F7FB");
      $("#p-6").css("color","#95969D");
      $("#p-7").css("border-bottom","4px solid #F6F7FB");
      $("#p-7").css("color","#95969D");
    }
    if(currentIndex == 5){
      $("#box-1").hide();
      $("#box-2").hide();
      $("#box-3").hide();
      $("#box-4").hide();
      $("#box-5").hide();
      $("#box-6").show();
      $("#box-7").hide();
      $("#p-6").css("border-bottom","4px solid #FF5B16");
      $("#p-6").css("color","#17181A");
      $("#p-2").css("border-bottom","4px solid #F6F7FB");
      $("#p-2").css("color","#95969D");
      $("#p-3").css("border-bottom","4px solid #F6F7FB");
      $("#p-3").css("color","#95969D");
      $("#p-4").css("border-bottom","4px solid #F6F7FB");
      $("#p-4").css("color","#95969D");
      $("#p-5").css("border-bottom","4px solid #F6F7FB");
      $("#p-5").css("color","#95969D");
      $("#p-1").css("border-bottom","4px solid #F6F7FB");
      $("#p-1").css("color","#95969D");
      $("#p-7").css("border-bottom","4px solid #F6F7FB");
      $("#p-7").css("color","#95969D");
    }
    if(currentIndex == 6){
      $("#box-1").hide();
      $("#box-2").hide();
      $("#box-3").hide();
      $("#box-4").hide();
      $("#box-5").hide();
      $("#box-6").hide();
      $("#box-7").show();
      $("#p-7").css("border-bottom","4px solid #FF5B16");
      $("#p-7").css("color","#17181A");
      $("#p-2").css("border-bottom","4px solid #F6F7FB");
      $("#p-2").css("color","#95969D");
      $("#p-3").css("border-bottom","4px solid #F6F7FB");
      $("#p-3").css("color","#95969D");
      $("#p-4").css("border-bottom","4px solid #F6F7FB");
      $("#p-4").css("color","#95969D");
      $("#p-5").css("border-bottom","4px solid #F6F7FB");
      $("#p-5").css("color","#95969D");
      $("#p-6").css("border-bottom","4px solid #F6F7FB");
      $("#p-6").css("color","#95969D");
      $("#p-1").css("border-bottom","4px solid #F6F7FB");
      $("#p-1").css("color","#95969D");
    }
  });

  $("#p-1").click(function(){
    $("#box-1").show();
    $("#box-2").hide();
    $("#box-3").hide();
    $("#box-4").hide();
    $("#box-5").hide();
    $("#box-6").hide();
    $("#box-7").hide();
  });
  $("#p-2").click(function(){
    $("#box-1").hide();
    $("#box-2").show();
    $("#box-3").hide();
    $("#box-4").hide();
    $("#box-5").hide();
    $("#box-6").hide();
    $("#box-7").hide();
  });
  $("#p-3").click(function(){
    $("#box-1").hide();
    $("#box-2").hide();
    $("#box-3").show();
    $("#box-4").hide();
    $("#box-5").hide();
    $("#box-6").hide();
    $("#box-7").hide();
    console.log("3성공");
  });
  $("#p-4").click(function(){
    $("#box-1").hide();
    $("#box-2").hide();
    $("#box-3").hide();
    $("#box-4").show();
    $("#box-5").hide();
    $("#box-6").hide();
    $("#box-7").hide();
    console.log("3성공");
  });
  $("#p-5").click(function(){
    $("#box-1").hide();
    $("#box-2").hide();
    $("#box-3").hide();
    $("#box-4").hide();
    $("#box-5").show();
    $("#box-6").hide();
    $("#box-7").hide();
    console.log("3성공");
  });
  $("#p-6").click(function(){
    $("#box-1").hide();
    $("#box-2").hide();
    $("#box-3").hide();
    $("#box-4").hide();
    $("#box-5").hide();
    $("#box-6").show();
    $("#box-7").hide();
    console.log("3성공");
  });
  $("#p-7").click(function(){
    $("#box-1").hide();
    $("#box-2").hide();
    $("#box-3").hide();
    $("#box-4").hide();
    $("#box-5").hide();
    $("#box-6").hide();
    $("#box-7").show();
    console.log("3성공");
  });
var quizBoxes = $('.quiz-change-box');
// 각 버튼의 너비 설정
quizBoxes.each(function() {
  var quizBtnContainer = $(this).find('.quiz-box-content-quizBtn');
  var quizBtns = quizBtnContainer.find('button');
  var btnCount = quizBtns.length;
  var btnWidth = quizBtnContainer.width() / btnCount;
  quizBtns.css('width', btnWidth + 'px');
});




//난이도 눌렀을 때 새로고침 위치 변화 방지
function handleScrollPosition(event) {
  event.preventDefault();

  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  sessionStorage.setItem('scrollPosition', scrollPosition);

  var href = event.currentTarget.getAttribute('href');
  setTimeout(function() {
    window.location.href = href;
  }, 0);
}

window.onload = function() {
  var scrollPosition = sessionStorage.getItem('scrollPosition');

  if (scrollPosition) {
    window.scrollTo(0, scrollPosition);
    sessionStorage.removeItem('scrollPosition');
  }
};



//전체 함수 그래프 높이 설정
const allScoreDataValues = [2, 4, 3, 2, 3, 6, 0]; //맞춘 수
const allScoreGraphViews = document.querySelectorAll('#all-score-body');

if (allScoreGraphViews.length > 0) {
  // 데이터 값에 따라 높이를 조정
  allScoreGraphViews.forEach(function(allScoreGraphView, index) {
    const allScoreDataValue = allScoreDataValues[index]; // 해당 요소에 대응하는 데이터 값
    allScoreGraphView.style.height = `${(638 / 6) * allScoreDataValue}px`; // 데이터 값을 픽셀 단위로 높이로 설정
  });
  //마지막 그래프 색깔 변경
  const allScoreLastScoreGraphView = allScoreGraphViews[allScoreGraphViews.length - 1];
  allScoreLastScoreGraphView.style.backgroundColor = '#FF5B16';
}


//항목별 점수 그래프 높이 설정
const notAllScoreDataValues = [2, 4, 5, 2, 3, 2, 4]; //맞춘 수
const notAllScoreGraphViews = document.querySelectorAll('#not-all-score-body');

if (notAllScoreDataValues.length > 0) {
  // 데이터 값에 따라 높이를 조정
  notAllScoreGraphViews.forEach(function(notAllScoreGraphView, index) {
    const notAllScoreDataValue = notAllScoreDataValues[index]; // 해당 요소에 대응하는 데이터 값
    notAllScoreGraphView.style.height = `${(638 / 5) * notAllScoreDataValue}px`; // 데이터 값을 픽셀 단위로 높이로 설정
  });
  //마지막 그래프 색깔 변경
  const notAllScoreLastScoreGraphView = notAllScoreGraphViews[notAllScoreGraphViews.length - 1];
  notAllScoreLastScoreGraphView.style.backgroundColor = '#FF5B16';
}


// //그래프 하나만 보이게
// $("#not-all-score").hide();
// $("#nav-all-score").css("border-bottom", "3px solid #FF5B16");
// $("#nav-all-score").css("color","#17181A");
// $(".not-all-score-conatiner-text-second").hide();
// $(".not-all-score-container-footer-text").hide();

// $("#nav-all-score").click(function(){
//   $("#all-score").show();
//   $("#not-all-score").hide();
//   $("#nav-all-score").css("border-bottom", "3px solid #FF5B16");
//   $("#nav-all-score").css("color","#17181A");
//   $("#nav-not-all-score").css("border-bottom", "3px solid #F6F7FB");
//   $("#nav-not-all-score").css("color","#95969D");

//   $(".not-all-score-conatiner-text-second").hide();
//   $(".not-all-score-container-footer-text").hide();
//   $(".score-container-text-second").show();
//   $(".score-container-text-third").show();
//   $(".score-container-footer-text").show();
//   $(".quiz-note").show();
//   $(".check").show();
// });
// $("#nav-not-all-score").click(function(){
//   $("#not-all-score").show();
//   $("#all-score").hide();
//   $("#nav-not-all-score").css("border-bottom", "3px solid #FF5B16");
//   $("#nav-not-all-score").css("color","#17181A");
//   $("#nav-all-score").css("border-bottom", "3px solid #F6F7FB");
//   $("#nav-all-score").css("color","#95969D");

//   $(".not-all-score-conatiner-text-second").show();
//   $(".not-all-score-container-footer-text").show();
//   $(".score-container-text-second").hide();
//   $(".score-container-text-third").hide();
//   $(".score-container-footer-text").hide();
//   $(".quiz-note").hide();
//   $(".check").hide();
// });

// $("#current-situation").hide();

// $("#nav2-first").css("color","#F6F7FB");
// $("#nav2-first").click(function(){
//   $("#current-situation").hide();
//   $("#study-place").show();
//   $("#nav2-first").css("color","#F6F7FB");
//   $("#nav2-second").css("color","#95969D");
// });

// $("#nav2-second").click(function(){
//   $("#current-situation").show();
//   $("#study-place").hide();
//   $("#nav2-second").css("color","#F6F7FB");
//   $("#nav2-first").css("color","#95969D");
// });



// //난이도 버튼 클릭한 요소에만 색깔 변경
// const container = document.querySelector('.quiz-level-container');
// const submitButtons = container.querySelectorAll('.quiz-level-box');

// window.addEventListener('DOMContentLoaded', function() {
//   // 첫 번째 submit 버튼에 active 클래스 추가
//   submitButtons[0].classList.add('active');
// });

// submitButtons.forEach(function(button) {
//   button.addEventListener('click', function(event) {
//     const isActive = button.classList.contains('active');
    
//     submitButtons.forEach(function(btn) {
//       btn.classList.remove('active');
//     });

//     if (!isActive) {
//       button.classList.add('active');
//     }
//   });
// });

// container.addEventListener('click', function(event) {
//   const target = event.target;
//   const isButtonClick = target.closest('.quiz-level-box');

//   if (!isButtonClick) {
//     submitButtons.forEach(function(button) {
//       button.classList.remove('active');
//     });
//   }
// });

