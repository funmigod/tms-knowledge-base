// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Team Minipod Handbook',
			customCss: ['./src/styles/custom.css'],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Frontend',
					items: [
						{ label: 'BVR', slug: 'frontend/bvr' },
						{ label: 'Galileo', slug: 'frontend/galileo' },
						{ label: 'Maverick', slug: 'frontend/maverick' },
					],
				},
				{
					label: 'Backend',
					items: [
						{ label: 'Silver', slug: 'backend/silver' },
						{ label: 'Optimate', slug: 'backend/optimate' },
						{ label: 'Alpine', slug: 'backend/alpine' },
						{ label: 'Blue', slug: 'backend/blue' },
					],
				},
				{
					label: 'Core',
					items: [
						{ label: 'Overview', slug: 'core' },
						{ label: 'Core EH', slug: 'core/eh' },
					],
				},
				{
					label: 'Hubble',
					items: [{ label: 'Overview', slug: 'hubble/overview' }],
				},
				{
					label: 'Jarvis',
					items: [{ label: 'Overview', slug: 'jarvis/overview' }],
				},
				{
					label: 'Operations',
					items: [{ label: 'Operations', slug: 'operations' }],
				},
			],
		}),
	],
});
