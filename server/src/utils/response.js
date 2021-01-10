// We initialize the error message. We pass the data on call.
export const returnErrorDataObject = (message) => (data) => ({
  error: true,
  message,
  data,
});

export const notFoundHTML = () => `
<div class="p-3 flex flex-col bg-success-300 items-center">
	<p class="text-lg font-bold">Success!</p>
	<p>The items match!</p>
</div>
`;
