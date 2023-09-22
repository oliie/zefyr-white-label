<script lang="ts">
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';
	import Output from '$ui/Output.svelte';

	export let value: string;
</script>

<Card header="Pension">
	<div>
		<input type="range" min="0" max="15000" step="200" bind:value class="range range-primary" />
	</div>

	<Output>
		{formatterToSek.format(+value)}
	</Output>
</Card>
