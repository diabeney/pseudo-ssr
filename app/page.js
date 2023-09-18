"use strict";

var React = require("react");
function Home() {
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/React.createElement("title", null, "My app")), /*#__PURE__*/React.createElement("body", {
    style: {
      background: "#F1F6F9",
      fontFamily: "inter"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Hello from the server!!"), /*#__PURE__*/React.createElement("p", null, "write jsx on the server."), /*#__PURE__*/React.createElement("p", null, "Transpile with babel"), /*#__PURE__*/React.createElement("p", null, "Send to client with react-dom/server api"), /*#__PURE__*/React.createElement("p", null, "Hydrate root")));
}
module.exports = Home;