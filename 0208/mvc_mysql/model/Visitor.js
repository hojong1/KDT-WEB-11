// const mysql = require('mysql2');
// //mysql연결

// const conn = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '77646659',
//     database: 'kdt11',
//     port: 3306,
// });

// conn.connect((err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log('mysql connect');
// });
// //쿼리문 작성
// const allVisitor = (cb) => {
//     const query = `SELECT * FROM visitor`;
//     conn.query(query, (err, rows) => {
//         console.log(rows);
//     });
// };

// module.exports = { allVisitor };

const mysql = require('mysql2/promise');

//mysql연결

const getConn = async () => {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '77646659',
        database: 'kdt11',
        port: 3306,
    });
};
//문자열 보관방법
//`SELECT * FROM visitor WHERE id= ${id}`
//단점이 존재
// 1. sql 인젝션 공격에 취약
// 2. 문자열에 특수 문자가 포함될 경우 오류가 발생될 수도 있음.
// Prepared Statement

//쿼리문 작성
const allVisitor = async () => {
    const conn = await getConn();
    const query = `SELECT * FROM visitor`;
    const rows = await conn.query(query);
    await conn.end();
    return rows;
};
const getVisitor = async (id) => {
    const conn = await getConn();
    // const query = `SELECT * FROM visitor WHERE id=${id}`;
    const query = 'SELECT * FROM visitor WHERE id=?';
    const [rows] = await conn.query(query, [id]);
    await conn.end();
    return rows;
};
const postVisitor = async (data) => {
    const conn = await getConn();
    // const query = `INSERT INTO visitor (name, comment) VALUES ('${data.name}', '${data.comment}')`;
    const query = `INSERT INTO visitor (name, comment) VALUES (? , ?)`;
    const [result] = await conn.query(query, [data.name, data.comment]);
    await conn.end();
    return result;
};

const patchVisitor = async (data) => {
    const conn = await getConn();
    // const query = `UPDATE visitor SET name= '${data.name}', comment='${data.comment}' WHERE id = ${data.id}`;
    const query = `UPDATE visitor SET name= ?, comment='?' WHERE id = ?`;
    const [result] = await conn.query(query, [data.name, data.comment, data.id]);
    await conn.end();
    return result;
};

const deleteVisitor = async (id) => {
    const conn = await getConn();
    // const query = `DELETE FROM visitor WHERE id=${id}`;
    const query = `DELETE FROM visitor WHERE id=?`;
    const [result] = await conn.query(query, [id]);
    await conn.end();
    return result;
};

module.exports = { allVisitor, getVisitor, postVisitor, patchVisitor, deleteVisitor };
