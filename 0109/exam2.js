function go() {
    let table1 = document.getElementById('table1');
    let table2 = document.getElementById('table2');

    table1.children[1].innerHTML = document.getElementById('name').value;
    table1.children[2].innerHTML = document.getElementById('content').value;
    table1.children[3].innerHTML = new Date();

    table2.children[1].innerHTML = document.getElementById('name').value;
    table2.children[2].innerHTML = document.getElementById('content').value;
    table2.children[3].innerHTML = new Date();
}
