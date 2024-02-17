import React, { useMemo } from 'react'
import { MaterialReactTable } from 'material-react-table'
import { userData } from '../../data/data'
import { ThemeProvider, createTheme } from '@mui/material'
import './Datagrid.css'

const Datagrid = () => {
   const columns = useMemo(()=>[
    {
        accessorKey: "name.firstName",
        header: "First Name",
    },

    {
        accessorKey: "name.lastName",
        header: "Last Name",
    },
    {
        accessorKey: "address",
        header: "Address",
    },
    {
        accessorKey: "state",
        header: "State",
    },

   ], [])

   const theme = useMemo(()=>createTheme({
    pallette:{
        mode: "dark"
    } 
   }), [])
  return (
    <div className='table_container'>
        <ThemeProvider theme={theme}>
        <MaterialReactTable className='background' columns={columns} data={userData} />

        </ThemeProvider>


    </div>

  )
}

export default Datagrid