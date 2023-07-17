/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        primary1: '#363738',
        secondary: '#F5F5F5',
        secondary1: '#FEFAF1',
        secondary2: '#DB4444',
        text: '#FAFAFA',
        button1: '#00FF66',
        button2: '#DB4444',
        hover1: '#E07575',
        hover2: '#A0BCE0'
      }
    }
  },
  plugins: []
}
