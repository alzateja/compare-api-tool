import { sendPostRequest, sendGetRequest } from '../../api';
import { isGetRequest } from '../02-validate-request-args';

/*
  THIS MODULE IS VERY IMPURE. API CALLS ARE SIDE EFFECTS.

  This function determines whether to use a GET or POST request.
  This initializes our API call functions
*/
const determineApiCall = (method, body) => (
  isGetRequest(method) ?
  sendGetRequest :
  sendPostRequest(body)
  );

/*
  This uses Promise.all to make our API calls.
  This allows us to await the responses of both functions before continuing.
*/
const makeBaseAndApiCalls = (apiCallFn, baseUrl, comparisonUrl) =>
  Promise.all([
    apiCallFn(baseUrl),
    apiCallFn(comparisonUrl)
  ]);

/*
  This function combines our two functions.
  We initialize the proper API request function.
  We then make the api calls for both our base and comparison urls.
*/
export const makeApiComparisonCalls = ({ method, baseUrl, comparisonUrl, body }) => {
  const apiCallFunction = determineApiCall(method, body);
  return makeBaseAndApiCalls(apiCallFunction, baseUrl, comparisonUrl);
};
