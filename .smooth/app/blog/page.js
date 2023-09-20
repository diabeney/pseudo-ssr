// app/blog/page.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function BlogRoot() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello from the Blog Root" }),
    /* @__PURE__ */ jsx("p", { children: "Dynamic routes added too." })
  ] });
}
export {
  BlogRoot as default
};
