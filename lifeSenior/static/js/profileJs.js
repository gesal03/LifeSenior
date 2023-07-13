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