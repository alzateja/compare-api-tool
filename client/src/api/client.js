import superagent from 'superagent';
import { returnResponse, handleError } from './utils/response';

const serverURL = 'http://localhost:3001/compare';

export const sendComparisonPostRequest = (body) =>
  superagent
    .post(serverURL)
    .send({ ...body })
    .then(returnResponse)
    .catch(handleError);

export default { sendComparisonPostRequest };
