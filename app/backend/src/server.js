import 'dotenv/config';
import app from './app';

const porrt = process.env.API_PORT || 3001;

app.listen(port, () => console.log('Server on port:', port));
