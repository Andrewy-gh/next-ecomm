import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-text': '#000000', // black
        'light-background': '#ffffff', // white
        'light-primary-button': '#8fb4ff', // blue
        'light-secondary-button': '#ebf1ff', // light blue
        'light-accent': '#ff8f94', // light red
        'dark-text': '#ffffff', // white
        'dark-background': '#05131a', // very dark blue
        'dark-primary-button': '#17287d', // dark blue
        'dark-secondary-button': '#180934', // dark purple
        'dark-accent': '#39177d', // purple
      },
      fontFamily: {
        head: ['var(--font-archivo-black)'],
        body: ['var(--font-archivo)'],
      },
      fontSize: {
        'step--2': 'clamp(0.69rem, calc(0.69rem + 0.01vw), 0.70rem)',
        'step--1': 'clamp(0.83rem, calc(0.81rem + 0.10vw), 0.94rem)',
        'step-0': 'clamp(1.00rem, calc(0.95rem + 0.25vw), 1.25rem)',
        'step-1': 'clamp(1.20rem, calc(1.11rem + 0.47vw), 1.67rem)',
        'step-2': 'clamp(1.44rem, calc(1.28rem + 0.78vw), 2.22rem)',
        'step-3': 'clamp(1.73rem, calc(1.48rem + 1.23vw), 2.96rem)',
        'step-4': 'clamp(2.07rem, calc(1.70rem + 1.87vw), 3.95rem)',
        'step-5': 'clamp(2.49rem, calc(1.93rem + 2.77vw), 5.26rem)',
      },
      width: {
        'text-wrapper': 'min(80ch, 100% - 2rem);',
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};

export default config;
