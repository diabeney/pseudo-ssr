import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Blog Root</title>
      </head>
      <body id="_smooth" style={{ background: "#F1F6F9", fontFamily: "inter" }}>
        <Outlet />
      </body>
    </html>
  );
}
