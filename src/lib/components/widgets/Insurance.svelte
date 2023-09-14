<script lang="ts">
	import Card from '$ui/Card.svelte';
	import { formatterToSek } from '$lib/helpers';

	export let value: string;
</script>

<Card header="Försäkring">
	<div class="flex flex-col items-center gap-2">
		<p class="text-center">
			Schablonkostnad för sjukförsäkring, sjukvårdsförsäkring samt premiebefrielse
		</p>
		<!-- Baserat på 1000 kr schablon + 24.26% skatt -->
		<p class="self-end text-xl font-medium text-primary">{formatterToSek.format(+value)}/mån</p>
	</div>
</Card>
