const { head, post } = require("axios").default;
require("dotenv").config();
const sites = process.env.SITES.split(/\s+/);

require("http").createServer(async (req, res) => {
	res.writeHead(200);
	res.end("okay");
	for (const site of sites) {
		try {
			const siteRes = await head(site, { timeout: 10000 });
			console.log(`${new Date().toISOString()} ${new URL(site).hostname}: ${siteRes.statusText}`);
		} catch(e) {
			console.log(`Website Down: ${new URL(site).hostname} - ${e.message}`);
			post(process.env.DISCORD_WEBHOOK, {
				content: `<@${process.env.OWNERID}>`,
				embeds: [{
					title: "SITE IS DOWN",
					description: `${site} is down\nStatus: \`${e}\``,
					color: 16013612
				}]
			}).catch(e => console.log("Webhook Error: " + e.message));
		}
	}
}).listen(3000);

console.log("Repl Pinger is now running!");