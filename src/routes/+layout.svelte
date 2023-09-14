<script lang="ts">
	import '../app.css';
	import Container from '$ui/Container.svelte';
	import Logotype from '$widgets/Logotype.svelte';
</script>

<Container>
	<Logotype src="https://pixelcode.se/wp-content/uploads/2023/01/pc_logo_web_1.png" />
	<slot />
</Container>
