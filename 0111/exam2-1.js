function changeColor() {
    if ($('div').hasClass('red')) {
        $('div').switchClass('red', 'orange', 1000);
    } else if ($('div').hasClass('orange')) {
        $('div').switchClass('orange', 'yellow', 1000);
    } else if ($('div').hasClass('yellow')) {
        $('div').switchClass('yellow', 'green', 1000);
    } else if ($('div').hasClass('green')) {
        $('div').switchClass('green', 'blue', 1000);
    } else if ($('div').hasClass('blue')) {
        $('div').switchClass('blue', 'purple', 1000);
    } else if ($('div').hasClass('purple')) {
        $('div').switchClass('purple', 'red', 1000);
    }
}

let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
let i = 0;
function changeColor() {
    //$('div').switchClass(colors[i], colors[++i % colors.length], 1000);
    // if ($('div').hasClass('red')) {
    //     $('div').switchClass('red', 'orange', 1000);
    // } else if ($('div').hasClass('orange')) {
    //     $('div').switchClass('orange', 'yellow', 1000);
    // }
    let nowClass = $('div').attr('class'); //현재 클래스 값 가져오기
    let i = colors.indexOf(nowClass);
    if (i == colors.length - 1) {
        $('div').switchClass(nowClass, colors[0]); //purple일때
    } else {
        $('div').switchClass(nowClass, colors[i + 1]);
    }
}
