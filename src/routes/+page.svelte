<script lang="ts">
	import Car from '$widgets/Car.svelte';
	import Expenses from '$widgets/Expenses.svelte';
	import GrossSalary from '$widgets/GrossSalary.svelte';
	import Income from '$widgets/Income.svelte';
	import Insurance from '$widgets/Insurance.svelte';
	import Pension from '$widgets/Pension.svelte';

	let income = '100000';
	let insurance = '1243';
	let pension = '2000';
	let useItp1 = true;
	let totalExpenses: number;
	let car: number;

	const getTotalExpenses = (e: CustomEvent) => (totalExpenses = e.detail);
</script>

<svelte:head>
	<title>Zefyr | Lön</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<Income bind:value={income} />
	<Expenses on:total={getTotalExpenses} />
	<Car bind:value={car} />
	<Pension bind:value={pension} bind:useItp1 />
	<Insurance bind:value={insurance} />
	<GrossSalary bind:value={income} />
</div>
