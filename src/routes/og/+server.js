// used the following as a reference: https://geoffrich.net/posts/svelte-social-image/
import OGTemplate from '$lib/components/OGTemplate.svelte';
import OpenSans from '$lib/fonts/OpenSans-ExtraBold.ttf';
import Saira from '$lib/fonts/Saira-ExtraBold.ttf';
import { Resvg } from '@resvg/resvg-js';
import Vibrant from 'node-vibrant';
import satori from 'satori';
import { html as toReactNode } from 'satori-html';
// const width = openGraph.width;
// const height = openGraph.height;

/** @type {import('./$types').RequestHandler} */
export const GET = async ({ url }) => {
	const text = url.searchParams.get('text') ?? 'SudoMakes';
	const subtext = url.searchParams.get('subtext') ?? 'SudoMakes';
	const logo = url.searchParams.get('logo') ?? 'https://sudomakes.art/logo.png';
	const colorProps = await Vibrant.from(logo)
		.getPalette()
		.then((p) => ({
			bgColor: url.searchParams.get('bgColor') || p.DarkVibrant.hex,
			textColor: url.searchParams.get('textColor') || p.LightVibrant.hex
		}));
	// console.log(light, 'light color');
	const result = OGTemplate.render({ text, subtext, logo, ...colorProps });
	const element = toReactNode(result.html);
	const mode = url.searchParams.get('mode') ?? 'og';
	// const element = toReactNode(`${result.html}<style>${result.css.code}</style>`);

	const svg = await satori(element, {
		fonts: [
			{ name: 'Saira', data: Buffer.from(Saira), style: 'bold' },
			{ name: 'Open Sans', data: Buffer.from(OpenSans), style: 'bold' }
		],
		height: mode === 'twitter' ? 600 : 630,
		width: 1200
	});

	const resvg = new Resvg(svg, {
		fitTo: {
			mode: 'width',
			value: 1200
		}
	});

	const image = resvg.render();

	return new Response(image.asPng(), {
		headers: {
			'content-type': 'image/png'
		}
	});
};
