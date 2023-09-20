// app/page.jsx
import { Link } from "react-router-dom";
import { jsx, jsxs } from "react/jsx-runtime";
function Home() {
  return /* @__PURE__ */ jsxs("div", { id: "root", children: [
    /* @__PURE__ */ jsx("h1", { children: "Hello from the server!!" }),
    /* @__PURE__ */ jsx("p", { children: "write jsx on the server." }),
    /* @__PURE__ */ jsx("p", { children: "Transpile with esbuild" }),
    /* @__PURE__ */ jsx("p", { children: "Send to client with react-dom/server api" }),
    /* @__PURE__ */ jsx("p", { children: "Hydrate root" }),
    /* @__PURE__ */ jsx("section", { className: "links" })
  ] });
}
export {
  Home as default
};
