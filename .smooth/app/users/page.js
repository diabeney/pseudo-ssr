// app/users/page.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function Users() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h1", { children: "This is the users page" }),
    /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("h4", { children: "You are seeing a list of all users" }),
      /* @__PURE__ */ jsxs("ul", { children: [
        /* @__PURE__ */ jsx("li", { children: "Thugger" }),
        /* @__PURE__ */ jsx("li", { children: "Travis Scott" }),
        /* @__PURE__ */ jsx("li", { children: "Gunna" }),
        /* @__PURE__ */ jsx("li", { children: "J Cole" }),
        /* @__PURE__ */ jsx("li", { children: "K Dot" })
      ] })
    ] })
  ] });
}
export {
  Users as default
};
