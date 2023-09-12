<script>
	import Card from '$ui/Card.svelte';
	import NumberField from '$ui/NumberField.svelte';

	export let value = '';
</script>

<Card header="Intäkt">
	<NumberField id="income" placeholder="Ange intäkt..." {value} large />
</Card>
