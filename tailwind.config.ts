import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Protest_Guerrilla: ['Protest Guerrilla', 'sans-serif', '"Apple Color Emoji"'],
        Sedgwick_Ave: ['Sedgwick Ave', 'sans-serif', '"Apple Color Emoji"'],
        Rock_Salt: ['Rock Salt', 'sans-serif', '"Apple Color Emoji"'],
        Poppins: ['Poppins', 'sans-serif', '"Apple Color Emoji"'],
      },
      spacing: {
        '100': '190px',
        'spacetop': '20%',
      },
      screens: {
        'portrait': {
          'raw': '(orientation: portrait)'
        },
        'landscape': {
          'raw': '(orientation: landscape)'
        }
      }
    }
  },
  plugins: [],
};
export default config;
