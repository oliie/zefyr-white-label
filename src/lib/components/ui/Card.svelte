<script lang="ts">
	export let header = '';
</script>

<div class="card w-full bg-slate-500/5 shadow-xl p-4">
	{#if header}
		<div class="card-header mb-4">
			<h2 class="card-title">{header}</h2>
		</div>
	{/if}
	<slot />
</div>
