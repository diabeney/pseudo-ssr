// app/comments/page.jsx
import { jsx, jsxs } from "react/jsx-runtime";
function CommentsPage() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx("h2", { children: "This is the comments page" }),
    /* @__PURE__ */ jsxs("ul", { children: [
      /* @__PURE__ */ jsx("li", { children: "First comment" }),
      /* @__PURE__ */ jsx("li", { children: "Second comment" }),
      /* @__PURE__ */ jsx("li", { children: "Third comment" }),
      /* @__PURE__ */ jsx("li", { children: "Fourth comment" })
    ] })
  ] });
}
export {
  CommentsPage as default
};
