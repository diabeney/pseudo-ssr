const express = require("express");
const fs = require("fs");
const path = require("path");
const {
  validateDynamicRouteName,
  transformJSX,
  sendDataToClient,
} = require("./utils/index");

const router = express.Router();

const appDir = path.join(__dirname, "app");

function getPage(dir) {
  const files = fs.readdirSync(dir);
  const page = files.find((item) => item === "page.jsx");
  return page && path.join(dir, page);
}

function generateRoutes(dir, dirName = "") {
  const files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fpath = path.join(dir, file);
    const fstat = fs.statSync(fpath);
    if (fstat.isDirectory()) {
      const isDynamicRoute = validateDynamicRouteName(file);
      if (isDynamicRoute) {
        const routePath = `/${dirName}/:${isDynamicRoute
          .replace(/\[|\]/g, "")
          .trim()}`;

        router.get(routePath, (_, res) => {
          const page = getPage(fpath);
          const newFile = path.join(fpath, "page.js");
          transformJSX(page, newFile);
          sendDataToClient(newFile, res);
        });
      }
      const page = getPage(fpath);
      if (page) {
        const newFile = path.join(fpath, "page.js");
        router.get(`/${file}`, (req, res) => {
          transformJSX(page, newFile);
          sendDataToClient(newFile, res);
        });
      }
      generateRoutes(fpath, file);
    }

    if (fpath === path.join(appDir, "page.jsx")) {
      router.get("/", (_, res) => {
        const newFile = path.join(appDir, "page.js");
        transformJSX(fpath, newFile);
        sendDataToClient(newFile, res);
      });
    }
  }
}

generateRoutes(appDir);

module.exports = router;
