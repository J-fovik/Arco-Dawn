<template>
	<div style="width: 100%">
		<div class="container">
			<div class="circle hour">
				<svg>
					<circle
						:cx="circleRadius"
						:cy="circleRadius"
						:r="circleRadius"
						:style="{
							strokeDashoffset: strokeDasharray - (strokeDasharray * hour) / 12,
						}"
					></circle>
				</svg>
				{{ hour.toString().padStart(2, '00') }}
				<div class="text">HOURS</div>
			</div>
			<div class="circle minutes">
				<svg>
					<circle
						:cx="circleRadius"
						:cy="circleRadius"
						:r="circleRadius"
						:style="{
							strokeDashoffset: strokeDasharray - (strokeDasharray * minutes) / 60,
						}"
					></circle>
				</svg>
				{{ minutes.toString().padStart(2, '00') }}
				<div class="text">MINUTES</div>
			</div>
			<div class="circle seconds">
				<svg>
					<circle
						:cx="circleRadius"
						:cy="circleRadius"
						:r="circleRadius"
						:style="{
							strokeDashoffset: strokeDasharray - (strokeDasharray * seconds) / 60,
						}"
					></circle>
				</svg>
				{{ seconds.toString().padStart(2, '00') }}
				<div class="text">SECONDS</div>
			</div>
			<!-- <div class="ap">{{ AP[ap] }}</div> -->
		</div>
	</div>
</template>
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const circleRadius = 75;
const strokeDasharray = 471;
let timer: number = 0;

enum AP {
	'AM',
	'PM',
}

const getCurrentTime = () => {
	const date = new Date();
	const _24h = date.getHours();
	const h = _24h % 12;
	const m = date.getMinutes();
	const s = date.getSeconds();
	const ap = _24h >= 12 ? AP.PM : AP.AM;
	return { h, m, s, ap };
};

const currentTime = getCurrentTime();
const hour = ref<number>(currentTime.h);
const minutes = ref<number>(currentTime.m);
const seconds = ref<number>(currentTime.s);
const ap = ref<AP>(currentTime.ap);

onMounted(() => {
	timer = window.setInterval(() => {
		const { h, m, s, ap: newAp } = getCurrentTime();

		hour.value = h;
		minutes.value = m;
		ap.value = newAp;
		if (s !== seconds.value) {
			seconds.value = s;
		}
	}, 1000);
});

onUnmounted(() => {
	timer && clearInterval(timer);
});
</script>

<style scoped lang="less">
.container {
	display: flex;
	align-items: center;
	justify-content: space-around;
	height: 314px;
	position: relative;

	.circle {
		box-sizing: border-box;
		width: 150px;
		height: 150px;
		font-size: 40px;
		font-weight: 500;
		display: flex;
		justify-content: center;
		align-items: center;
		border: 6px solid #191919;
		border-radius: 50%;
		user-select: none;
		position: relative;

		svg {
			position: absolute;
			width: 150px;
			height: 150px;
			border-radius: 50%;
			top: -6px;
			left: -6px;
			transform: rotate(-90deg);

			circle {
				width: 100%;
				height: 100%;
				fill: transparent;
				stroke-width: 6px;
				stroke-dasharray: 471;
			}
		}
	}

	.hour {
		svg {
			circle {
				stroke: #ff2972;
			}
		}
	}

	.minutes {
		svg {
			circle {
				stroke: #fee800;
			}
		}
	}

	.seconds {
		svg {
			circle {
				stroke: #04fc43;
			}
		}
	}

	.text {
		position: absolute;
		font-size: 12px;
		font-weight: 400;
		width: 66px;
		text-align: center;
		color: #cccccc;
		left: 0;
		right: 0;
		bottom: 22px;
		margin: 0 auto;
	}

	.ap {
		font-size: 20px;
		font-weight: 500;
		height: 150px;
	}
}
</style>
