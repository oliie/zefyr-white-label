<script lang="ts">
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';

	export let salary: number;
	// $: taxes = Math.round(+value - grossSalary);
</script>

<Card header="Möjlig bruttolön">
	<div class="flex flex-col items-center gap-2">
		<span class="text-4xl font-medium text-primary">
			{formatterToSek.format(salary)}/mån
		</span>
		<!-- <div class="flex flex-col items-center">
			<span>Varav arbetsgivaravgifter:</span>
			<span class="font-medium">{formatterToSek.format(taxes)}</span>
		</div> -->
	</div>
</Card>
