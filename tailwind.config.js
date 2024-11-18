/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
	  "./src/**/*.{js,jsx,ts,tsx}",
	  "./public/index.html",
	],
	theme: {
	  extend: {
		borderRadius: {
		  lg: 'var(--radius)',
		  md: 'calc(var(--radius) - 2px)',
		  sm: 'calc(var(--radius) - 4px)',
		},
		colors: {
		  background: 'hsl(var(--background))',
		  foreground: 'hsl(var(--foreground))',
		  card: {
			DEFAULT: 'hsl(var(--card))',
			foreground: 'hsl(var(--card-foreground))',
		  },
		  popover: {
			DEFAULT: 'hsl(var(--popover))',
			foreground: 'hsl(var(--popover-foreground))',
		  },
		  primary: {
			DEFAULT: 'hsl(var(--primary))',
			foreground: 'hsl(var(--primary-foreground))',
		  },
		  secondary: {
			DEFAULT: 'hsl(var(--secondary))',
			foreground: 'hsl(var(--secondary-foreground))',
		  },
		  muted: {
			DEFAULT: 'hsl(var(--muted))',
			foreground: 'hsl(var(--muted-foreground))',
		  },
		  accent: {
			DEFAULT: 'hsl(var(--accent))',
			foreground: 'hsl(var(--accent-foreground))',
		  },
		  destructive: {
			DEFAULT: 'hsl(var(--destructive))',
			foreground: 'hsl(var(--destructive-foreground))',
		  },
		  border: 'hsl(var(--border))',
		  input: 'hsl(var(--input))',
		  ring: 'hsl(var(--ring))',
		  chart: {
			'1': 'hsl(var(--chart-1))',
			'2': 'hsl(var(--chart-2))',
			'3': 'hsl(var(--chart-3))',
			'4': 'hsl(var(--chart-4))',
			'5': 'hsl(var(--chart-5))',
		  },
		  'color-1': 'hsl(var(--color-1))',
		  'color-2': 'hsl(var(--color-2))',
		  'color-3': 'hsl(var(--color-3))',
		  'color-4': 'hsl(var(--color-4))',
		  'color-5': 'hsl(var(--color-5))',
		},
		animation: {
		  rainbow: 'rainbow var(--speed, 2s) infinite linear',
		  grid: 'grid 15s linear infinite',
		  meteor: 'meteor 5s linear infinite',
		  marquee: 'marquee var(--duration) infinite linear',
		  'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
		  gradient: 'shine 3s linear infinite',
		  shimmer: 'shimmer 3s linear infinite',
		  'flowing-gradient': 'flowing-gradient 3s ease-in-out infinite',
		  'gradient-flow': 'gradientFlow 5s ease-in-out infinite',
		},
		keyframes: {
		  rainbow: {
			'0%': { 'background-position': '0%' },
			'100%': { 'background-position': '200%' },
		  },
		  grid: {
			'0%': { transform: 'translateY(-50%)' },
			'100%': { transform: 'translateY(0)' },
		  },
		  meteor: {
			'0%': { transform: 'rotate(215deg) translateX(0)', opacity: '1' },
			'70%': { opacity: '1' },
			'100%': { transform: 'rotate(215deg) translateX(-500px)', opacity: '0' },
		  },
		  marquee: {
			from: { transform: 'translateX(0)' },
			to: { transform: 'translateX(calc(-100% - var(--gap)))' },
		  },
		  'marquee-vertical': {
			from: { transform: 'translateY(0)' },
			to: { transform: 'translateY(calc(-100% - var(--gap)))' },
		  },
		  shine: {
			to: { 'background-position': '200% center' },
		  },
		  shimmer: {
			'0%': { 'background-position': '200% 0' },
			'100%': { 'background-position': '-200% 0' },
		  },
		  'flowing-gradient': {
			'0%': { 'background-position': '0% 50%' },
			'50%': { 'background-position': '100% 50%' },
			'100%': { 'background-position': '0% 50%' },
		  },
		  gradientFlow: {
			'0%': { 'background-position': '0% 50%' },
			'50%': { 'background-position': '100% 50%' },
			'100%': { 'background-position': '0% 50%' },
		  },
		},
	  },
	},
	plugins: [require("tailwindcss-animate")],
  };
  