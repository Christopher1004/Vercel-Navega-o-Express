const express = require('express');
const router = express.Router();

//Rotas :
// Listar aluno - show.ejs
router.get('/', async (req, res) => {
    res.render('base', {
        title: 'Aluno',
        view: 'aluno/show'
    });
});

// add aluno - add.ejs
router.get('/add', async (req, res) => {
    res.render('base', {
        title: 'Adicionar Aluno',
        view: 'aluno/add'
    });
});


// editar aluno - edit.ejs
router.get('/edit', async (req, res) => {
    res.render('base', {
        title: 'Editar Aluno',
        view: 'aluno/edit'
    });
});

module.exports = router;