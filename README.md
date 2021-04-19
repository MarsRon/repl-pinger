# [Repl Pinger](https://github.com/MarsRon/repl-pinger)

A [Node.js](https://nodejs.org) application that relays [UptimeRobot](https://uptimerobot.com) pings to repls on [Replit](https://replit.com).

## Installation

1. Create a Bash repl on Replit (Bash repls have newer node and npm versions)
2. Skip steps 3-4 with this command:
```sh
rm main.sh;git clone https://github.com/MarsRon/repl-pinger .;npm i --only=prod
```
3. Delete `main.sh`
4. Clone the this GitHub repo by running this in the shell:
```sh
git clone https://github.com/MarsRon/repl-pinger .
```
5. Install dependencies, run `npm i --only=prod` in the shell
6. Go to the 🔒 Secrets tab, and referencing `.env.example`, add the environment variables one by one (Sorry, AFAIK there's no other way to add envvars)
7. Start the repl and hope everything works
8. Create a new account on [uptimerobot.com](https://uptimerobot.com/signUp?ref=website-header) if you haven't, then create a new monitor
9. Apply these settings to it:
   - Monitor Type: HTTP(s)
   - Friendly name: REPL_NAME or whatever
   - URL (or IP): https://[REPL_NAME].[USERNAME].replit.co
   - Monitoring Interval: every 5 minutes
10. You might want to setup a Discord webhook for the monitor too, for which I suggest following [this useful guide](https://gist.github.com/Log1x/af2c1a9613d155477295f20eece406a3)
11. Hope that everything worked and have fun developing! 
## Links

[![Website](https://img.shields.io/badge/website-%232356ff.svg?style=for-the-badge)](https://marsron.github.io/repl-pinger/)
[![GitHub Repo](https://img.shields.io/badge/github%20repo-%23181711.svg?logo=github&style=for-the-badge&logoColor=white)](https://github.com/MarsRon/repl-pinger#readme)
[![Replit](https://img.shields.io/badge/replit-%23667881.svg?&logo=repl.it&style=for-the-badge&logoColor=white)](https://replit.com/@MarsRon/repl-pinger)

## License

This project is licensed under the MIT License. See [LICENSE.md](https://github.com/MarsRon/repl-pinger/blob/master/LICENSE.md) for details.
