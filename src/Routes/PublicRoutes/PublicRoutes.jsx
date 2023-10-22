import { createBrowserRouter } from "react-router-dom";
import Main from "../../Main/Main";

export const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>
        }
    ]
)