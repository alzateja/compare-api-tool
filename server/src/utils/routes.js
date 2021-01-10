import { getPostMethods, postMethod } from '../constants/request';

export const defineGetPostRoute = (app) => (url, handler) => app.route({ method: getPostMethods, url, handler });

export const definePostRoute = (app) => (url, handler) => app.route({ method: postMethod, url, handler });
