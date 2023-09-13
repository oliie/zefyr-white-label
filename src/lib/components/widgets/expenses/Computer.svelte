<script lang="ts">
	import SimpleExpense from '$ui/SimpleExpense.svelte';

	export let value: string;
</script>

<SimpleExpense title="Dator" bind:value id="computer" placeholder="Ange pris för dator" />
