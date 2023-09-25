import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/hooks/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode:'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        SatoshiRegular :"satoshi-regular",
        SatoshiMedium:"satoshi-medium",
        SatoshiLight:"satoshi-light",
SatoshiItalic:"satoshi-italic",
SatoshiBold:"satoshi-bold",
SatoshiBlack:"satoshi-black",
      }
    },
  },
  plugins: [],
}
export default config
