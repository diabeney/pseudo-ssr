var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// app/page.jsx
var page_exports = {};
__export(page_exports, {
  default: () => Home
});
module.exports = __toCommonJS(page_exports);
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function Home() {
  const [count, setCount] = (0, import_react.useState)(0);
  function sayHello() {
    setCount((prev) => prev + 1);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "Hello from the server!!" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "write jsx on the server." }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Transpile with esbuild" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Send to client with react-dom/server api" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hydrate root" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: count }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick: sayHello, children: "Add One" })
    ] })
  ] });
}
