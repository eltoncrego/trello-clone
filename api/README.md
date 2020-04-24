# Project Structure 🏗

For the server, I wanted to keep things simple. I'm primarily a front-end developer, so this api was meant for me to just mock things while I build out the front-end app.

I'm using `nodemon` to keep the server auto-refreshing as I make code changes. All of the routing for the api is handled by `express`.

| File or folder   | Description                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/index.js`  | The entry file. This is where we init the server running on the port specified. |
| `src/`  | Pretty much everything else is divided into it's individual file for it's function. |