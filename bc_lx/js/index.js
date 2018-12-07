// 1 鼠标放到容器上，显示箭头
$('#slide').mouseover(function () {
  $('#arrow').css('opacity', 1);
});
$('#slide').mouseout(function () {
  $('#arrow').css('opacity', 0);
});
// 2 给箭头注册点击事件(上一张 下一张)
var arr = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5'];
$('#arrRight').click(function () {
  // 3 下一张，把最后一个li的类样式，设置给第一个li，后面的li依次类推
  var last = arr.pop();
  arr.unshift(last);
  // 找到每一个li，设置类样式
  var $list = $('#slide > ul > li');
  for (var i = 0; i < $list.length; i++) {
    // 获取伪数组中的每一个元素 li DOM对象
    var li = $list[i];
    li.className = arr[i];
  }
});
// 4 上一张，把第一个li的类样式，设置给最后一个li，其它li依次类推
$('#arrLeft').click(function () {
  // 取数组中的第一个元素
  var first = arr.shift();
  arr.push(first);

  var $list = $('#slide > ul > li');
  for (var i = 0; i < $list.length; i++) {
    var li = $list[i];
    li.className = arr[i];
  }
});

// 汽车动画
// $('#btun1').click(function () {
//   $('.yincang').show();
// });