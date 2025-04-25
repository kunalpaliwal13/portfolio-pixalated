
import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";


export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        navy: {
          DEFAULT: "#0f172a",
          dark: "#0c1424",
        },
      },
      backgroundImage: {
        'mountain-scape': "url('/lovable-uploads/eb8d6cba-3194-4135-b108-d9584801c24e.png')",
        'pixel-navy': "url('/lovable-uploads/d46db68b-6789-4d98-82eb-6bc8190d10dc.png')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-delayed': 'fadeIn 0.5s ease-in-out 0.3s forwards',
        'pixel-bounce': 'pixelBounce 0.5s infinite alternate',
        marquee: 'marquee 25s linear infinite',
      'marquee-reverse': 'marquee-reverse 10s linear infinite',
        'scroll-right': 'scroll-right 25s linear infinite',
        'scroll-right-reverse': "scroll-right-reverse 10s linear infinite"
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pixelBounce: {
          '0%': { transform: 'translateY(0px)' },
          '100%': { transform: 'translateY(-5px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-reverse': {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0%)' },
      },
        'scroll-right': {
        '0%': { transform: 'translateX(-50%)' },
        '100%': { transform: 'translateX(0%)' },
      },
        'scroll-right-reverse': {
        '0%': { transform: 'translateX(0%)' },
        '100%': { transform: 'translateX(-50%)' },
      },
      },
    },
  },
  plugins: [animate],
} satisfies Config;
