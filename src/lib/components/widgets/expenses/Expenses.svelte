<script>
	import Card from '$ui/Card.svelte';
	import Computer from './Computer.svelte';
	import Education from './Education.svelte';
	import Wellness from './Wellness.svelte';

	export let computer = '0';
	export let education = '0';
	export let wellness = '0';
</script>

<Card header="Utgifter">
	<div class="flex flex-col gap-4">
		<Computer bind:value={computer} />
		<Education bind:value={education} />
		<Wellness bind:value={wellness} />
	</div>
</Card>
