import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx}", // Asegúrate de no excluir ningún archivo
  ],
  
  theme: {
    extend: {
      colors: {
        "janna": "#F2E6CF", 
        "sinbad": "#93BFB7",
        "bondiblue": "#387373",
        "eden": "#114C5F",
        "pinkish": "#C33C54",
            },
    },
    
},
  plugins: [],
};
export default config;
