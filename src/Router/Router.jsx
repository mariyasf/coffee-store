import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root/Root";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import AddCoffees from "../Components/AddCoffees";
import SeeDetails from "../Components/SeeDetails";
import UpdateCoffee from "../Components/UpdateCoffee";
import SignUp from "../Components/SignUp";
import SignIn from "../Components/SignIn";
import Users from "../Pages/Users/Users";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/home",
                element: <Home />,
                loader: () => fetch('https://coffee-store-server-livid-phi.vercel.app/coffee'),
            },
            {
                path: "/signup",
                element: <SignUp />
            },
            {
                path: "/signin",
                element: <SignIn />
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
                loader: ({ params }) => fetch(`https://coffee-store-server-livid-phi.vercel.app/coffee/${params.id}`),

            },
            {
                path: "/user",
                element: <Users />,
                loader: () => fetch('https://coffee-store-server-livid-phi.vercel.app/user'),

            },

        ]
    },
]);

export default router;