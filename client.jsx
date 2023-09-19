import { hydrateRoot } from "react-dom/client";
import MainLayout from "./app/layout";

hydrateRoot(document, <MainLayout path={window.location.pathname} />);
