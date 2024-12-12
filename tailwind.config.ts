import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");
const svgToDataUri = require("mini-svg-data-uri");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
  	container: {
  		center: true,
  		padding: '2rem',
  		screens: {
  			sm: '640px',
  			md: '768px',
  			lg: '1024px',
  			xl: '1280px',
  			'2xl': '1536px'
  		}
  	},
  	extend: {
  		transitionDuration: {
  			'2000': '2000ms',
  			'4000': '4000ms',
  			'10000': '10000ms'
  		},
  		backgroundSize: {
  			'10%': '10%',
  			'11%': '11%',
  			'12%': '12%',
  			'15%': '15%',
  			'25%': '25%',
  			'50%': '50%',
  			'60%': '60%',
  			'75%': '75%',
  			'90%': '90%',
  			'100%': '100%'
  		},
  		colors: {
  			heading: '#f12345',
  			paragraph: '#ffffff',
  			hoverBgColor: '#666565',
  			hoverTxtColor: '#000000',
  			dark: '#000000',
  			light: '#EDECE6',
  			darkerGray: '#DADBD4',
  			accent1: '#FACA32',
  			accent2: '#99BD31',
  			websiteBackground1: '#000000',
  			websiteBackground2: '#1D1D1B',
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		keyframes: {
  			aurora: {
  				from: {
  					backgroundPosition: '50% 50%, 50% 50%'
  				},
  				to: {
  					backgroundPosition: '350% 50%, 350% 50%'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			'fade-element-in': {
  				from: {
  					opacity: '0.1'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			'fade-element-out': {
  				from: {
  					opacity: '1'
  				},
  				to: {
  					opacity: '0.1'
  				}
  			},
  			'color-cycle': {
  				'0%, 100%': {
  					color: '#EDECE6'
  				},
  				'50%': {
  					color: '#FACA32'
  				}
  			}
  		},
  		animation: {
  			aurora: 'aurora 60s linear infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'fade-element-in': 'fade-element-in 0.3s ease-in',
  			'fade-element-out': 'fade-element-out 0.3s ease-out',
  			'color-cycle': 'color-cycle 1s linear infinite'
  		},
  		fontFamily: {
  			sans: [
  				'var(--font-sans)',
                    ...fontFamily.sans
                ]
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    require("tailwindcss-animated"),
  ],
} satisfies Config;

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
