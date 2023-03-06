import Admin from "../pages/Admin.jsx";
import Auds from "../pages/Auds.jsx";
import Dez from "../pages/Dez.jsx";
import Groups from "../pages/Groups.jsx";
import History from "../pages/History.jsx";


// export const privateRoutes = [
//     {path: '/about', component: About, exact: true},
// ]

export const publicRoutes = [
    {path: '/dez', element: Dez, exact: true},
    {path: '/admin', element: Admin, exact: true},
    {path: '/auds', element: Auds, exact: true},
    {path: '/groups', element: Groups, exact: true}, 
    {path: '/history', element: History, exact: true},
]