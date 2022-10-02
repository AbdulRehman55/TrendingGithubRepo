import React from 'react'
import { Box } from '@mui/material'
import LogoIcon from '../../img/Logo.png'

export default function Logo(): JSX.Element {
    return (
        <Box sx={{ pt: 1, pl: 2 }}>
            <img src={LogoIcon} alt="Logo" />
        </Box>
    )
}
