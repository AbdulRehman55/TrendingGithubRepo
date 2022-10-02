/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'

import Home from '../pages/Home/Home'
import NotFound from '../pages/NotFound/NotFound'

export default function Routes(): ReactNode {
    return useRoutes([
        { path: '404', element: <NotFound /> },
        {
            path: '/',
            element: <Home />,
        },

        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
