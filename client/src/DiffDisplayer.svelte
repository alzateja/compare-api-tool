<script>
  export let htmlResponse = '';
</script>

{#if htmlResponse !== ''}
  <div class="w-3/4 border border-gray-900 my-12">
    {@html htmlResponse}
  </div>
{/if}
