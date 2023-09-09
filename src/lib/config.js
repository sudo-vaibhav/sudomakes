export const config = {
	title: 'Vaibhav Chopra',
	author: 'Vaibhav Chopra',
	headerTitle: 'SudoMakes',
	description: 'SudoMakes - Just Ship It!',
	language: 'en-us',
	theme: 'dark', // system, dark or light
	domain: 'http://www.piedpiper.com/',
	siteUrl: 'https://sudomakes.art',
	// siteRepo: 'https://github.com/akiarostami/sveltekit-tailwind-blog-starter',
	siteLogo: '/icon-512.png',
	// image: '/img/avatar.png',
	email: 'mailvaibhavchopra@gmail.com',
	github: 'https://github.com/sudo-vaibhav',
	twitter: 'https://twitter.com/sudomakes',
	// facebook: 'https://www.facebook.com/piedpipersv',
	youtube: 'https://www.youtube.com/@sudomakes',
	linkedin: 'https://www.linkedin.com/in/sudomakes/',
	locale: 'en-US',
	primaryColor: '#06a261',

	// supports buttondown, convertkit, emailoctopus, klaviyo, mailchimp, revue
	// use false or null to disable newsletter
	// check .env.example for settings needed values for each service
	newsletter: false,

	multiuser: false
};

export const user = {
	name: 'Vaibhav Chopra',
	// avatar value can be removed for image
	avatar: '/vaibhav.jpg',
	// twitter value can be removed for no link to twitter
	twitter: 'https://twitter.com/sudomakes'
};

export const navLinks = [
	// { href: '/about', title: 'About' },
	{ href: '/projects', title: 'Projects' },
	{ href: '/blog', title: 'Blog' }
];

export const openGraph = {
	enabled: true,
	width: 1200,
	height: 630
};

// supported systems: googleAnalytics, plausible, and simpleAnalytics
export const analytics = {
	googleAnalyticsId: '', // e.g. UA-000000-2 or G-XXXXXXX
	plausibleDomain: '', // e.g. pied-piper-blog.netlify.app
	simpleAnalytics: false // true or false
};

// supported providers: giscus, utterances
export const comment = {
	provider: 'giscus',
	giscus: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://giscus.app/
		repo: 'sudo-vaibhav/sudomakes',
		reposId: 'R_kgDOKRfE4A',
		category: 'General',
		categoryId: 'DIC_kwDOKRfE4M4CZM3X',
		mapping: 'pathname', // supported options: pathname, url, title
		reactionsEnabled: '1', // Emoji reactions: 1 = enable / 0 = disable
		// Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
		metadata: '0',
		// theme example: light, dark, dark_dimmed, dark_high_contrast
		// Place the comment box above the comments. options: bottom, top
		inputPosition: 'bottom',
		// Choose the language giscus will be displayed in. options: en, es, zh-CN, zh-TW, ko, ja etc
		lang: 'en',
		dataStrict: '0',
		loading: 'lazy',
		// theme example: light, dark, preferred_color_scheme, light_high_contrast, dark_high_contrast
		// light_protanopia, dark_protanopiam, light_tritanopia, dark_tritanopia, dark_dimmed, transparent_dark
		theme: 'light',
		// theme when dark mode
		darkTheme: 'dark',
		themeURL: ''
	},
	utterances: {
		// Visit the link below, and follow the steps in the 'configuration' section
		// https://utteranc.es/
		repo: 'akiarostami/sveltekit-tailwind-blog-starter',
		issueTerm: 'pathname', // supported options: pathname, url, title
		label: 'Comment 💬', // label (optional): Comment 💬
		// theme example: github-light, github-dark, preferred-color-scheme
		// github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light, gruvbox-dark"
		theme: 'github-light',
		// theme when dark mode
		darkTheme: 'github-dark'
	}
};
