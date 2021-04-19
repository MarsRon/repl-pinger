require("dotenv").config();
const axios = require("axios").default;
const sites = process.env.SITES.split(" ");

require("http").createServer((req, res) => {
	for (const site of sites)
		axios.head(site, { timeout: 5000 })
			.then(res => console.log(`${new URL(site).hostname}: ${res.statusText}`))
			.catch(() =>
				axios.post(process.env.DISCORD_WEBHOOK, {
					content: `<@${process.env.OWNERID}>`,
					embeds: [{
						title: "SITE IS DOWN",
						description: `${site} is down`,
						color: 16013612
					}]
				})
			);
	res.write("ok");
	res.end();
}).listen(3000);

console.log("Repl Pinger is now running!");