<script lang="ts">
	import '../app.css';
	import Container from '$ui/Container.svelte';
	import Logotype from '$widgets/Logotype.svelte';
</script>

<Container>
	<Logotype src="/zefyr_logo.png" />
	<slot />
</Container>
