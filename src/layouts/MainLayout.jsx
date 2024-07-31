import React,{useEffect} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import ScrollToTop from '../utils/scrollToTop'


function MainLayout() {
  return (
    <>
    <ScrollToTop />
    <Header />
    <main>
        <Outlet />
    </main>
    <Footer />
    </>
  )
}

export default MainLayout