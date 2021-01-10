export const returnResponse = (response) => ({
  error: false,
  response: response.body,
});

export const handleError = (errorDetails) => ({
  error: true,
  status: errorDetails.status,
  message: errorDetails.response.body.message,
});
