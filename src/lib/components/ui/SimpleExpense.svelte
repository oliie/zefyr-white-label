<script lang="ts">
	import NumberField from '$ui/NumberField.svelte';

	export let value: string;
	export let title: string;
	export let placeholder: string;
	export let id: string;
</script>

<div>
	<h3 class="pb-2 text-xl font-medium">{title}</h3>
	<NumberField {id} bind:value {placeholder} />
	<div class="mb-2 divider" />
</div>
