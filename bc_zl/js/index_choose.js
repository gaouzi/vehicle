// 获取盒子
var box = document.querySelector('div');
// box.style.backgroundImage = 'url(./girl1.jpg)';
box.style.backgroundImage = 'url(./bc_zl/img/111.jpg)'

var h1 = window.innerHeight;
var nihao = document.querySelector('.nihao');
box.style.lineHeight = h1 + 'px';
// console.log(window.innerHeight);
// box.style.lineHeight = window.innerHeight;
// 获取给定区间内的随机数--函数封装
function getRandom(min, max) {
  return parseInt(Math.random() * (max - min + 1) + min);
}
// 设置即将显示的倒计时数字
var i = 4;
// 声明将要执行定时器--全局变量
var fangda;
// 外部定时器，控制显示内容和背景颜色，以及定时清除和启动内部定时器
var qiehuan = setInterval(function () {
  // 清除内部定时器
  clearInterval(fangda);
  // 给每次显示的内容设置初始文字大小
  box.style.fontSize = '10px';
  var j = 10;
  // 内部定时器开启，放大文字
  fangda = setInterval(function () {
    j = j + 7;
    box.style.fontSize = j + 'px';
  }, 11);
  // 设置倒计时数字
  box.innerText = i;
  i--;
  // 随机颜色
  var r = getRandom(0, 255);
  var g = getRandom(0, 255);
  var b = getRandom(0, 255);
  // box.style.backgroundImage = "url(../img/girl1.jpg)"
  box.style.backgroundImage = 'url(./bc_zl/img/girl'+i+'.jpg)'
  // box.style.backgroundColor = 'rgb(' + r + ',' + g +   ',' + b + ')';
  console.log(1)
}, 700);
// 定时清除外部定时器--设置为2800
setTimeout(function () {
  clearInterval(qiehuan);
}, 2800);
// 定时清除内部定时器--设置为3500
setTimeout(function () {
  clearInterval(fangda);
  nihao.click();
}, 3500);
