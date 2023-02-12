import React, { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

type LayoutProps = {
    children: ReactNode
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <Header/>
        <div>{children}</div>
        <Footer/>
    </>
  )
}

export default Layout
