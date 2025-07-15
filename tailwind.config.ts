import type { Config } from "tailwindcss";

export default {
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
				'2xl': '1400px'
			}
		},
		// Custom breakpoints matching your MUI theme
		screens: {
			'xs': '0px',
			'sm': '600px',
			'md': '1024px',
			'lg': '1367px',
			'xl': '1556px',
			'2xl': '1600px',
		},
		extend: {
			fontFamily: {
				'gotham': ['Gotham Pro', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'gotham-regular': ['Gotham Pro Regular', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'gotham-medium': ['Gotham Pro Medium', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'gotham-black': ['Gotham Pro Black', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				'poppins': ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
				sans: ['Gotham Pro Regular', 'ui-sans-serif', 'system-ui', 'sans-serif']
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					hover: 'hsl(var(--primary-hover))',
					light: 'hsl(var(--primary-light))',
					dark: 'hsl(var(--primary-dark))',
					'dark-background': 'hsl(var(--primary-dark-background))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))',
					hover: 'hsl(var(--secondary-hover))',
					light: 'hsl(var(--secondary-light))',
					dark: 'hsl(var(--secondary-dark))',
					'dark-background': 'hsl(var(--secondary-dark-background))'
				},
				warning: {
					DEFAULT: 'hsl(var(--warning))',
					foreground: 'hsl(var(--warning-foreground))',
					hover: 'hsl(var(--warning-hover))',
					light: 'hsl(var(--warning-light))',
					dark: 'hsl(var(--warning-dark))',
					'dark-background': 'hsl(var(--warning-dark-background))'
				},
				success: {
					DEFAULT: 'hsl(var(--success))',
					foreground: 'hsl(var(--success-foreground))',
					hover: 'hsl(var(--success-hover))',
					light: 'hsl(var(--success-light))',
					dark: 'hsl(var(--success-dark))'
				},
				error: {
					DEFAULT: 'hsl(var(--error))',
					foreground: 'hsl(var(--error-foreground))',
					hover: 'hsl(var(--error-hover))',
					light: 'hsl(var(--error-light))',
					dark: 'hsl(var(--error-dark))',
					'dark-background': 'hsl(var(--error-dark-background))'
				},
				info: {
					DEFAULT: 'hsl(var(--info))',
					foreground: 'hsl(var(--info-foreground))',
					hover: 'hsl(var(--info-hover))',
					light: 'hsl(var(--info-light))',
					dark: 'hsl(var(--info-dark))',
					'dark-background': 'hsl(var(--info-dark-background))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))',
					hover: 'hsl(var(--accent-hover))'
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
				},
				// Action colors
				action: {
					hover: 'hsl(var(--action-hover))',
					selected: 'hsl(var(--action-selected))',
					disabled: 'hsl(var(--action-disabled))',
					focus: 'hsl(var(--action-focus))'
				},
				// Table colors
				table: {
					header: 'hsl(var(--table-header))',
					row: 'hsl(var(--table-row))',
					border: 'hsl(var(--table-border))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontSize: {
				// Custom typography sizes matching your MUI theme
				'h1': ['6rem', { lineHeight: '7rem', fontWeight: 'normal' }],
				'h2': ['3.375rem', { lineHeight: '4rem', fontWeight: 'normal' }],
				'h3': ['2rem', { lineHeight: '3rem', fontWeight: 'normal' }],
				'h4': ['1.5rem', { lineHeight: '2.25rem', fontWeight: 'normal' }],
				'h5': ['1.125rem', { lineHeight: '2rem', fontWeight: 'normal' }],
				'h6': ['0.875rem', { lineHeight: '1.3125rem', letterSpacing: '0.15px', fontWeight: 'normal' }],
				'subtitle1': ['1.125rem', { lineHeight: '2rem', letterSpacing: '0.15px', fontWeight: 'normal' }],
				'subtitle2': ['0.875rem', { lineHeight: '1.3125rem', letterSpacing: '0.1px', fontWeight: 'normal' }],
				'body1': ['1rem', { lineHeight: '1.75rem', fontWeight: 'normal' }],
				'body2': ['0.875rem', { lineHeight: '1.5rem', fontWeight: 'normal' }],
				'body-bold1': ['1rem', { lineHeight: '1.75rem', letterSpacing: '1.5px', fontWeight: 'normal' }],
				'body-bold2': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '1.5px', fontWeight: 'normal' }],
				'caption': ['0.75rem', { lineHeight: '1.3125rem', letterSpacing: '0.4px', fontWeight: '400' }],
				'overline': ['0.75rem', { lineHeight: '1.5rem', letterSpacing: '1px', fontWeight: '400' }],
				'button-large': ['0.9375rem', { lineHeight: '1.625rem', letterSpacing: '0.46px', fontWeight: 'normal' }],
				'button-medium': ['0.875rem', { lineHeight: '1.5rem', fontWeight: 'normal' }],
				'button-small': ['0.8125rem', { lineHeight: '1.375rem', fontWeight: 'normal' }],
				'input-label': ['0.75rem', { lineHeight: '1.125rem', letterSpacing: '0.15px', fontWeight: 'normal' }],
				'helper-text': ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '0.4px', fontWeight: 'normal' }],
				'input-text': ['1rem', { letterSpacing: '0.15px', fontWeight: 'normal' }],
				'avatar-initial': ['1.25rem', { lineHeight: '2.5rem', fontWeight: 'normal' }],
				'chip': ['1rem', { lineHeight: '1.125rem', letterSpacing: '0.16px', fontWeight: '400' }],
				'tooltip': ['0.625rem', { lineHeight: '0.875rem', fontWeight: 'normal' }],
				'alert-title': ['1rem', { lineHeight: '150%', letterSpacing: '0.15px', fontWeight: 'normal' }],
				'table-header': ['0.875rem', { lineHeight: '1.5rem', letterSpacing: '0.17px', fontWeight: 'normal' }],
				'badge-label': ['0.75rem', { lineHeight: '1.25rem', letterSpacing: '0.14px', fontWeight: 'normal' }],
			},
			boxShadow: {
				// MUI elevation shadows
				'elevation-1': '0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)',
				'elevation-2': '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px rgba(0,0,0,0.14),0px 1px 5px 0px rgba(0,0,0,0.12)',
				'elevation-3': '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
				'elevation-4': '0px 2px 4px -1px rgba(0,0,0,0.2),0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)',
				'elevation-6': '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)',
				'elevation-8': '0px 5px 5px -3px rgba(0,0,0,0.2),0px 8px 10px 1px rgba(0,0,0,0.14),0px 3px 14px 2px rgba(0,0,0,0.12)',
				'elevation-12': '0px 7px 8px -4px rgba(0,0,0,0.2),0px 12px 17px 2px rgba(0,0,0,0.14),0px 5px 22px 4px rgba(0,0,0,0.12)',
				'elevation-16': '0px 8px 10px -5px rgba(0,0,0,0.2),0px 16px 24px 2px rgba(0,0,0,0.14),0px 6px 30px 5px rgba(0,0,0,0.12)',
				'elevation-24': '0px 11px 15px -7px rgba(0,0,0,0.2),0px 24px 38px 3px rgba(0,0,0,0.14),0px 9px 46px 8px rgba(0,0,0,0.12)',
			},
			keyframes: {
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
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
