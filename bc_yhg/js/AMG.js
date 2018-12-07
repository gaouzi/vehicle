// 轮播图
$(document).ready(function () {
  $('.flexslider').flexslider({
    directionNav: true,   // 是否显示左右控制按钮
    pauseOnAction: false,
    slideshowSpeed: 3000,
    controlNav: true
  });
});
// 头部固定导航
var tag = document.getElementById('tag');
window.onscroll = function () {
  var scrollTop = window.pageYOffset;
  if (scrollTop >= tag.offsetTop) {
    $('#_nav').show();
    if (scrollTop >= $('#aboutus').offset().top) {
      $('#_nav ul li:eq(4) a').css('color', 'red')
        .parent()
        .siblings()
        .children('a')
        .css('color', '#fff');
    } else if (scrollTop >= $('#amgact').offset().top) {
      // 三层
      $('#_nav ul li:eq(3) a').css('color', 'red')
        .parent()
        .siblings()
        .children('a')
        .css('color', '#fff');
    } else if (scrollTop >= $('#about').offset().top) {
      // 二层
      $('#_nav ul li:eq(2) a').css('color', 'red')
        .parent()
        .siblings()
        .children('a')
        .css('color', '#fff');
    } else if (scrollTop >= $('#dealer').offset().top) {
      // 一层
      $('#_nav ul li:eq(1) a').css('color', 'red')
        .parent()
        .siblings()
        .children('a')
        .css('color', '#fff');
    } else if (scrollTop >= $('#cars').offset().top) {
      // 一层
      $('#_nav ul li:eq(0) a').css('color', 'red')
        .parent()
        .siblings()
        .children('a')
        .css('color', '#fff');
    }
  } else {
    $('#_nav ul li').children('a')
    .css('color', '#fff');
    $('#_nav').hide();
  }
}
// 固定区域导航电梯样式
var lis = document.querySelectorAll('.car_type li');
var divs = document.querySelectorAll('.tab-content-item');
for (var i = 0; i < lis.length; i++) {
  lis[i].index = i;
  lis[i].onclick = function () {
    for (var j = 0; j < lis.length; j++) {
      lis[j].className = '';
      divs[j].className = 'tab-content-item';
    }
    this.className = 'active';
    var num = this.index;
    divs[num].className = 'tab-content-item active';
  };
  ;
};

// 键盘控制地图区域
var x = 45;
var y = 25;
var tool = document.getElementById('tool');
var map = document.getElementById('map');
document.onkeydown = function (e) {
  // 上w:87,,左a：65 ，，下：s 83 ，，右d：68
  switch (e.keyCode) {
    case 87:
      y -= 5;
      break;
    case 83:
      y += 5;
      break;
    case 65:
      x -= 5;
      break;
    case 68:
      x += 5;
      break;
  }
  if (y < 0) {
    y = 0;
  } if (y > 45) {
    y = 45;
  }
  if (x < 0) {
    x = 0;
  }
  if (x > 100) {
    x = 100;
  }
  tool.style.left = x + 'px';
  tool.style.top = y + 'px';
  map.style.backgroundPositionX = - x * 10 + 'px';
  map.style.backgroundPositionY = - y * 10 + 'px';
};


















