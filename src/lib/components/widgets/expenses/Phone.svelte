<script lang="ts">
	import NumberField from '$ui/NumberField.svelte';

	export let phoneValue: string;
	export let subscriptionValue: string;
</script>

<div>
	<h3 class="pb-2 text-xl font-medium">Mobiltelefon</h3>

	<NumberField
		label="Telefon"
		id="phone"
		bind:value={phoneValue}
		placeholder="Ange pris för mobil"
	/>

	<NumberField
		label="Abonnemang"
		id="subscription"
		bind:value={subscriptionValue}
		placeholder="Ange pris för abonnemang"
	/>
	<div class="mb-2 divider" />
</div>
