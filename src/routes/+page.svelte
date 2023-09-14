<script lang="ts">
	import Car from '$widgets/Car.svelte';
	import Expenses from '$widgets/Expenses.svelte';
	import GrossSalary from '$widgets/GrossSalary.svelte';
	import Income from '$widgets/Income.svelte';
	import Insurance from '$widgets/Insurance.svelte';
	import Pension from '$widgets/Pension.svelte';
	import Savings from '$widgets/Savings.svelte';

	const payrollTax = 0.3142;
	const regularPensionLimit = 46437;

	let income = '100000';
	let insurance = '1000';
	let useItp1 = false;
	let pension = '2000';
	let savings = '5000';
	let totalExpenses = 0;
	let car: number;

	const getTotalExpenses = (e: CustomEvent) => (totalExpenses = e.detail);

	const calculateItpPension = (salary: number) => {
		if (salary > regularPensionLimit) {
			const pensionAboveLimit = (salary - regularPensionLimit) * 0.3;
			const pensionBelowLimit = regularPensionLimit * 0.045;

			return Math.round(pensionAboveLimit + pensionBelowLimit);
		} else {
			return Math.round(salary * 0.045);
		}
	};

	$: outputWithoutPension = +income - (+insurance + +savings + +totalExpenses + +car);
	$: grossSalaryWithoutPension = Math.round(outputWithoutPension / (1 + payrollTax));
	$: calculatedPension = useItp1 ? calculateItpPension(grossSalaryWithoutPension) : pension;
</script>

<svelte:head>
	<title>Zefyr | Lön</title>
</svelte:head>

<div class="flex flex-col gap-4">
	<Income bind:value={income} />
	<Expenses on:total={getTotalExpenses} />
	<Car bind:value={car} />
	<Pension bind:value={pension} bind:useItp1 output={calculatedPension} />
	<Savings bind:value={savings} />
	<Insurance bind:value={insurance} />
	<GrossSalary salary={grossSalaryWithoutPension} />
</div>
