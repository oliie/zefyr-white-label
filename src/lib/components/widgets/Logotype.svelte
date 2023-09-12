<script lang="ts">
	export let src: string;
	export let alt = '';
</script>

<div class="w-4/5 mx-auto my-8 justify-center flex">
	<img {src} {alt} />
</div>
