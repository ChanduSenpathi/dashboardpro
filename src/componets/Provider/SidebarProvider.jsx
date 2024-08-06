import React, { createContext, useState } from 'react'

export const UserContext = createContext()

export default function SidebarProvider({children}) {
    const [show, setShow] = useState(false);

  const toggleSidebar = () => {
    setShow(!show);
  }
  return (
    <UserContext.Provider value={{ show, toggleSidebar }}>
      {children}
    </UserContext.Provider>
  )
}
