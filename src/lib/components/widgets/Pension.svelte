<script lang="ts">
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';

	export let value: string;
</script>

<Card header="Pension">
	<div>
		<input type="range" min="0" max="15000" step="200" bind:value class="range range-primary" />
	</div>

	<p class="mt-4 text-xl font-medium text-right text-primary">
		{formatterToSek.format(+value)}
	</p>
</Card>
