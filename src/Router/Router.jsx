import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffees from "../Components/AddCoffees";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/addCoffee",
                element: <AddCoffees />
            },

        ]
    },
]);

export default router;