<script lang="ts">
	import Card from '$ui/Card.svelte';
	import CustomExpanseInput from '$ui/ExpenseInput.svelte';

	type ExpanseInput = {
		label: string;
		value: string;
	};

	const addExpanse = () => {
		expanses.push({ label: '', value: '' });
		expanses = expanses;
	};

	const removeExpanse = (i: number) => {
		expanses.splice(i, 1);
		expanses = expanses;
	};

	let expanses: ExpanseInput[] = [
		{
			label: 'Dator',
			value: ''
		},
		{
			label: 'Mobil',
			value: ''
		},
		{
			label: 'Mobilabonnemang',
			value: ''
		},
		{
			label: 'Utbildning',
			value: ''
		},
		{
			label: 'Friskvård',
			value: ''
		}
	];
</script>

<Card header="Utgifter">
	<div class="flex flex-col gap-2">
		{#each expanses as { label, value }, i}
			<CustomExpanseInput bind:label bind:value on:click={() => removeExpanse(i)} />
		{/each}
	</div>
	<div>
		<button class="w-full mt-2 btn btn-primary btn-outline" on:click={addExpanse}>
			Lägg till +
		</button>
	</div>
</Card>
