const express = require('express');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.use('/uploads', express.static(__dirname + '/uploads'));

const upload = multer({
    dest: 'uploads/',
});

app.get('/', (req, res) => {
    res.render('exam');
});

const uploadDetail = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads/');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const newName = path.basename(file.originalname, ext) + Date.now() + ext;
            done(null, newName);
        },
    }),

    limits: { fileSize: 1 * 1024 * 1024 },
});

app.post('/postForm', uploadDetail.single('userfile'), (req, res) => {
    const { id, pw, username, age } = req.body;
    res.render('examresult', {
        userInfo: {
            id,
            pw,
            username,
            age,
            userfile: req.file.path,
        },
    });
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
