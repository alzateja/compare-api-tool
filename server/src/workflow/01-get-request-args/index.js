import { pathOr } from 'ramda';

// We make a curried version of our function to get a value from our request.
export const getValueFromRequestBody = (defaultValue) => (keyPath, request) =>
  pathOr(defaultValue, ['body', ...keyPath], request);

// Since we have a curried version, we can define default returns and reuse it.
export const getStringValueFromRequestBody = getValueFromRequestBody('');
export const getObjectValueFromRequestBody = getValueFromRequestBody({});

// This file formats out major data shape for our initial pipe.
export const getRequestArguments = (clientRequest) => ({
  method: getStringValueFromRequestBody(['method'], clientRequest),
  baseUrl: getStringValueFromRequestBody(['baseUrl'], clientRequest),
  comparisonUrl: getStringValueFromRequestBody(['comparisonUrl'], clientRequest),
  body: getObjectValueFromRequestBody(['postBody'], clientRequest),
});
