import { when, any } from 'ramda';
import { hasError } from '../../utils/data';
import { returnErrorDataObject } from '../../utils/response';

/*
  Checks to see if any request responses has "error" prop set to true.
  Our payload in this instance is [responseObject1, responseObject2]
  If any of the responses meet the criteria, it returns true
*/
export const anyResponseReturnedError = any(hasError);

/*
  When checks to see if our criteria, that any request has an error, is met.
  If true, we format and return a "error" object that we have defined.
  If false, the passed argument, meaning the original data passed, is returned.
*/
export const evaluateApiResponses = when(
  anyResponseReturnedError,
  returnErrorDataObject('One or more api calls failed')
  );
