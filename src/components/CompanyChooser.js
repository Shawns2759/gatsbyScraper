
// const CompanyChooser = () => {
//     return ( 
//         <div className='companyBtnContainer'>
//             <Link to='/work/emsi' className='btn'>emsi</Link>
//             <Link to='/work/meter' className='btn'>meter</Link>
//             <Link to='/work/redballoon' className='btn'>redballoon</Link>
//         </div>
//      );
// }
 
// export default CompanyChooser;


import React from 'react'
import styles from '../styles/global.css'
import { Link } from "gatsby"

export default function Chooser() {
    return (
        <div className='flex justify-center my-12'>
           <Link to='/work/emsi' className='btn mx-4'>emsi</Link>
           <Link to='/work/meter' className='btn mx-4'>meter</Link>
           <Link to='/work/redballoon' className='btn mx-4'>redballoon</Link>
        </div>
    )
}
