import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div id="root">
      <h1>Hello from the server!!</h1>
      <p>write jsx on the server.</p>
      <p>Transpile with esbuild</p>
      <p>Send to client with react-dom/server api</p>
      <p>Hydrate root</p>
      <section className="links">
        {/* <section>
          <Link to="/blog">Blog</Link>
        </section>
        <section>
          <Link to="/users">Users</Link>
        </section>
        <section>
          <Link to="/comments">Comments</Link>
        </section> */}
      </section>
    </div>
  );
}
