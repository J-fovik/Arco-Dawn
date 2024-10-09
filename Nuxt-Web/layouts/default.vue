<template>
	<div class="relative overflow-hidden">
		<zs-header></zs-header>
		<client-only>
			<!-- 右侧快捷栏 -->
			<!-- <zs-right-shortcut></zs-right-shortcut> -->
		</client-only>
		<slot></slot>
		<zs-footer></zs-footer>
	</div>
</template>
