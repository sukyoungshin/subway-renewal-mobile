/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './search.html',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'rgba(var(--color-transparent) / <alpha-value>)',
      white: {
        DEFAULT: 'var(--color-white)',
        light: 'var(--color-light-white)',
      },
      black: 'var(--color-black)',
      yellow: 'var(--color-yellow)',
      green: {
        DEFAULT: 'var(--color-green)',
        dark: 'var(--color-green-dark)',
      },
      grey: {
        DEFAULT: 'var(--color-grey)',
        light: 'var(--color-light-grey)',
      },
      brands: {
        kakao: 'var(--color-kakao)',
        facebook: 'var(--color-facebook)',
        google: 'rgb(var(--color-google) / <alpha-value>)',
      },
    },
    fontSize: {
      '2xs': ['0.625rem', { lineHeight: '1rem' }], // 10px, 16px
      xs: ['0.75rem', { lineHeight: '1rem' }], // 12px, 16px
      sm: ['0.875rem', { lineHeight: '1.25rem' }], // 14px, 20px
      base: ['1rem', { lineHeight: '1.5rem' }], // 16px, 24px
      lg: ['1.125rem', { lineHeight: '1.75rem' }], // 18px, 28px
      xl: ['1.25rem', { lineHeight: '1.75rem' }], // 20px, 28px
      '2xl': ['1.5rem', { lineHeight: '2rem' }], // 24px, 32px
    },
    placeholderColor: {
      grey: 'var(--color-grey)',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  extend: {
    accentColor: {
      green: 'var(--color-green)',
    },
  },
  safelist: [
    'u-no-scroll',
    'u-button-round',
    'u-text-ellipsis',
    'u-ellipsis-multiline',
    'c-divider',
    'c-custom-fieldset',
    'c-category-filter',
  ],
  plugins: [],
};
