var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// app/layout.jsx
var layout_exports = {};
__export(layout_exports, {
  default: () => MainLayout
});
function MainLayout({ path: path2 }) {
  console.log(path2);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("title", { children: "Blog Root" })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("body", { id: "_smooth", style: { background: "#F1F6F9", fontFamily: "inter" } })
  ] });
}
var import_jsx_runtime;
var init_layout = __esm({
  "app/layout.jsx"() {
    import_jsx_runtime = require("react/jsx-runtime");
  }
});

// utils/index.js
var require_utils = __commonJS({
  "utils/index.js"(exports, module2) {
    var fs2 = require("fs");
    var { renderToPipeableStream: renderToPipeableStream2 } = require("react-dom/server");
    function transformJSX(oldPath, filename) {
      return;
    }
    function sendDataToClient(newFile, res) {
      const Page = require(newFile);
      const ReturnValue = Page();
      const { pipe } = renderToPipeableStream2(ReturnValue, {
        onShellReady() {
          res.setHeader("content-type", "text/html");
          pipe(res);
        }
      });
      return;
    }
    function validateDynamicRouteName2(dirName) {
      const isValid = dirName.match(/^\[\s*\S.*\S\s*\]$/gi);
      return isValid && isValid[0];
    }
    module2.exports = { validateDynamicRouteName: validateDynamicRouteName2, transformJSX, sendDataToClient };
  }
});

// server.jsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var express = require("express");
var fs = require("fs");
var MainLayout2 = (init_layout(), __toCommonJS(layout_exports)).default;
var path = require("path");
var { validateDynamicRouteName } = require_utils();
var { renderToPipeableStream } = require("react-dom/server");
var router = express.Router();
var app = express();
app.use(express.static(".smooth"));
var PORT = 3e3;
app.listen(PORT, () => {
  console.log("server listening on port: " + PORT);
});
var appDir = path.join(process.cwd(), ".smooth/app");
function generateRoutes(dir, dirName = "") {
  const files = fs.readdirSync(dir);
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fpath = path.join(dir, file);
    const fstat = fs.statSync(fpath);
    if (fstat.isDirectory()) {
      const isDynamicRoute = validateDynamicRouteName(file);
      const dynamicRoutePath = isDynamicRoute && `/${dirName}/:${isDynamicRoute.replace(/\[|\]/g, "").trim()}`;
      const routePath = isDynamicRoute ? dynamicRoutePath : `/${file}`;
      router.get(routePath, (_, res) => {
        const Page = require(path.join(fpath, "page.js"));
        const Component = Page.default;
        const { pipe } = renderToPipeableStream(
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MainLayout2, { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(Component, {}) }),
          {
            onShellReady() {
              res.setHeader("content-type", "text/html");
              pipe(res);
            }
          }
        );
      });
      generateRoutes(fpath, file);
    }
    if (fpath === path.join(appDir, "page.js")) {
      router.get("/", (_, res) => {
        const { pipe } = renderToPipeableStream(/* @__PURE__ */ (0, import_jsx_runtime2.jsx)(MainLayout2, { path: fpath }), {
          bootstrapModules: ["./client.js"]
        });
        res.setHeader("content-type", "text/html");
        pipe(res);
      });
    }
  }
}
generateRoutes(appDir);
app.use("/", router);
