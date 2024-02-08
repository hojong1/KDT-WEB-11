const express = require('express');
const app = express();
const PORT = 8002;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './views');

const examRouter = require('./routes/exam');
app.use('/', examRouter);

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
