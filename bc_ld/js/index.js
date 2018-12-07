// 1.注册页面滚动事件
$(window).scroll(function () {
    // 获取页面滚动距离
    var scrollTop = $(window).scrollTop();
// 2.判断滚动距离，让页面以动画形式展现
if (scrollTop >= 5000) {
    $('.middletu3 > img').stop().animate({
        marginTop: '0px',
    }, 800);
}
if (scrollTop < 5000) {
    $('.middletu3 > img').css('margin-top', 300); 
}
if (scrollTop >= 4200) {
    $('.middletu2 > img').stop().animate({
        marginTop: '0px',
    }, 800);
}
if (scrollTop < 4200) {
    $('.middletu2 > img').css('margin-top', 300); 
}
if (scrollTop >= 3000) {
    $('.middletu1 > img').stop().animate({
        marginTop: '0px',
    }, 800);
}
if (scrollTop < 3000) {
    $('.middletu1 > img').css('margin-top', 300); 
}
if (scrollTop >= 2400) {
    $('.cs').stop().animate({
        marginTop: '0px',
    }, 600);
}
if (scrollTop < 2400) {
    $('.cs').css('margin-top', 300); 
}
if (scrollTop >= 600) {
    $('.middletu4 > img').stop().animate({
        marginTop: '0px',
    }, 500);
}
if (scrollTop < 600) {
    $('.middletu4 > img').css('margin-top', 300); 
}
});