import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import { getTrendingRepos } from '../../services/repos'
import Logo from '../../components/Logo'

export default function Home(): JSX.Element {
    const columns: GridColDef[] = [
        { field: 'id' },
        { field: 'name', width: 200 },
        { field: 'url', width: 300 },
    ]
    const [rows, setRows] = useState([{ id: 0, name: '', url: '' }])
    const [loader, setLoader] = useState(true)

    async function getData(): Promise<any> {
        const response = await getTrendingRepos()
        setRows(response)
        setLoader(false)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <Box>
            <Typography
                pb={3}
                variant="h4"
                justifyContent="center"
                display="flex"
            >
                Current Trending Github Repositories
            </Typography>
            {loader && <Logo />}
            <Box
                style={{ height: 400, width: '100%' }}
                display="flex"
                justifyContent="center"
            >
                {!loader && (
                    <DataGrid
                        getRowId={(row) => row.id}
                        columns={columns}
                        rows={rows}
                        pageSize={10}
                        rowsPerPageOptions={[10]}
                    />
                )}
            </Box>
        </Box>
    )
}
