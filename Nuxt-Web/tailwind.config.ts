import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';
import daisyui from 'daisyui';

export default <Partial<Config>>{
	theme: {
		extend: {
			fontFamily: {
				sans: ['Source Han Sans CN', 'Source Han Sans CN', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#0086F6',
			},
			maxWidth: {
				container: '1200px',
			},
			animation: {
				'fade-in-left': 'fadeInLeft 1s linear 0.2s 1 alternate both',
				'fade-in-right': 'fadeInRight 1s linear 0.2s 1 alternate both',
				'bounce-small': 'bounceSmall 1.5s linear 0.2s infinite',
			},
			keyframes: {
				fadeInLeft: {
					'0%': {
						opacity: '0',
						transform: 'translateX(-1000px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				fadeInRight: {
					'0%': {
						opacity: '0',
						transform: 'translateX(1000px)',
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)',
					},
				},
				bounceSmall: {
					'0%, 100%': {
						transform: 'translateY(-10%)',
					},
					'50%': {
						transform: ' translateY(0)',
					},
				},
			},
		},
	},
	plugins: [daisyui],
};
