const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { title: 'Login System'});
});

router.get('/system', (req, res) => {
    res.render('system.html', { title: 'Panel System'});
});

router.get('/torneo', (req, res) => {
    res.render('torneo.html', { title: 'Torneo'});
});

module.exports = router;