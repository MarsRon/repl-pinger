# [Repl Pinger](https://github.com/MarsRon/repl-pinger#readme)

A [Node.js](https://nodejs.org) application that relays [UptimeRobot](https://uptimerobot.com) pings to repls on [Replit](https://replit.com).



## Installation

1. Create a Bash repl on Replit (Bash repls have newer node and npm versions).

2. Run this command in the Shell:
```sh
rm main.sh;git clone https://github.com/MarsRon/repl-pinger .;npm i -D;npm run build
```

3. Go to the 🔒 Secrets tab, and referencing `.env.example`, add the environment variables one by one (Sorry, AFAIK there's no other way to add environment variables).

4. Start the repl and hope everything works.

5. Create a new account on [uptimerobot.com](https://uptimerobot.com/signUp) if you haven't, then create a new monitor.

6. Apply these settings to it:
   - Monitor Type: HTTP(s)
   - Friendly name: REPL_NAME or whatever
   - URL (or IP): https://[REPL_NAME].[USERNAME].replit.co
   - Monitoring Interval: every 5 minutes

7.  You might want to setup a Discord webhook for the monitor too, for which I suggest following [this useful guide](https://gist.github.com/Log1x/af2c1a9613d155477295f20eece406a3).

8.  Hope that everything worked and have fun developing!



## Links

[![GitHub](https://img.shields.io/badge/Github-%23181711.svg?logo=github&style=flat-square&logoColor=white "GitHub")](https://github.com/MarsRon/repl-pinger#readme)
[![Replit](https://img.shields.io/badge/Replit-%23667881.svg?&logo=repl-dot-it&style=flat-square&logoColor=white "Replit")](https://replit.com/@MarsRon/repl-pinger)



## License

This project is licensed under the MIT License. See [LICENSE.md](https://github.com/MarsRon/repl-pinger/blob/master/LICENSE.md) for details.
