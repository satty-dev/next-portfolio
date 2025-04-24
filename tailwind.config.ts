module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/app/**/*.{js,ts,jsx,tsx}',
    ],
    darkMode: 'class', //ダークモードを有効化(ON/OFFの切り替え)
    theme: {
        extend: {
            keyframes: {
                gradient: {
                    '0%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                    '100%': { backgroundPosition: '0% 50%' },
                },
            },
            animation: {
                gradient: 'gradient 8s linear infinite',
            },
        },
    },
    plugins: [],
};
