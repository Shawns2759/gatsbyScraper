import React from 'react'
import { Link } from "gatsby"
import styles from '../styles/global.css'

export default function Header() {
    return (
        <>
            <span className="flex m-1 p-2 border-b-2 border-solid border-gray-300 mb-10 justify-between ">
            <Link to="/">PalouseTechJobs</Link>
                <Link to="/">Home</Link>
            </span>
        </>
    )
}

{/* <Link to="/work/meter">Meter</Link>
                <Link to="/work/emsi">Emsi</Link>
                <Link to="/work/redballoon">Redballoon</Link> */}