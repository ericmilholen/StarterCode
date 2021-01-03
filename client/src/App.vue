<template>
	<div id="app">
		<NavBar></NavBar> 
		<RouterView />
	</div>
</template>

<script>
import NavBar from "../src/components/NavBar"
export default {
	components: {
		NavBar
	}
}
</script>