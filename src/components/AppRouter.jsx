import React, { useContext } from 'react';
import { Redirect, Route, Routes } from "react-router-dom";
import { publicRoutes } from "../router/router.jsx";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    element={<route.element/>}
                    path={route.path}
                    exact={route.exact}
                    key={route.path}
                />
            )}
        </Routes>
    );
};

export default AppRouter;