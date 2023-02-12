import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import CommingSoon from "../Pages/Shared/CommingSoon/CommingSoon";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'comming',
                element: <CommingSoon/>
            }
        ]

    }
])
export default router;