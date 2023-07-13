//전체 함수 그래프 높이 설정
// const dd = $("#test").attr('name');
// console.log(dd);
// const allScoreDataValues = dd //맞춘 수
const allScoreDataValues = [1, 2, 3, 4, 5, 6];
const allScoreGraphViews = document.querySelectorAll('#all-score-body');

if (allScoreGraphViews.length > 0) {
  // 데이터 값에 따라 높이를 조정
  allScoreGraphViews.forEach(function(allScoreGraphView, index) {
    const allScoreDataValue = allScoreDataValues[index]; // 해당 요소에 대응하는 데이터 값
    allScoreGraphView.style.height = `${(450 / 9) * allScoreDataValue}px`; // 데이터 값을 픽셀 단위로 높이로 설정
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
    notAllScoreGraphView.style.height = `${(450 / 5) * notAllScoreDataValue}px`; // 데이터 값을 픽셀 단위로 높이로 설정
  });
  //마지막 그래프 색깔 변경
  const notAllScoreLastScoreGraphView = notAllScoreGraphViews[notAllScoreGraphViews.length - 1];
  notAllScoreLastScoreGraphView.style.backgroundColor = '#FF5B16';
}