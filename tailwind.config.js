/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      sm: '0.8rem',
      base: '60px',  // change the text-base
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    screens: {
      sm: '480px',
      md: '768px', // @media (max-width: 768px)
      lg: '976px', // @media (max-width: 976px)
      xl: '1440px',
    },
    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    },
    // 扩展配置项，不覆盖tailwind原有的配置项
    extend: {
      colors: {
        myColor: '#b3b5ae',
        colorObject: {
          blue1: '#6ca4bd',
          blue2: '#046791'
        }
      }
    },
  },
  // help to create style-sheets with javascript
  plugins: [],
}
