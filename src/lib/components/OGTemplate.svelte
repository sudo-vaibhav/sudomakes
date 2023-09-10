<script>
	// can use to design: https://og-playground.vercel.app/
	export let text = 'SudoMakes';
	import { config, openGraph } from '$lib/config';
	const height = openGraph.height;
	const color = config.primaryColor;
	const barWidth = 140;
</script>

<div style="display:flex;height:100%;width:100%;background:white">
	<div style="left:0;top:0;bottom:0;width:{barWidth}px;position:absolute;display:flex;">
		<div
			style="display:flex;background:#064e3b;width:{height}px;justify-content:center;transform-origin:top left;transform:rotate(-90deg) translateX(-100%);border-bottom: 8px solid {color};padding:20px;"
		>
			<img src="https://sudomakes.art/logo.png" style="width:100px; height:100px;" alt="SudoMakes logo"/>
			<div style="font-size:80px;color:{color};font-weight:800;line-height:85%;margin-left:20px;">
				{config.headerTitle}
			</div>
		</div>
	</div>
	<div
		style="left:{barWidth}px;top:0;bottom:0;right:0;position:absolute;align-items:center;justify-content:center;margin:20px;font-size:80px;width:auto;text-align:center;background-color:white;color:black;line-height:1.4;line-height: 90%;font-family:'Open Sans',sans-serif;"
	>
		{text}
	</div>
</div>
