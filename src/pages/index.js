import * as React from "react"
import { Link } from "gatsby"
import '../styles/global.css'
import Layout from "../components/layout"
import Seo from "../components/seo"

// We know that the job hunt can be gruleing so we coded this little tool to make life easier. 
// Palouse Tech Jobs was made to bridge the gap of employee hungry businesses and job searching indiv
// iduals!
// The tech scene in our little corner of paradise has blown up in the last couple years with
//             employers moving here to get away from over restrictive local governments and bad living conditions. That is why it is so important to be up to date on the local job market and to snatch up the good paying jobs while they are avalable. 
const IndexPage = () => (
  <Layout>

    <div className='m-6 mt-8  justify-center ml-auto mr-auto w-1/2 leading-10'><h1 className='text-6xl text-center mb-14'>Home</h1><p className='text-center font-xl m-6'>We know that the job hunt can be gruleing so we coded this little tool to make life easier.</p> 
    <p className="text-center m-6">Palouse Tech Jobs was made to bridge the gap of employee hungry businesses and job searching individuals!</p>
      <p className='text-center m-6 leading-10' >The tech scene in our little corner of paradise has blown up in the last couple years with
    employers moving here to get away from over restrictive local governments and bad living conditions. 
    That is why it is so important to be up to date on
        the local job market and to snatch up the good paying jobs while they are avalable.</p>
 </div>
  </Layout>
)

export default IndexPage
