const React = require("react");

function BlogRoot() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog Root</title>
      </head>
      <body style={{ background: "#F1F6F9", fontFamily: "inter" }}>
        <h1>Hello from the Blog Root</h1>
        <p>Dynamic routes added too.</p>
      </body>
    </html>
  );
}

module.exports = BlogRoot;
