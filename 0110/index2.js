//jquery
//$(선택자).동작함수();
console.log($('#hello').text());
$('#hello').text('안녕히가세요');
$('#hello').css('font-size', '20px');

//jquery 메소드
//val()

function getValue() {
    let value = $('input').val();
    console.log(value);
}
function setValue() {
    $('input').val('설정완료');
}

//css()

function changeCssJs() {
    //js로 바꾸기
    let span = document.querySelector('span');
    span.style = 'font-size:20px; color : red;';
}
function changeCssJquery() {
    //jquery로 바꾸기
    // $('span').css('font-size', '40px');
    // $('span').css('color', 'blue');
    $('span').css({ 'font-size': '40px', color: 'blue' });
}
function getCssJquery() {
    console.log($('span').css('color'));
}

//attr()

function changeAttrJs() {
    //js로 바꾸기
    let a = document.querySelector('a');
    a.setAttribute('href', 'https://www.naver.com');
}
function changeAttrJquery() {
    //jquery로 바꾸기
    $('a').attr('href', 'https://www.daum.net');
}

//html()

function changeHtmlJs() {
    //js로 바꾸기
    let p = document.querySelector('.html');
    p.innerHTML = '<p>javascript</p>';
}
function changeHtmlJquery() {
    //jquery로 바꾸기
    $('.html').html('<p>jquery</p>');
}

//요소 추가하기

function appendJs() {
    //기준이 될 dom을 가져옴
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.textContent = '마지막으로 추가된 js';
    ul.append(li);
}
function appendJquery() {
    $('.colors').append('<li>마지막으로 추가된 jquery</li>');
}

function prependJs() {
    //기준이 될 dom을 가져옴
    let ul = document.querySelector('.colors');
    let li = document.createElement('li');
    li.textContent = '처음으로 추가된 js';
    ul.prepend(li);
}
function prependJquery() {
    $('.colors').prepend('<li>처음으로 추가된 jquery</li>');
}

//before, after 복습 green이용해서

function beforeJs() {
    let li = document.createElement('li');
    let target = document.querySelector('.green');
    li.textContent = 'js로 green 앞에 추가';
    target.before(li);
}
function beforeJquery() {
    $('.green').before('<li>jquery로 green 앞에 추가</li>');
}

//요소 삭제하기

function removeJs() {
    let li = document.querySelector('#li2');
    li.remove();
}
function removeJquery() {
    $('#li2').remove();
}

function emptyJs() {
    let nums = document.querySelector('ul.nums');
    console.log(nums);
    nums.innerHTML = '';
}
function emptyJquery() {
    $('.nums').empty();
}

//요소 탐색하기

function findParent() {
    console.log($('.child2').parent());
}
function findParents() {
    console.log($('.child2').parents()); // 기준의 조상태그 전부 탐색
}
function findNext() {
    console.log($('.child2').next());
}
function findPrev() {
    console.log($('.child2').prev());
}
function findChildren() {
    console.log($('.parent').children());
}
