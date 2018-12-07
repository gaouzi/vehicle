$('.search').click(function(){
   if($('.yc').hasClass('show')){
       $('.yc').removeClass('show');  
   }else{
    $('.yc').addClass('show');  
   }
});

// 1 显示 上一张 下一张按钮
$('.thnbanner').hover(function () {
    // 1.1 鼠标经过 显示箭头
    $('#arr').show();
    $('.thnbanner').jcarouselAutoscroll('stop');
  }, function () {
    // 1.2 鼠标离开， 隐藏箭头
    $('#arr').hide();
    $('.thnbanner').jcarouselAutoscroll('start');
  });

  $('.thnbanner').jcarousel({
    wrap: 'circular'
  })
  .jcarouselAutoscroll({
          interval: 1000,
          target: '+=1',
          autostart: true
      })

  $('#left')
      .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
      })
      .jcarouselControl({
          target: '-=1'
      });

  $('#right')
      .on('jcarouselcontrol:active', function() {
          $(this).removeClass('inactive');
      })
      .on('jcarouselcontrol:inactive', function() {
          $(this).addClass('inactive');
      })
      .jcarouselControl({
          target: '+=1'
      });

  $('.page')
      .on('jcarouselpagination:active', 'a', function() {
          $(this).addClass('active');
      })
      .on('jcarouselpagination:inactive', 'a', function() {
          $(this).removeClass('active');
      })
      .jcarouselPagination();
    
    //轮播图高度
   $('.thnbanner').css('height',$(window).height()-108);


  //显示隐藏
  $('.thn_list li').eq(0).mouseenter(function(){
    $('.thnbox1').stop().fadeIn();
  }).mouseleave(function(){
    $('.thnbox1').stop().fadeOut();
  });
  $('.thn_list li').eq(1).mouseenter(function(){
    $('.thnbox2').stop().fadeIn();
  }).mouseleave(function(){
    $('.thnbox2').stop().fadeOut();
  });
  $('.thn_list li').eq(2).mouseenter(function(){
    $('.thnbox3').stop().fadeIn();
  }).mouseleave(function(){
    $('.thnbox3').stop().fadeOut();
  });
  $('.thn_list li').eq(3).mouseenter(function(){
    $('.thnbox4').stop().fadeIn();
  }).mouseleave(function(){
    $('.thnbox4').stop().fadeOut();
  });





  //1.鼠标滚动，注册事件
$(window).scroll(function () {

    //2.获取距离上面的距离
    var scrollTop = $(window).scrollTop();
    //显示
    if (scrollTop > $('.thnbanner').height()-108) {
      $('.subnav').show();
    } else {
      $('.subnav').hide();
    }
  
    //3.到几层，几层li亮
    if(scrollTop >= $('.footer').offset().top){
        $('.subnav li:eq(3)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    }else if(scrollTop >= $('.banner').offset().top){
        $('.subnav li:eq(2)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    }else if (scrollTop >= $('.findmore').offset().top) {
      $('.subnav li:eq(1)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    }else if (scrollTop >= $('.allType').offset().top) {
      $('.subnav li:eq(0)')
        .addClass('current')
        .siblings()
        .removeClass('current');
    } else {
      $('.subnav li').removeClass('current')
    }
  });
  
  //4.点击li，到几层
 
  
  $('.subnav li').eq(0).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.allType').offset().top
    });
  });
  $('.subnav li').eq(1).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.findmore').offset().top
    });
  });
  $('.subnav li').eq(2).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.banner').offset().top
    });
  });
  $('.subnav li').eq(3).click(function () {
    //设置scrollTop
    $('html,body').animate({
      scrollTop: $('.footer').offset().top
    });
  });
  
  //5.点击返回，返回顶部
  $('.back').click(function () {
    $('html,body').animate({
      scrollTop: 0
    })
  });