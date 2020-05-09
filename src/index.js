const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Pagina principal'));

app.listen(3333, () => {
  console.log('Server is running');
});
