<script>
  import { Button, TextField, Select } from 'smelte';
  import { sendComparisonPostRequest } from './api/client.js';
  import 'smelte/src/tailwind.css';
  import DiffDisplayer from './DiffDisplayer.svelte';

  const defaultPostBody = '{ }';
  let method = 'GET';
  let baseUrl = 'http://localhost:3001/base';
  let comparisonUrl = 'http://localhost:3001/more';
  let postBody = defaultPostBody;
  let errorHTMLMessage = '';

  let html = '';
  const items = [
    { value: 'GET', text: 'GET' },
    { value: 'POST', text: 'POST' },
  ];

  const onMethodSelect = (event) => {
    method = event.detail;
    postBody = defaultPostBody;
    html = '';
    errorHTMLMessage = '';
  };

  const submitApiData = async () => {
    errorHTMLMessage = '';
    html = '';
    const formattedPostBody = JSON.parse(postBody);
    const diffResponse = await sendComparisonPostRequest({
      method,
      baseUrl,
      comparisonUrl,
      postBody: formattedPostBody,
    });
    if (diffResponse.error) {
      return (errorHTMLMessage = diffResponse.response.message);
    }
    return (html = diffResponse.response.text);
  };
</script>

<svelte:head>
  <title>API Comparision</title>
</svelte:head>
<div class="container flex flex-col items-center mt-8">
  <h3 class="font-bold">API Payload Comparison Tool</h3>

  <Select on:change={onMethodSelect} value={method} class="mt-6" outlined label="Request Method" {items} />

  {#if errorHTMLMessage !== ''}
    <div class="w-1/3 p-3  flex flex-col items-center border border-gray-900 my-4 rounded bg-error-300">
      <p class="text-lg font-bold">We found the following error:</p>
      <p>{errorHTMLMessage}</p>
    </div>
  {/if}

  <div class="w-1/2">
    <TextField label="Base Url" bind:value={baseUrl} />
  </div>

  <div class="w-1/2">
    <TextField label="Comparison Url" bind:value={comparisonUrl} />
  </div>

  {#if method === 'POST'}
    <div class="w-1/2">
      <TextField label="Post Body Input" textarea rows="5" outlined bind:value={postBody} />
    </div>
  {/if}

  <div class="py-2">
    <Button on:click={submitApiData} style="flex-grow: 3">Submit</Button>
  </div>

  <DiffDisplayer htmlResponse={html} />
</div>
