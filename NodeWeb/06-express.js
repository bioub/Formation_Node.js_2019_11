const express = require('express');

const app = express();
// app.use(express.json());

const getId = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER + 1);

const contacts = [
  {
    firstName: 'Romain',
    lastName: 'Bohdanowicz',
    id: 123,
  },
  {
    firstName: 'Jean',
    lastName: 'Dupont',
    id: 456,
  },
];

// Exercice, traiter les 5 requêtes suivantes
// GET /contact -> répondre en JSON la liste des contacts (déjà fait)
// POST /contact -> recevoir en JSON un contact sans id, ajouter un id aléatoire côté Node
// stocker le contact dans le tableau et répondre en JSON le contact avec l'id généré
// et le statusCode 201
// GET /contact/:id -> répondre en JSON le contact dont l'id est dans l'URL
// DELETE /contact/:id -> supprimer et répondre en JSON le contact dont l'id est dans l'URL
// PUT /contact/:id -> remplacer le contact dont l'id est dans l'url par celui reçu en
// body, et répondre l'ancien contact

app.get('/contact', (req, res) => {
  res.json(contacts);
});

app.post('/contact', express.json(), (req, res) => {
  res.json(req.body);
});

// app.get('/contact/:name', (req, res) => {
//   res.json({ firstName: req.params.name });
// });

app.listen(8000, () => {
  console.log('Le server a démarré sur le port 8000');
});
