/**
 * Created by Administrator on 2016/10/20 0020.
 */
$(function(){
    var temp = 0;
    var click_temp = -1;
    var isClick = false;
    $(".star .glyphicon").on({
        mouseover: function(){
            $(".star .glyphicon").attr("class", "glyphicon glyphicon-star-empty");
            temp = $(this).index() + 1;
            $(".star .glyphicon:lt("+temp+")").attr("class","glyphicon glyphicon-star");
        },
        mouseout: function () {
                $(".star .glyphicon").attr("class", "glyphicon glyphicon-star-empty");
            if(isClick) {
                $(".star .glyphicon:lt("+click_temp+")").attr("class", "glyphicon glyphicon-star");
            }
        },
        click: function(){
            click_temp = $(this).index() + 1;
            isClick = true;
        }
    });
});