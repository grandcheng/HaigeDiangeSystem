/**
 * Created by Administrator on 2016/10/19 0019.
 */
$(function(){
    $(".list-group-item").click(function(){
        if($(this).children("span").hasClass("glyphicon-ok-circle")){
            $(".list-group-item span").removeClass("glyphicon-ok-sign");
            $(".list-group-item span").addClass("glyphicon-ok-circle");
            $(this).children("span").removeClass("glyphicon-ok-circle");
            $(this).children("span").addClass("glyphicon-ok-sign");
        }
    });
});