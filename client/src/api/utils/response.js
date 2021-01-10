export const returnResponse = (response) => ({
  error: false,
  response,
});

export const handleError = (errorDetails) => ({
  error: true,
  response: errorDetails.response.body,
});
