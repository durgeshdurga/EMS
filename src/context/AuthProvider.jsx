// import React, { createContext, useEffect, useState } from 'react'
// import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

// export const AuthContext = createContext()

// const AuthProvider = ({ children }) => {
//     // localStorage.clear()

//     const [userData, setUserData] = useState(null)

//     useEffect(() => {
//         setLocalStorage()
//         const {employees} = getLocalStorage()
//         setUserData(employees)
//     }, [])
    
    

//     return (
//         <div>
//             <AuthContext.Provider value={[userData,setUserData]}>
//                 {children}
//             </AuthContext.Provider>
//         </div>
//     )
// }

// export default AuthProvider

import { createContext, useEffect, useState } from 'react';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        const { employees } = getLocalStorage() || { employees: [] }; // Default to empty array if no data
        setUserData(employees);
    }, []);

    useEffect(() => {
        if (userData.length > 0) {
            setLocalStorage(userData); // Save userData to localStorage whenever it changes
        }
    }, [userData]); // Update localStorage when userData changes

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
