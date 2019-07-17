var index = 0,
    num = 5,
    timer = undefined,
    ItemWidth = 520;

timefun();

/**
 * @param {*} direction 点击运动的方向
 */
function move(direction) {
    // 清空定时器
    clearTimeout(timer);
    // stop() 方法停止当前正在运行的动画。
    // 防止无限点击 运动加快的
    $('.img-box').stop(false, true);

    if (direction == 'next') {
        index++;
        if (index > num) {
            $('.img-box').css({
                left: 0
            });
            index = 1;
        }
    } else if (direction == 'pre') {
        index--;
        if (index < 0) {
            $('.img-box').css({
                left: num * -ItemWidth
            });
            index = 4;
        }
    }
    $('.img-box').animate({
        left: index * -ItemWidth
    }, function () {
        timefun();
    });
    // 防止当索引值为 5的时候不跳到 第一个点上 第几个元素？
    active($('.item').eq(index == 5 ? 0 : index))
}

function timefun() {
    timer = setTimeout(function () {
        move('next')
    }, 3000)
}

$('.preBtn').click(function () {
    move('pre');
});

$('.nextBtn').click(function () {
    move('next')
});

function active(dom) {
    $('.active').removeClass('active');
    dom.addClass('active');
}

$('.item').click(function () {
    // index获取当前的点击元素的索引值
     index = $(this).index();
    // 每次都执行者move函数
    move(''); 
});