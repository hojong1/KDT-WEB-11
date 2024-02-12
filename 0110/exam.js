// $('.fruits').css('width', '300px');
// $('.fruits').css('height', '300px');
// $('.fruits').css('border', 'solid');
// $('.fruits').css('border-radius', '50px');
// $('.fruits').css('border-color', 'yellow');
// $('.fruits').css('text-align', 'center');
// $('.fruits').css('font-size', '50px');
// $('.fruits').css('border-width', '20px');
// $('.fruits').css('display', 'flex');
// $('.fruits').css('align-items', 'center');

$('.fruits').css({
    width: '300px',
    height: '300px',
    border: 'solid',
    'border-radius': '50px',
    'border-color': 'yellow',
    'text-align': 'center',
    'font-size': '50px',
    'border-width': '20px',
    display: 'flex',
    'align-items': 'center',
});
function imgApple() {
    $('.fruits').html('<img src="사과.jpeg" style="width:200px; height:200px; margin-left:50px">');
}
function imgBanana() {
    $('.fruits').html('<img src="바나나.jpeg" style="width:200px; height:200px; margin-left:50px">');
}
function imgGrape() {
    $('.fruits').html('<img src="포도.jpeg" style="width:200px; height:200px; margin-left:50px">');
}
function imgPeach() {
    $('.fruits').html('<img src="복숭아.jpeg" style="width:200px; height:200px; margin-left:50px">');
}
