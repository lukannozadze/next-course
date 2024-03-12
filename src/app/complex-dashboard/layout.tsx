import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
    users:ReactNode,
    revenue:ReactNode,
    notifications:ReactNode,
    login:ReactNode
}

export default function DashboardLayout({children,users,revenue,notifications,login}:Props) {
    const isLoggedIn = false;

  return isLoggedIn ? (
   <div>
    <div>{children}</div>
    <div style={{display:'flex'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
            <div>{users}</div>
            <div>{revenue}</div>
        </div>
        <div style={{display:'flex',flex:1}}>{notifications}</div>
    </div>
   </div>
  ): 
(
    login
    )
}
