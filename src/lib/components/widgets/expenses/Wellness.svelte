<script lang="ts">
	import SimpleExpense from '$ui/SimpleExpense.svelte';

	export let value: string;
</script>

<SimpleExpense title="Friskvård" id="wellness" placeholder="Ange pris för friskvård" bind:value />
