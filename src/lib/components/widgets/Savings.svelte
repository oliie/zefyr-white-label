<script lang="ts">
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';

	export let value: string;
</script>

<Card header="Sparande">
	<input type="range" min="0" max="25000" step="500" bind:value class="range range-primary" />
	<p class="mt-4 text-xl font-medium text-right text-primary">
		{formatterToSek.format(+value)}
	</p>
</Card>
