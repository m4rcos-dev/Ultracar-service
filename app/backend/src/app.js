import express from 'express';

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

export default app;
