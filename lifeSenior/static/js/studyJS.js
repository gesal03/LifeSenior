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
$(document).ready(function() {
  var currentIndex = 0;
  var quizBoxes = $('.quiz-change-box');

  // 초기에는 첫 번째 문제만 보이도록 설정
  quizBoxes.hide();
  quizBoxes.eq(currentIndex).show();

  // 다음 버튼 클릭 시 다음 문제 표시
  $('.study-next-btn').click(function() {
    // 현재 문제 숨기기
    quizBoxes.eq(currentIndex).hide();

    // 다음 문제 표시
    currentIndex++;
    if (currentIndex >= quizBoxes.length) {
      currentIndex = 0; // 마지막 문제일 경우 처음으로 돌아감
    }
    quizBoxes.eq(currentIndex).show();
  });

  // 각 버튼의 너비 설정
  quizBoxes.each(function() {
    var quizBtnContainer = $(this).find('.quiz-box-content-quizBtn');
    var quizBtns = quizBtnContainer.find('button');
    var btnCount = quizBtns.length;
    var btnWidth = quizBtnContainer.width() / btnCount;

    quizBtns.css('width', btnWidth + 'px');
  });
});



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



//전체 함수 그래프 높이 설정
const allScoreDataValues = [2, 4, 3, 2, 3, 6, 0]; //맞춘 수
const allScoreGraphViews = document.querySelectorAll('#all-score-body');

// 데이터 값에 따라 높이를 조정
allScoreGraphViews.forEach(function(allScoreGraphView, index) {
  const allScoreDataValue = allScoreDataValues[index]; // 해당 요소에 대응하는 데이터 값
  allScoreGraphView.style.height = `${(638 / 6) * allScoreDataValue}px`; // 데이터 값을 픽셀 단위로 높이로 설정
});
//마지막 그래프 색깔 변경
const allScoreLastScoreGraphView = allScoreGraphViews[allScoreGraphViews.length - 1];
allScoreLastScoreGraphView .style.backgroundColor = '#FF5B16';


//항목별 점수 그래프 높이 설정
const notAllScoreDataValues = [2, 4, 5, 2, 3, 2, 4]; //맞춘 수
const notAllScoreGraphViews = document.querySelectorAll('#not-all-score-body');

// 데이터 값에 따라 높이를 조정
notAllScoreGraphViews.forEach(function(notAllScoreGraphView, index) {
  const notAllScoreDataValue = notAllScoreDataValues[index]; // 해당 요소에 대응하는 데이터 값
  notAllScoreGraphView.style.height = `${(638 / 5) * notAllScoreDataValue}px`; // 데이터 값을 픽셀 단위로 높이로 설정
});
//마지막 그래프 색깔 변경
const notAllScoreLastScoreGraphView = notAllScoreGraphViews[notAllScoreGraphViews.length - 1];
notAllScoreLastScoreGraphView .style.backgroundColor = '#FF5B16';
