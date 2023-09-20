import BlogRoot from "./app/blog/page";
import CommentsPage from "./app/comments/page";
import Users from "./app/users/page";
import { createBrowserRouter } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom";
import { Route } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Home from "./app/page";
export default function Router() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogRoot />} />
        <Route path="/users" element={<Users />} />
        <Route path="/comments" element={<CommentsPage />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}
