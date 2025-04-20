import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const Loading = "";
const Todo = lazy(() => import("../pages/todo/IndexPage"));

const root = createBrowserRouter([
    {
        path: "/",
        element: <Suspense fallback={Loading}><Todo/></Suspense>,
    }
]);

export default root;