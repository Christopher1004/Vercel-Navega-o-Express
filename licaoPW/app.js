const express = require("express");
const path = require("path");
const app = express();
 

// Configurar a pasta pública para arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Configuração do EJS como view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Rota principal
const indexRouter = require("./routes/index");
app.use("/", indexRouter);
 
// Rotas para categorias e produtos
const categoriaRouter = require("./routes/categorias");
app.use("/categorias", categoriaRouter);

const quemSomosRouter = require('./routes/quemSomos')
app.use('/', quemSomosRouter)

const alunoRouter = require('./routes/aluno')
app.use('/aluno', alunoRouter)



// Iniciar o servidor e sincronizar com o banco de dados
 
app.listen(3000, () => {
  console.log("Servidor em execução na porta 3000");
});