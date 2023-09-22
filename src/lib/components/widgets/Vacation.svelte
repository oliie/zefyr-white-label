<script lang="ts">
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';

	export let value: number;
	export let income: string;

	let choice = 1;

	$: if (choice === 1) {
		value = Math.round(+income * 0.6 * 0.12);
	} else {
		value = Math.round(+income * 0.6 * 0.144);
	}
</script>

<Card header="Semester">
	<div class="join">
		<input
			class="flex-1 join-item btn"
			type="radio"
			bind:group={choice}
			value={1}
			aria-label="25 Dagar"
		/>
		<input
			class="flex-1 join-item btn"
			type="radio"
			bind:group={choice}
			value={2}
			aria-label="30 Dagar"
		/>
	</div>

	<p class="mt-4 text-xl font-medium text-right text-primary">
		{formatterToSek.format(value)}
	</p>
</Card>
