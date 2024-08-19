/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,php}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: 'rgb(var(--primary))',
        secondary: 'rgb(var(--secondary))',
        accent1: 'rgb(var(--accent1))',
        accent2: 'rgb(var(--accent2))',
        accent3: 'rgb(var(--accent3))',
        accent4: 'rgb(var(--accent4))',
        accent5: 'rgb(var(--accent5))',
        accent6: 'rgb(var(--accent6))',
        accent7: 'rgb(var(--accent7))',
        neutral1: 'rgb(var(--neutral1))',
        neutral2: 'rgb(var(--neutral2))',
        neutral3: 'rgb(var(--neutral3))',
        neutral4: 'rgb(var(--neutral4))'
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1400px',
        xxxl: '1600px',
        '4xl': '1800px'
      },
      animation: {
        'spin-slow': 'spin 7s linear infinite'
      }
    }
  }
}

// accent2: #02050A
// accent3: #181A20
// accent4: #1E2329
// accent5: #09131D
// accent6: #0F1E2E
// neutral2: #F4F4F4
// neutral3: #EFEFEF
// neutral4: #DADADA
