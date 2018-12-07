
    // 1 显示 上一张 下一张按钮
    $('#box').hover(function () {
        // 1.1 鼠标经过 显示箭头
        $('#arr').show();
        $('.screen').jcarouselAutoscroll('stop');
    }, function () {
        // 1.2 鼠标离开， 隐藏箭头
        $('#arr').hide();
        $('.screen').jcarouselAutoscroll('start');
    });

$('.screen').jcarousel({
        wrap: 'circular'
    })
    .jcarouselAutoscroll({
        interval: 1000,
        target: '+=1',
        autostart: true
    })

$('#left')
    .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
    })
    .jcarouselControl({
        target: '-=1'
    });

$('#right')
    .on('jcarouselcontrol:active', function () {
        $(this).removeClass('inactive');
    })
    .on('jcarouselcontrol:inactive', function () {
        $(this).addClass('inactive');
    })
    .jcarouselControl({
        target: '+=1'
    });

$('.page')
    .on('jcarouselpagination:active', 'a', function () {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function () {
        $(this).removeClass('active');
    })
    .jcarouselPagination(); 