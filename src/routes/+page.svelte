<script lang="ts">
	import GrossSalary from '$widgets/GrossSalary.svelte';
	import Income from '$widgets/Income.svelte';

	let income = '100000';
</script>

<div class="flex flex-col gap-4">
	<Income bind:value={income} />
	<GrossSalary bind:value={income} />
</div>
