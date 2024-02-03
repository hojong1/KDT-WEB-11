const express = require('express');
const app = express();
const PORT = 8002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('exam2');
});

const id = 'kdt11';
const pw = '1234';
app.post('/login', (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (id === reqId && pw === reqPw) {
        res.send({ result: true, userInfo: { id } });
    } else {
        res.send({ result: false, userInfo: null });
    }
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
