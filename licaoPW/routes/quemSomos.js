const express = require('express');
const router = express.Router();

// Mostrar quemSomos.ejs
router.get('/quemSomos', async (req, res) => {
    res.render('base', {
        title: 'Quem Somos',
        view: 'quemSomos'
    });
});

module.exports = router;