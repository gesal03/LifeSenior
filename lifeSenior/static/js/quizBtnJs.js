$(".quiz-select-btn").click(function(){
    var pk = $(this).attr('name')
    var text = $(this).attr('value')
    $.ajax({ // .like 버튼을 클릭하면 <새로고침> 없이 ajax로 서버와 통신하겠다.
        type: "POST", // 데이터를 전송하는 방법을 지정
        url: "{% url 'quizApp:solveQuiz' %}", // 통신할 url을 지정
        data: {'pk': pk, 'text': text, 'csrfmiddlewaretoken': '{{ csrf_token }}'}, // 서버로 데이터 전송시 옵션
        dataType: "json", // 서버측에서 전송한 데이터를 어떤 형식의 데이터로서 해석할 것인가를 지정, 없으면 알아서 판단
        // 서버측에서 전송한 Response 데이터 형식 (json)
        // {'likes_count': post.like_count, 'message': message }
        success: function(response){ // 통신 성공시 - 동적으로 좋아요 갯수 변경, 유저 목록 변경
            console.log("success")
        },
        error: function(request, status, error){ // 통신 실패시 - 로그인 페이지 리다이렉트  
            console.log("fail")
        },
    });
})