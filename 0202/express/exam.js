const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('exam');
});

app.get('/axios', (req, res) => {
    res.send(req.query);
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
