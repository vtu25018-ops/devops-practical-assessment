const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from o2h DevOps Assessment');
});

app.listen(3000);