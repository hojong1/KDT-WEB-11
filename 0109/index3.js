const root = document.getElementById('root');
const p = document.createElement('p');
const p2 = document.createElement('p');
// <p></p>
p.textContent = '안녕하세요';
p2.textContent = '안녕하세용';
// <p>안녕하세요</p>
p.classList.add('append-p');
// <p class = 'append-p'>안녕하세요</p>
p.style.fontWeight = 'bold';
// p.setAttribute('style', 'font-weight:bold');
// <p class = 'append-p' style= 'font-weight : bold'>안녕하세요</p>
console.log(p);

//노드 추가

/* append(): - 노드 객체 또는 텍스트 추가
             - 한번에 여러개의 자식 요소 추가 가능
             - 반환값 없음
   appendChild() : - 노드 객체만 추가 가능
                   - 한번에 하나씩 추가 가능
                   - 반환값 있음
    prepend() : 첫번째 자식으로 추가
*/
const target = document.getElementById('target');
root.append(p);
root.prepend(p);
target.before(p); // target의 이전 형제로 추가
target.after(p2); // target의 다음 형제로 추가
root.appendChild(p);

//노드 삭제
/* 
    remove() : 선택한 요소를 삭제
    removeChild(자식) : 선택한 요소의 자식을 삭제
*/
// target.remove();
root.removeChild(p2);
