<template>
	<div>
		<comp-featured></comp-featured>
		<comp-content></comp-content>
	</div>
</template>

<script>

import compFeatured from './Featured';
import compContent from './Content';

export default {
	components: {
		compFeatured,
		compContent
	}
}
</script>