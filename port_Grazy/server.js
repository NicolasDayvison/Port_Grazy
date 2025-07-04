// server.js

// 1. Importar os módulos necessários
const express = require('express');
const path = require('path');

// 2. Inicializar o aplicativo Express
const app = express();

// 3. Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// 4. Configurar o EJS como view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// 5. SERVIR FICHEIROS ESTÁTICOS
app.use(express.static(path.join(__dirname, 'public')));

// 6. Definir a rota principal
app.get('/', (req, res) => {
    res.render('index');
});

// 7. NOVA ROTA PARA O MÍDIA KIT
app.get('/midia-kit', (req, res) => {
    res.render('midia-kit');
});

// Rota extra para aceitar /midia-kit.ejs
app.get('/midia-kit.ejs', (req, res) => {
    res.render('midia-kit');
});

// 8. Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Servidor a correr com sucesso na porta ${PORT}`);
    console.log(`Aceda em http://localhost:${PORT}`);
    console.log("Certifique-se de que as suas imagens estão na pasta 'public/images'");
});
