// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mermaid from 'astro-mermaid';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/architecture/duplicate-org': '/architecture/',
	},
	integrations: [
		mermaid({
			theme: 'base',
			autoTheme: true,
		}),
		starlight({
			title: 'Team Minipod Handbook',
			customCss: ['./src/styles/custom.css'],
			components: {
				Hero: './src/components/Hero.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Architecture',
					collapsed: false,
					items: [
						{ label: 'Overview', slug: 'architecture' },
						{ label: 'System Map', slug: 'architecture/system-map' },
						{ label: 'Fulfilled by Bolt', slug: 'architecture/fulfilled-by-bolt' },
						{ label: 'Fulfilled by Merchant', slug: 'architecture/fulfilled-by-merchant' },
						{ label: 'Sortation', slug: 'architecture/sortation' },
					],
				},
				{
					label: 'Backend Services',
					collapsed: false,
					items: [
						{ label: 'Silver', slug: 'backend-services/silver' },
						{ label: 'Optimate', slug: 'backend-services/optimate' },
						{ label: 'Pigeon', slug: 'backend-services/pigeon' },
						{ label: 'Alpine', slug: 'backend-services/alpine' },
						{ label: 'Blue', slug: 'backend-services/blue' },
						{ label: 'Core', slug: 'backend-services/core' },
					],
				},
				{
					label: 'Frontend Services',
					collapsed: false,
					items: [
						{ label: 'BVR', slug: 'frontend-services/bvr' },
						{ label: 'Galileo', slug: 'frontend-services/galileo' },
						{ label: 'Maverick', slug: 'frontend-services/maverick' },
						{ label: 'Sierra', slug: 'frontend-services/sierra' },
					],
				},
				{
					label: 'Hubble',
					collapsed: false,
					items: [
						{ label: 'Overview', slug: 'hubble/overview' },
						{ label: 'Services', slug: 'hubble/services' },
					],
				},
				{
					label: 'Jarvis',
					collapsed: false,
					items: [{ label: 'Overview', slug: 'jarvis/overview' }],
				},
				{
					label: 'Shipium',
					collapsed: false,
					items: [{ label: 'Overview', slug: 'shipium/overview' }],
				},
				{
					label: 'Glossary',
					collapsed: false,
					items: [
						{ label: 'Air Skip', slug: 'glossary/air-skip' },
						{ label: 'Appointment', slug: 'glossary/appointment' },
						{ label: 'ASN', slug: 'glossary/asn' },
						{ label: 'BeeSort', slug: 'glossary/beesorter' },
						{ label: 'Bill of Lading', slug: 'glossary/bill-of-lading' },
						{ label: 'CDU', slug: 'glossary/cdu' },
						{ label: 'Chain of Custody', slug: 'glossary/chain-of-custody' },
						{ label: 'Chute', slug: 'glossary/chute' },
						{ label: 'Customer Booking', slug: 'glossary/customer-booking' },
						{ label: 'Dominant Delivery Type', slug: 'glossary/dominant-delivery-type' },
						{ label: 'DSL', slug: 'glossary/dsl' },
						{ label: 'ECS', slug: 'glossary/ecs' },
						{ label: 'FBB', slug: 'glossary/fbb' },
						{ label: 'FBM', slug: 'glossary/fbm' },
						{ label: 'FSA', slug: 'glossary/fsa' },
						{ label: 'GBP', slug: 'glossary/gbp' },
						{ label: 'Heavy vs. Parcel', slug: 'glossary/heavy-vs-parcel' },
						{ label: 'IPU', slug: 'glossary/ipu' },
						{ label: 'Last Mile', slug: 'glossary/last-mile' },
						{ label: 'Manual Item', slug: 'glossary/manual-item' },
						{ label: 'Mid Mile', slug: 'glossary/mid-mile' },
						{ label: 'Number Masking', slug: 'glossary/number-masking' },
						{ label: 'Org Config', slug: 'glossary/org-config' },
						{ label: 'Origin Scan', slug: 'glossary/origin-scan' },
						{ label: 'POD', slug: 'glossary/pod' },
						{ label: 'Postal Area Sets', slug: 'glossary/postal-area-sets' },
						{ label: 'Route Code', slug: 'glossary/route-code' },
						{ label: 'RTW', slug: 'glossary/rtw' },
						{ label: 'Service Area', slug: 'glossary/service-area' },
						{ label: 'Sortation', slug: 'glossary/sortation' },
						{ label: 'Surcharges', slug: 'glossary/surcharges' },
						{ label: 'Timebox', slug: 'glossary/timebox' },
						{ label: 'Twin Org', slug: 'glossary/twin-org' },
						{ label: 'Zone', slug: 'glossary/zone' },
					],
				},
			],
		}),
	],
});
