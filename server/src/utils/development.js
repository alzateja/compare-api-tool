/*
  We use this data to debug our functions in our pipes.
  Note: We always return the data at the end.
*/
export const consoleAndReturn = (functionName = '') => (data) => {
  console.log(
    `
__________________________________________
The following data was returned by the previous function: ${functionName}

${JSON.stringify(data)}

******************************************`,
  );

  return data;
};

export const consoleError = (error) =>
  console.log(
    `__________________________________________
encountered error - returning to client

${error}

******************************************`,
  );
