import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                border: "hsl(var(--border))",
                background: "hsl(var(--background))",
                foreground: "hsl(var(--foreground))",
                zinc: {
                    850: '#1f1f22',
                    950: '#09090b',
                }
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #27272a 1px, transparent 1px), linear-gradient(to bottom, #27272a 1px, transparent 1px)",
                'radial-gradient': 'radial-gradient(circle, var(--tw-gradient-stops))',
            },
            animation: {
                'spin-slow': 'spin 120s linear infinite',
                'marquee': 'marquee var(--marquee-duration, 40s) linear infinite',
                'marquee-reverse': 'marquee-reverse var(--marquee-duration, 60s) linear infinite',
            },
            keyframes: {
                marquee: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-33.3333%)' },
                },
                'marquee-reverse': {
                    '0%': { transform: 'translateX(-33.3333%)' },
                    '100%': { transform: 'translateX(0)' },
                },
            },
        },
    },
    plugins: [],
};
export default config;
