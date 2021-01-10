import { pipe } from 'ramda';
import { getRequestArguments } from '../workflow/01-get-request-args';
import { validateRequestArgs } from '../workflow/02-validate-request-args';
import { makeApiComparisonCalls } from '../workflow/03-api-comparison-calls';
import { evaluateApiResponses } from '../workflow/04-evaluate-api-responses';
import { generateJsonDiffs } from '../workflow/05-generate-json-diffs';
import { evaluateJsonDiffs } from '../workflow/06-evaluate-json-diffs';
import { ifErrorFoundThrowError } from '../utils/error';
// import { consoleAndReturn, consoleError } from '../utils/development';

/*
  A pipe function passes the return of the previous function automatically
  as an argument into our next function.

  This pipe below handles our passed request args.
*/
const getAndValidateRequestArgs = pipe(
  getRequestArguments,
  // consoleAndReturn('getRequestArguments'), // Used for local development
  validateRequestArgs,
);

/*
Another pipe function.
Pipe is declared point-free meaning it is written without a data variable.
The data being passed is implicit.
*/
const generateAndEvaluateDiffs = pipe(generateJsonDiffs, evaluateJsonDiffs);

// Our Main Handler
export const compareAPICalls = async (request) => {
  try {
    /*
      Process incoming request data and evaluate the data.
      This is a pipe of pure functions (if you comment out the console logs).
      On an error, we format an error object.
      ifErrorFoundThrowError will then evaluate the passed data.
      It throws an error, if it finds an error object.
      This is our escape hatch for errors.
    */
    const validatedRequestArgs = getAndValidateRequestArgs(request);
    // Escape Hatch 1: Check if error: true exists and throw an error if found.
    ifErrorFoundThrowError(validatedRequestArgs);

    // Make our api calls to compare the responses. Not pure due to api call.
    const comparisonApiResponses = await makeApiComparisonCalls(validatedRequestArgs);

    // Evaluate API responses for errors
    const evaluatedResponse = evaluateApiResponses(comparisonApiResponses);
    // Escape Hatch 2: Check if error: true exists and throw an error if found.
    ifErrorFoundThrowError(evaluatedResponse);

    // Evaluate responses for diffs. Sort of pure-ish.
    // This is due to external dependency on npm package.
    return generateAndEvaluateDiffs(evaluatedResponse);
  } catch (errorDetails) {
    // consoleError(errorDetails); // Used for local development.
    return errorDetails;
  }
};
