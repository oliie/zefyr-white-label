<script lang="ts">
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';
	import Output from '$ui/Output.svelte';

	export let value: string;
</script>

<Card header="Sparande">
	<i class="pb-4 text-sm"
		>Kan användas till ledighet, arbetsrelaterade inköp, löneväxling, pension, kompetensutveckling,
		etc.</i
	>
	<input type="range" min="0" max="25000" step="500" bind:value class="range range-primary" />
	<Output>
		{formatterToSek.format(+value)}
	</Output>
</Card>
