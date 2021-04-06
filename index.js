const axios = require("axios").default;
const app = require("express")();

app.all("/", (req, res) => {
	for (const site of process.env.SITES.split(" "))
		axios.head(site).then(res => {
			const domain = new URL(site).hostname;
			if (res < 200 || res >= 300)
				axios.post(process.env.WEBHOOK, {
					content: `<@${process.env.USERID}>`,
					embeds: [{
						title: "SITE IS DOWN",
						description: `\`${domain}\` is down: ${res.status}`,
						color: 16013612
					}]
				});
			console.log(`${domain}: ${res.status}`);
		}).catch(e => console.log(e.message));
	res.send("ok");
});

app.listen(3000);