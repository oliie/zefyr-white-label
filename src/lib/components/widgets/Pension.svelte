<script lang="ts">
	import { slide } from 'svelte/transition';
	import { formatterToSek } from '$lib/helpers';
	import Card from '$ui/Card.svelte';

	export let value: string;
	export let useItp1: boolean;
	export let output: number | string;
</script>

<Card header="Pension">
	<div class="w-full form-control">
		<label class="cursor-pointer label">
			<div class="flex flex-col">
				<span class="font-medium label-text">Tjänstepension enligt ITP 1</span>
			</div>
			<input type="checkbox" class="toggle toggle-primary" bind:checked={useItp1} />
		</label>
	</div>
	{#if !useItp1}
		<div transition:slide>
			<div class="divider" />
			<!-- content here -->
			<input type="range" min="0" max="10000" step="200" bind:value class="range range-primary" />
		</div>
	{/if}
	<p class="mt-4 text-xl font-medium text-right text-primary">
		{formatterToSek.format(useItp1 ? +output : +value)}
	</p>
</Card>
