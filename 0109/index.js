//HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);
text.textContent = 'hi';
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <br>첫번째</b> 태그입니다';

/*   tectContent : 요소안에 텍스트를 가져오거나 수정
     innerText : 요소 안에 텍스트를 가져오거나 수정
     textcontent : 공백 문자 그대로 반환, IE9 이전
     innerText : 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소 수정 불가
     innerHTML : 입력된 문자열을 HTML 형식으로! 
     */

// classList
text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('title-big');
console.log(text.classList.contains('title-big'));

// /* add : 클래스 추가
//    remove : 클래스 제거
//    toggle : 클래스가 있으면 제거, 없으면 추가
//    contains : 해당 클래스가 있는지 boolean 값 반환
// */
//serAttribute : html요소 속성 추가
const link = document.getElementById('link');
console.log(link);
link.setAttribute('href', 'https://www.naver.com');
const img = document.getElementById('image');
img.setAttribute(
    'src',
    'https://search.pstatic.net/sunny/?src=http%3A%2F%2Ffile3.instiz.net%2Fdata%2Fcached_img%2Fupload%2F2023%2F10%2F29%2F11%2Fe3bbd0cc81c8311849fa99a7b0f17d0c.jpg&type=a340'
);
img.setAttribute('width', '200');

const input = document.getElementById('input');
input.setAttribute('placeholder', '이름을 입력하세요');

// // classList
// console.log(text.classList.contains('title-big'));
// text.classList.add('title');
// text.classList.remove('title');
// text.classList.toggle('title-big');
/*
 * add: 클래스 추가
 * remove: 클래스 제거
 * toggle: 클래스가 있으면 제거, 없으면 추가
 * contains: 해당 클래스가 있는지 boolean 값 반환
 */
// setAttribute: html요소 속성 추가
// const link = document.getElementById('link');
// console.log(link);
// link.setAttribute('href', 'https://www.naver.com');
// const img = document.getElementById('image');
// img.setAttribute('src', 'kbc202306010047.jpg');
// img.setAttribute('width', '200');
// const input = document.getElementById('input');
// input.setAttribute('placeholder', '이름을 입력하세요');
//다른 노드에 접근하기
