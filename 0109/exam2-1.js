let i = 2;
function writeFunc() {
    let writer = document.getElementById('writer').value;
    let content = document.getElementById('content').value;
    let tbody = document.getElementsByTagName('tbody')[0];
    let tr = document.createElement('tr');

    //<tr></tr>
    let tdNum = document.createAttribute('td');
    tdNum.innerText = i++;
    let tdWriter = document.createElement('td');
    tdWriter.innerText = writer;
    let tdContent = document.createElement('td');
    tdContent.innerText = content;
    let tdDate = document.createElement('td');
    let now = new Date();
    tdDate.innerText = `${now.getFullYear()}년 ${
        now.getMonth() + 1
    }월 ${now.getDate()}일 ${now.getHours()} : ${now.getMinutes()}`;
    //<td></td>
    tr.append(tdNum, tdWriter, tdContent, tdDate); //순서대로 tr안에 추가
    tbody.append(tr);
}
