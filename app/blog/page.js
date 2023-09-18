"use strict";

var React = require("react");
function BlogRoot() {
  return /*#__PURE__*/React.createElement("html", null, /*#__PURE__*/React.createElement("head", null, /*#__PURE__*/React.createElement("meta", {
    charSet: "utf-8"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/React.createElement("title", null, "Blog Root")), /*#__PURE__*/React.createElement("body", {
    style: {
      background: "#F1F6F9",
      fontFamily: "inter"
    }
  }, /*#__PURE__*/React.createElement("h1", null, "Hello from the Blog Root"), /*#__PURE__*/React.createElement("p", null, "Dynamic routes added too.")));
}
module.exports = BlogRoot;