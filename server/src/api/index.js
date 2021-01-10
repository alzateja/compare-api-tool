import superagent from 'superagent';
import { returnResponse, handleError } from './utils/response';

export const sendGetRequest = (url) =>
  superagent
    .get(url)
    .then(returnResponse)
    .catch(handleError);

export const sendPostRequest = (body) => (url) =>
  superagent
    .post(url)
    .send(body)
    .then(returnResponse)
    .catch(handleError);
