/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./main.html"], // Adjust paths as needed
    theme: {
        extend: {
            keyframes: {
                slideIn: {
                    'from': { transform: 'translateX(100%)', opacity: '0' },
                    'to': { transform: 'translateX(0)', opacity: '1' }
                },
                slideOut: {
                    'from': { transform: 'translateX(0)', opacity: '1' },
                    'to': { transform: 'translateX(100%)', opacity: '0' }
                }
            },
            animation: {
                'slide-in': 'slideIn 0.3s ease-out forwards',
                'slide-out': 'slideOut 0.3s ease-in forwards'
            }
        }
    },
    plugins: [],
};
