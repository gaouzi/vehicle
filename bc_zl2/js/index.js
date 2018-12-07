
$(function(){
  $(".heima").fullpage({
    afterLoad: function(a,index){
    // 窗口高度
    var wh= $(window).height();
    // 给body注册鼠标进入事件
      $("body").mousemove(function(event){
        // 算出left值
        var left= event.pageX-70;
        var y = event.pageY;
        var bottom = wh -y -129;
        bottom = bottom >=0 ? 0 : bottom;
        $(".section8 .hand").css({left:left,bottom:bottom});
      });
      // 随机选车按钮
      $(".section8 .again").click(function(){
        // $('.section .xiao').remove();
      })
    }
  
  });
});