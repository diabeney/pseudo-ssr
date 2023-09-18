const React = require("react");

function Home() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My app</title>
      </head>
      <body style={{ background: "#F1F6F9", fontFamily: "inter" }}>
        <h1>Hello from the server!!</h1>
        <p>write jsx on the server.</p>
        <p>Transpile with babel</p>
        <p>Send to client with react-dom/server api</p>
        <p>Hydrate root</p>
      </body>
    </html>
  );
}

module.exports = Home;
