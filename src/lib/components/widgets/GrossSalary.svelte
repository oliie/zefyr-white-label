<script>
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';

	export let value = '0';

	const payrollTax = 0.3142;

	$: grossSalary = Math.round(+value / (1 + payrollTax));
	$: taxes = Math.round(+value - grossSalary);
</script>

<Card header="Möjlig bruttolön">
	<div class="flex flex-col items-center gap-2">
		<span class="text-4xl font-medium text-primary">
			{formatterToSek.format(grossSalary)}
		</span>
		<div class="flex flex-col items-center">
			<span>Varav arbetsgivaravgifter:</span>
			<span class="font-medium">{formatterToSek.format(taxes)}</span>
		</div>
	</div>
</Card>
