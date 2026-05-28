import 'dotenv/config';

import express from 'express';
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Yo!')
})
app.listen(port , () => {
  console.log(`Example moseying on ${port}`);
})