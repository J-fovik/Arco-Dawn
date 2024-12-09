export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.hook('app:error', (error) => {
		clearError({ redirect: '/' });
	});
});
