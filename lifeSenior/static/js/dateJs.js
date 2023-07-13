var today = new Date();
var month = today.getMonth() + 1;
var day = today.getDate();

var firstElement = document.querySelector('#score-graph-date-sixth');
firstElement.firstChild.textContent = month;
firstElement.lastChild.textContent = day;

var second = new Date(today);
second.setDate(today.getDate() - 1);
var secondMonth = second.getMonth() + 1;
var secondDay = second.getDate();

var secondElement = document.querySelector('#score-graph-date-fifth');
secondElement.firstChild.textContent = secondMonth;
secondElement.lastChild.textContent = secondDay;

var third = new Date(today);
third.setDate(today.getDate() - 2);
var thirdMonth = third.getMonth() + 1;
var thirdDay = third.getDate();

var thirdElement = document.querySelector('#score-graph-date-fourth');
thirdElement.firstChild.textContent = thirdMonth;
thirdElement.lastChild.textContent = thirdDay;

var fourth = new Date(today);
fourth.setDate(today.getDate() - 3);
var fourthMonth = fourth.getMonth() + 1;
var fourthDay = fourth.getDate();

var fourthElement = document.querySelector('#score-graph-date-third');
fourthElement.firstChild.textContent = fourthMonth;
fourthElement.lastChild.textContent = fourthDay;

var fifth = new Date(today);
fifth.setDate(today.getDate() - 4);
var fifthMonth = fifth.getMonth() + 1;
var fifthDay = fifth.getDate();

var fifthElement = document.querySelector('#score-graph-date-second');
fifthElement.firstChild.textContent = fifthMonth;
fifthElement.lastChild.textContent = fifthDay;

var sixth = new Date(today);
sixth.setDate(today.getDate() - 5);
var sixthMonth = sixth.getMonth() + 1;
var sixthDay = sixth.getDate();

var sixthElement = document.querySelector('#score-graph-date-first');
sixthElement.firstChild.textContent = sixthMonth;
sixthElement.lastChild.textContent = sixthDay;
