import fastify from 'fastify';
import { pipe } from 'ramda';
import { compareAPICalls } from './handlers/comparison';

const port = 3001;
const app = fastify();

app.register(import('fastify-cors'));
// This example route is used for testing and development
app.register(import('./routes/example')); //

app.post('/compare', compareAPICalls);

const logServerError = (error) => console.log('We encountered a server error: ', error);

const exitProcess = () => process.exit(1);

const onServerError = pipe(logServerError, exitProcess);

const onServerSuccess = () => console.log(`server is listening on port: ${port}`);

app.listen(port).then(onServerSuccess).catch(onServerError);
