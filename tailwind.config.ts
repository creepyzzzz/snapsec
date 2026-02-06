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
            },
        },
    },
    plugins: [],
};
export default config;
