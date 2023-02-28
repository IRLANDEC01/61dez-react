import Admin from "../pages/Admin.jsx";
import Dez from "../pages/Dez.jsx";


// export const privateRoutes = [
//     {path: '/about', component: About, exact: true},
// ]

export const publicRoutes = [
    {path: '/dez', element: Dez, exact: true},
    {path: '/admin', element: Admin, exact: true},
]