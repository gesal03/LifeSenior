//conmunity-btn 클릭한 요소에만 색깔 변경
const container = document.querySelector('.container-community-btn');
const submitButtons = container.querySelectorAll('input[type="submit"]');

// submitButtons.forEach(function(button) {
//   button.addEventListener('click', function() {
//     submitButtons.forEach(function(btn) {
//       if (btn !== button) {
//         btn.classList.remove('active');
//       }
//     });
//     button.classList.toggle('active');
//   });
// });
submitButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    submitButtons.forEach(function(btn) {
      // btn.classList.remove('active');
    });
    button.classList.add('active');
  });
});


submitButtons[0].classList.add('active');
document.addEventListener('click', function(event) {
  const target = event.target;

  if (!target.matches('input[type="submit"]') && !container.contains(target)) {
    submitButtons.forEach(function(button) {
      button.classList.remove('active');
    });
  }
});

$(".quiz-correct-modal").hide();
$(".quiz-incorrect-modal").hide();
$(".quiz-overlay").hide();

$(".correctA").click(function(){
  console.log("ss");
  $(this).css("background-color","#FF5B16");
  $(this).css("color","#F6F7FB");
  $(".quiz-overlay").show();
  $(".quiz-correct-modal").show();
});
$(".incorrectA").click(function(){
  $(this).css("background-color","#FF5B16");
  $(this).css("color","#F6F7FB");
  $(".quiz-overlay").show();
  $(".quiz-incorrect-modal").show();
});

var quizSelectBox = $('#quiz-select-box');
var quizBtns = quizSelectBox.find('.quiz-select-btn');
var btnCount = quizBtns.length;
console.log(btnCount);
var btnWidth = quizSelectBox.width() / btnCount;
quizBtns.css('width', btnWidth + 'px');

