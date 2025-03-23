
const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const router = express.Router();

router.get("/two", (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'pageTwo.html'));
});

module.exports = router;