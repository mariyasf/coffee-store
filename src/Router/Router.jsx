import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffees from "../Components/AddCoffees";
import SeeDetails from "../Components/SeeDetails";
import UpdateCoffee from "../Components/UpdateCoffee";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/home",
                element: <Home />,
                loader: () => fetch('http://localhost:5000/coffee'),
            },
            {
                path: "/addCoffee",
                element: <AddCoffees />
            },
            {
                path: "/seeDetails/:id",
                element: <SeeDetails />
            },
            {
                path: "/update/:id",
                element: <UpdateCoffee />,
                loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`),

            },

        ]
    },
]);

export default router;