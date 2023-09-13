<script lang="ts">
	import SimpleExpense from '$ui/SimpleExpense.svelte';

	export let value: string;
</script>

<SimpleExpense
	title="Utbildning"
	id="education"
	placeholder="Ange pris för utbildning"
	bind:value
/>
