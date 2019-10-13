<script>
export let dataset = Object.assign([], {
  dummy: true,
  columns: []
})

const SEARCH_RESULT_LIMIT = 100
let searchTerm = ''

$: columns = dataset.columns
$: results = dataset.filter(x => String(x.name)
                                .toLowerCase()
                                .indexOf(searchTerm.toLowerCase())
                              !== -1)
$: count = results.length
</script>

<style>
  h1 {
    color: purple;
  }
</style>

<h1>Simple anime search app</h1>

<div class="search">
  <input type="text" bind:value={searchTerm}>
  <span>Total results: {count}</span>
</div>

{#if dataset.dummy}
  Loading...
{:else}
  {#if count === 0}
    <p>No results found</p>
  {:else}
    <table>
      <thead>
      <tr>
      {#each columns as key}
        <th>{key}</th>
      {/each}
      </tr>
      </thead>
      <tbody>
      {#each results.slice(0, SEARCH_RESULT_LIMIT) as item}
        <tr>
        {#each columns as key}
          <td>{@html item[key]}</td>
        {/each}
        </tr>
      {/each}
      </tbody>
    </table>
    {#if count > SEARCH_RESULT_LIMIT}
      <p>I'm afraid I can't show that much results, or your browser will be slowed down</p>
    {/if}
  {/if}
{/if}
