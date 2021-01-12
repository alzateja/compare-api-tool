import { when, any, propEq } from 'ramda';

const returnErrorDataObject = (message) => (data) => ({
    error: true,
    message,
    data,
    });

const hasError = propEq('error', true);

const anyResponseReturnedError = any(hasError);

export const evaluateApiResponses = when(
  anyResponseReturnedError,
  returnErrorDataObject('One or more API calls failed')
  );
