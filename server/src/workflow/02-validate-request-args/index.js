import { propEq, propSatisfies, allPass, when, pipe, not, or } from 'ramda';
import { isNotEmptyOrNil } from '../../utils/data';
import { postMethod, getMethod } from '../../constants/request';
import { returnErrorDataObject } from '../../utils/response';

/*
  propSatisfies sees if the property on the object meets the eval function.
  In our case, does the passed property have a null, undefined or empty value.
*/
export const propIsNotEmptyOrNil = (property) => propSatisfies(isNotEmptyOrNil, property);

/*
  propEq sees if the property's value equals the passed value.
  For isGetRequest, we are checking if the method prop equals 'GET'.
*/
export const isGetRequest = propEq('method', getMethod);
export const isPostRequest = propEq('method', postMethod);

/*
  allPass lets us check multiple evaluations against a data.
  This is similar to:  check1(data) && check2(data)  ==> true || false
  This checks for a request with a "POST" method and a body that is not empty.
*/
export const isValidPostRequest = allPass([isPostRequest, propIsNotEmptyOrNil('body')]);

/*
  or is the same as ||.
  Note that this function is not point-free. Data is not implicitly passed.
  We have to pass data to each eval function manually.
*/
export const isValidRequest = (data) => or(isGetRequest(data), isValidPostRequest(data));

/*
  Another allPass to evaluate our data against multiple checks.
  We are checking for valid request methods and payload.
  Additionally, we check for empty urls needed to make our api requests.
*/
const hasValidatedData = allPass([
  isValidRequest,
  propIsNotEmptyOrNil('baseUrl'),
  propIsNotEmptyOrNil('comparisonUrl'),
]);

/*
  When is equivalent to this function:
  (data) => myEval(data) ? myWhenFunction(data) : data

  Pipe passes the result of one property to another.

  pipe(returnsTrue, not) is equivalent to (data) => !(returnsTrue(data))

  Putting this together:
  1) This function checks to see if our data fails the validation check.
  2) If true, we format and return a data object to send tho the client.
  3) If false, the passed argument is returned.
*/
export const validateRequestArgs = when(
  pipe(hasValidatedData, not),
  returnErrorDataObject('Improper request arguments passed'),
);
