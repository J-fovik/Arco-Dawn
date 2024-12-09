<template>
	<zs-base-modal
		content-class="w-[1100px]"
		title="毕业之家升学规划系统用户协议"
		align-center
		@cancel="$emit('cancel')"
	>
		<zs-personal-agreement />
	</zs-base-modal>
</template>
