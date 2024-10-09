export default {
	scrollBehavior(to: any) {
		if (to.hash) {
			return new Promise((resolve, reject) => {
				setTimeout(() => {
					resolve({
						el: to.hash,
						behavior: 'smooth',
					});
				}, 500);
			});
		}
		return { top: 0 };
	},
};
