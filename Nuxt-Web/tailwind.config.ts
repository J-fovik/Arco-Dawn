import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter var', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#0086F6',
			},
			maxWidth: {
				container: '1200px',
			},
		},
	},
	plugins: [daisyui],
};
