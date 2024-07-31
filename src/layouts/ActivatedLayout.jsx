import React,{useEffect} from 'react'
import { Outlet } from 'react-router-dom'


function activatedLayout() {
  return (
    <>
    <main>
        <Outlet />
    </main>
    </>
  )
}

export default activatedLayout