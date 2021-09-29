import React from "react"
import { graphql } from "gatsby"
import Layout from "../../components/layout";

const Redballoon = ({ data }) => {
    let jobs = data.allRedballoonJobs.nodes;
    let allJobs = jobs.map(el => {
      return <div className="flex flex-wrap  p-2 justify-center border-4 content-center sm:justify-between m-2 mb-12 borderHover sm:flex" key={el.id}>
                   <a href={el.jobLink} target="_blank" className="listing"><h3>{el.jobDescription}</h3></a>
                   <span className="w-full text-center sm:inline sm:w-auto">{el.date}</span>
               </div>
  
    })
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
    allRedballoonJobs {
      nodes {
        id
        jobDescription
        jobLink
        date
      }
    }
  }
`

export default Redballoon
