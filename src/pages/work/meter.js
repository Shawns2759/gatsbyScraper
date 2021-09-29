
import React from "react"
import { graphql } from "gatsby"
import Layout from '../../components/layout' 
import styles from '../../styles/global.css'


const Meter = ({ data }) => {
  let jobs = data.allMeterJobs.nodes;
  let allJobs = jobs.map(el => {
    return <div className="flex flex-wrap  p-2 justify-center border-4 content-center sm:justify-between m-2 mb-12 borderHover sm:flex" key={el.id}>
                 <a href={el.jobLink} target="_blank" className="listing"><h3>{el.jobDescription}</h3></a>
                 <span className="w-full text-center sm:inline sm:w-auto">{el.date}</span>
             </div>

  })
//   .single{
//     background: #fff;
//     display: flex;
//     padding: 1rem 2rem 1rem 2rem;
//     margin: 1.5rem 2rem;
//     border-left: .5rem solid #fff;
//     justify-content: space-between;

// }


// @media (max-width: 456px) {
//   .single{
//     /* margin:1rem, 1rem; */
//     flex-wrap: wrap;
//     justify-content: center;
//     margin: 1rem;
//     padding: 1rem;
//   }
//   .scrapeDate{
//     margin-top: .5rem;
//   }
// };
  
  return (
    <div>
    <Layout>
      {allJobs}
      </Layout>
    </div>
  )
}

export const query = graphql`
  {
    allMeterJobs {
      nodes {
        date
        id
        jobDescription
        jobLink
      }
    }
  }
`

export default Meter
