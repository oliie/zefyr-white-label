<script lang="ts">
	import Card from '$ui/Card.svelte';
	import ExpenseInput from '$ui/ExpenseInput.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let expenses: ExpenseInput[] = [
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

	type ExpenseInput = {
		label: string;
		value: string;
	};

	const dispatchExpenses = () => {
		const totalExpenses = expenses.reduce((acc, { value }) => {
			acc += value ? parseInt(value) : 0;
			return acc;
		}, 0);

		dispatch('total', totalExpenses);
	};

	const addExpense = () => {
		expenses.push({ label: '', value: '' });
		expenses = expenses;
	};

	const removeExpense = (i: number) => {
		expenses.splice(i, 1);
		expenses = expenses;
	};
</script>

<Card header="Utgifter">
	<div class="flex flex-col gap-2">
		{#each expenses as { label, value }, i}
			<ExpenseInput
				on:input={dispatchExpenses}
				bind:label
				bind:value
				on:click={() => removeExpense(i)}
			/>
		{/each}
	</div>
	<div>
		<button class="w-full mt-2 btn btn-primary btn-outline" on:click={addExpense}>
			Lägg till +
		</button>
	</div>
</Card>
