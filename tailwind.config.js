/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
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
  plugins: [],
}
