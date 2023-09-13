<script lang="ts">
	export let label: string;
	export let value: string;
</script>

<div class="flex items-center gap-1">
	<input class="w-full input" type="text" bind:value={label} placeholder="Namn" />
	<input class="w-full text-right input" type="number" bind:value placeholder="kr" />
	<button class="text-xl text-primary btn btn-secondary btn-sm btn-ghost" on:click>&times;</button>
</div>
