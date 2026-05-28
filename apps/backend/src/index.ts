import express from 'express';
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.json({ok: 1});
})

app.get('/hello', (req, res) => {
  res.json({hello: 'world'});
})

app.listen(port ?? 4000 , () => {
  console.log(`Example moseying on ${port}`);
})