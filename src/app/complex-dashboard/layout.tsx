import React, { ReactNode } from 'react'

type Props = {
    children:ReactNode,
    users:ReactNode,
    revenue:ReactNode,
    notifications:ReactNode
}

export default function DashboardLayout({children,users,revenue,notifications}:Props) {
  return (
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
  )
}
