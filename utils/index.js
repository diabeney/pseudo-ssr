const babel = require("@babel/core");
const fs = require("fs");
const { renderToPipeableStream } = require("react-dom/server");

function transformJSX(oldPath, filename) {
  const value = babel.transformFileSync(oldPath).code;
  fs.writeFileSync(filename, value, "utf-8");
  return;
}

function sendDataToClient(newFile, res) {
  const Page = require(newFile);
  const ReturnValue = Page();
  const { pipe } = renderToPipeableStream(ReturnValue, {
    onShellReady() {
      res.setHeader("content-type", "text/html");
      pipe(res);
    },
  });
  return;
}

function validateDynamicRouteName(dirName) {
  const isValid = dirName.match(/^\[\s*\S.*\S\s*\]$/gi);
  return isValid && isValid[0];
}

module.exports = { validateDynamicRouteName, transformJSX, sendDataToClient };
