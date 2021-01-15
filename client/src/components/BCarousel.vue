<template>
	<div>
		<BCarousel
			id="carousel-1"
			v-model="slide"
			:interval="4000"
			controls
			indicators
			background="#ababab"
			img-width="1024"
			img-height="480"
			style="text-shadow: 1px 1px 2px #333;"
			@sliding-start="onSlideStart"
			@sliding-end="onSlideEnd"
		>
			<!-- For loop for slideObj array -->
			<BCarouselSlide
				v-for="(slideObj, index) in slideObjs"
				:key="index"
				:caption="slideObj.caption"
				:text="slideObj.text"
				:img-src="slideObj.imgSrc"
			/>
		</BCarousel>
	</div>
</template>

<script>
	export default {
		props: {
			slideObjs: {
				type: Array,
				required: true,
			}
		},

		data() {
			return {
				slide: 0,
				sliding: null
			}
		},
		methods: {
			onSlideStart(slide) {
				console.log(slide)
				this.sliding = true
			},
			onSlideEnd(slide) {
				console.log(slide)
				this.sliding = false
			}
		}
	}
</script>