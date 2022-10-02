/* eslint-disable prettier/prettier */
import * as React from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import { Box } from '@mui/material'

import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'

export default function Routes(): ReactNode {
    return useRoutes([
        // {
        //     path: '/dashboard',
        //     element: <PrivateRoute navLink="/" component={Dashboard} />,
        //     children: [
        //         {
        //             path: '',
        //             element: <div />,
        //         },

        //     ],
        // },
        { path: '404', element: <NotFound /> },
        {
            path: '/',
            element: <Login />,
        },

        {
            path: '*',
            element: <Navigate to="/404" />,
        },
    ])
}
