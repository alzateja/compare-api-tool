import { propOr } from 'ramda';
import { hasError } from './data';

//  Our escape hatch. We use this to throw our errors intentionally.
export const ifErrorFoundThrowError = (data) => {
  // Check if { error: true } exists on data object.
  if (hasError(data)) {
    // Get message from the data object.
    // If not found, default to "An Unknown Error occurred!" text.
    const errorMessage = propOr('An Unknown Error occurred!', 'message', data);
    // Throw the error to be caught by our server.
    throw new Error(errorMessage);
  }
};
