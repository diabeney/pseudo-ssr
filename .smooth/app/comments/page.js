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

// app/comments/page.jsx
var page_exports = {};
__export(page_exports, {
  default: () => CommentsPage
});
module.exports = __toCommonJS(page_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function CommentsPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "This is the comments page" }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "First comment" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Second comment" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Third comment" }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Fourth comment" })
    ] })
  ] });
}
