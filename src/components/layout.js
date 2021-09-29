import React from 'react'
// import Footer from './Footer'
import Header from './Header'
import CompanyChooser from './CompanyChooser'
import '../styles/global.css'

export default function Layout({children}) {
    return (
        <div className="content">
            <Header />
            <CompanyChooser/>
            <div>
                <span className='flex flex-col h-screen'>
                {children}
                </span>
            </div>
            {/* <Footer/> */}
        </div>
    )
}
