let i = 1;

function go() {
    let tr = document.createElement('tr');
    let tbody = document.getElementsByTagName('tbody')[0];
    let td1 = document.createElement('td');
    td1.innerText = i++;
    let td2 = document.createElement('td');
    td2.innerText = document.getElementById('name').value;
    let td3 = document.createElement('td');
    td3.innerText = document.querySelector('#content').value;
    let now = new Date();
    let td4 = document.createElement('td');
    td4.innerText = `${now.getFullYear()}년 ${
        now.getMonth() + 1
    }월 ${now.getDate()}일 ${now.getHours()}:${now.getMinutes()}`;
    tr.append(td1, td2, td3, td4);
    tbody.append(tr);
}
