$(".edit-user-boxx").hide();
var editCount=0;
$(".edit-please").click(function(){
        editCount++;
        if(editCount==1){
                $(".edit-user-boxx").show();
        }else{
                $(".edit-user-boxx").hide();
                editCount=0;
        }
        
});
$(".edit-complete").click(function(){
        $(".edit-user-boxx").hide();
});


$("#not-all-score").hide();
$("#nav-all-score").css("color","#95969D");
$("#nav-all-score").css("border-bottom","#3px solid #F6F7FB");
$("#nav-all-score").click(function(){
        console.log("all-score");
        $("#not-all-score").hide();
        $("#all-score").show();
        $("#nav-all-score").css("color","#17181A");
        $("#nav-all-score").css("border-bottom","#3px solid #FF5B16");
        $("#nav-not-all-score").css("color","#95969D");
        $("#nav-not-all-score").css("border-bottom","#3px solid #F6F7FB");
});
$("#nav-not-all-score").click(function(){
        console.log("not-all-score");
        $("#all-score").hide();
        $("#not-all-score").show();
        $("#nav-not-all-score").css("color","#17181A");
        $("#nav-not-all-score").css("border-bottom","#3px solid #FF5B16");
        $("#nav-all-score").css("color","#95969D");
        $("#nav-all-score").css("border-bottom","#3px solid #F6F7FB");
});


