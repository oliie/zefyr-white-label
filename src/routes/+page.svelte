<script lang="ts">
	import { browser } from '$app/environment';
	import Car from '$widgets/Car.svelte';
	import Expenses from '$widgets/Expenses.svelte';
	import GrossSalary from '$widgets/GrossSalary.svelte';
	import Income from '$widgets/Income.svelte';
	import Insurance from '$widgets/Insurance.svelte';
	import Pension from '$widgets/Pension.svelte';
	import Savings from '$widgets/Savings.svelte';
	import Vacation from '$widgets/Vacation.svelte';
	import { onMount } from 'svelte';
	import { scale } from 'svelte/transition';

	const payrollTax = 0.3142;
	const pensionTax = 0.2426;

	let ready = false;
	let income = '100000';
	let insurance = '1000';
	let pension = '2000';
	let savings = '5000';
	let vacation = 1500;
	let totalExpenses = 0;
	let car: number;

	let totalPension = 0;
	let totalSalary = 0;

	const getTotalExpenses = (e: CustomEvent) => (totalExpenses = e.detail);

	const calculateIncomeWithPayrollTax = (salary: number) => {
		return Math.round(salary / (1 + payrollTax));
	};

	onMount(() => (ready = true));

	$: output = +income - (+insurance + +savings + +totalExpenses + +car + +pension + +vacation);

	$: if (output) {
		totalPension = +pension + +pension * pensionTax;
		totalSalary = Math.round(calculateIncomeWithPayrollTax(output - totalPension));
	}
</script>

<svelte:head>
	<title>Zefyr | Lön</title>
</svelte:head>

{#if ready}
	<div class="flex flex-col gap-4" transition:scale>
		<Income bind:value={income} />
		<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
			<Expenses on:total={getTotalExpenses} />
			<Car bind:value={car} />
			<Pension bind:value={pension} />
			<Savings bind:value={savings} />
			<Vacation bind:value={vacation} {income} />
			<Insurance bind:value={insurance} />
		</div>
		<GrossSalary salary={totalSalary} />
	</div>
{/if}
