import { defineGetPostRoute } from '../utils/routes';
import {
  baseResponse,
  partialResponse,
  alternativeResponse,
  additionalDataResponse,
  unsortedResponse,
} from '../mockResponses';

export const sendResponse = (response) => () => response;

export const throwNewError = () => new Error('An error ocurred');

export const exampleRoutes = (fastify, options, done) => {
  const defineRoute = defineGetPostRoute(fastify);
  defineRoute('/base', sendResponse(baseResponse));
  defineRoute('/less', sendResponse(partialResponse));
  defineRoute('/more', sendResponse(additionalDataResponse));
  defineRoute('/other', sendResponse(alternativeResponse));
  defineRoute('/unsorted', sendResponse(unsortedResponse));
  defineRoute('/error', throwNewError);
  done();
};

export default exampleRoutes;
