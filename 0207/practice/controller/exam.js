const examModel = require('../model/exam');

exports.main = (req, res) => {
    res.render('post');
};
exports.login = (req, res) => {
    console.log('요청값', req.body);
    const { id: reqId, pw: reqPw } = req.body;
    if (examModel[0].userid === reqId && examModel[0].userpw === reqPw) {
        res.send({ result: true, userInfo: { id: examModel[0].userid } });
    } else {
        res.send({ result: false, userInfo: null });
    }
};
