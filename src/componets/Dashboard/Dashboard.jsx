import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import './Dashboard.css'
import Main from '../Main/Main'

export default function Dashboard() {
  return (
    <div className='d-flex h-100 w-100 main_container'>
        <Sidebar/>
        <Main/>
    </div>
  )
}
