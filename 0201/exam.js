const express = require('express');
const app = express();
const PORT = 8001;

//body-parser
app.use(express.urlencoded({ extended: true })); //x-www-form-urlencoded 방식
app.use(express.json()); //json 방식

//view engine
app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('exam');
});
app.get('/getForm', (req, res) => {
    const { username, gender, year, day, month, inter, color, number } = req.query;
    res.render('examresult', {
        userInfo: {
            username,
            gender,
            year,
            day,
            month,
            inter,
            color: { result: false, color: null },
            number: { result: false, number: null },
        },
    });
});
app.post('/postForm', (req, res) => {
    const { username, gender, year, day, month, inter, color, number } = req.body;
    res.render('examresult', {
        userInfo: {
            username,
            gender,
            year,
            day,
            month,
            inter,
            // key-value 형태에서 ket 값과 value의 변수가 동일할 때는 하나로 합치기 가능
            color: { result: true, color: color },
            number: { result: true, number: number },
        },
    });
});

//use는 http전송 방식을 이해하지 못함
//같은 router(url)로 get, post 만들수 있지만 use는 접근이 불가
//예를 들어 get 방식의 '/login'과 Post 방식의 '/login'은 다른 통신이지만
//use는 동일한 페이지로 인식
//use는 404페이지 일때 주로 사용
app.use('*', (req, res) => {
    res.render('404');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
