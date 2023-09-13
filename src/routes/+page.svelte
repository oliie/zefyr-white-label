<script lang="ts">
	import Car from '$widgets/Car.svelte';
	import GrossSalary from '$widgets/GrossSalary.svelte';
	import Income from '$widgets/Income.svelte';
	import Insurance from '$widgets/Insurance.svelte';
	import Pension from '$widgets/Pension.svelte';
	import Expenses from '$widgets/expenses/Expenses.svelte';

	let insurance = '1000';
	let income = '100000';
	let pension = '2000';
	let useItp1 = true;
</script>

<svelte:head>
	<title>Zefyr | Lön</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<Income bind:value={income} />
	<Expenses />
	<Car />
	<Pension bind:value={pension} bind:useItp1 />
	<Insurance bind:value={insurance} />
	<GrossSalary bind:value={income} />
</div>
