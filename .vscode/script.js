function toggleMove(){
const html = document.documentElement

html.classList.toggle('light');
}

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
/*
// Servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
})*/