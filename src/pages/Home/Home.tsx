import React, { useEffect, useState } from 'react'
import { DataGrid, GridColDef } from '@mui/x-data-grid'
import { Box, Typography } from '@mui/material'
import { getTredingRepos } from '../../services/repos'

export default function Home(): JSX.Element {
    const columns: GridColDef[] = [
        { field: 'id' },
        { field: 'name', width: 200 },
        { field: 'url', width: 300 },
    ]
    const [rows, setRows] = useState([{ id: 0, name: '', url: '' }])

    async function getData(): Promise<any> {
        const response = await getTredingRepos()
        setRows(response)
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
            <Box
                style={{ height: 400, width: '100%' }}
                display="flex"
                justifyContent="center"
            >
                <DataGrid
                    getRowId={(row) => row.id}
                    columns={columns}
                    rows={rows}
                    pageSize={10}
                    rowsPerPageOptions={[10]}
                />
            </Box>
        </Box>
    )
}