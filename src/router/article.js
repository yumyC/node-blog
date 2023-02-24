const express = require('express')
var router = express.Router();
const api = require('../controllers/articles.controller')
// 全部数据列表的接口
router.get('/articleList', function(req, res, next) {
  api.findAll(res);
});

module.exports.router = router;
