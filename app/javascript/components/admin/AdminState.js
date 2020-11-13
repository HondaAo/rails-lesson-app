import React, { createContext, useState } from 'react'

export const AdminContext = createContext();


const AdminState = ({children}) => {
 const [ adminInfo, setAdminInfo ] = useState(null)
    return (
        <AdminContext.Provider value={{ adminInfo, setAdminInfo }}>
            {children}
        </AdminContext.Provider>
    )
}

export default AdminState
