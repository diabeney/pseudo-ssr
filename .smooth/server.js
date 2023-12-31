// server.jsx
import express from "express";
import * as fs from "fs";
import * as path from "path";

// utils/index.js
function validateDynamicRouteName(dirName) {
  const isValid = dirName.match(/^\[\s*\S.*\S\s*\]$/gi);
  return isValid && isValid[0];
}

// server.jsx
import { renderToString, renderToPipeableStream } from "react-dom/server";
import { pathToFileURL } from "url";
import { jsx } from "react/jsx-runtime";
var router = express.Router();
var app = express();
app.use(express.static(".smooth"));
var PORT = 3e3;
var appDir = path.join(process.cwd(), ".smooth", "app");
function generateRoutes(dir, dirName = "") {
  const files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fpath = path.join(dir, file);
    const fstat = fs.statSync(fpath);
    if (fstat.isDirectory()) {
      const isDynamicRoute = validateDynamicRouteName(file);
      const routePath = isDynamicRoute ? `/${dirName}/:${isDynamicRoute.replace(/\[|\]/g, "").trim()}` : `/${file}`;
      const relativePathToFile = isDynamicRoute ? `/${dirName}/${file}` : `${file}`;
      router.get(routePath, async (_, res) => {
        const filePath = pathToFileURL(
          `./.smooth/app/${relativePathToFile}/page.js`
        );
        const Page = await import(filePath.href);
        const Component = Page.default;
        const html = `
          <!DOCTYPE html>
          <html>
             <head>
          <link rel="stylesheet" href="./main.css" />
          </head>
          <body>
            
          ${renderToString(/* @__PURE__ */ jsx(Component, {}))}
          <script src = './client.js' ></script>
          </body>
          </html>
        `;
        res.send(html);
      });
      generateRoutes(fpath, file);
    }
    if (fpath === path.join(appDir, "page.js")) {
      router.get("/", async (_, res) => {
        const filePath = pathToFileURL(`./.smooth/app/page.js`);
        const page = await import(filePath.href);
        const Component = page.default;
        const html = `
          <!DOCTYPE html>
          <html>
             <head>
          <link rel="stylesheet" href="./main.css" />
          </head>
          <body>
            
          ${renderToString(/* @__PURE__ */ jsx(Component, {}))}
          <script src = './client.js' ></script>
          </body>
          </html>
        `;
        res.send(html);
      });
    }
  }
}
generateRoutes(appDir);
app.use("/", router);
app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
