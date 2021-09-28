
import React from "react"
import { useStaticQuery,graphql } from "gatsby"


const MeterJobs = () => {
    const data = useStaticQuery(
        graphql`
  {
    allMyNodeType {
      nodes {
        jobDescription
        jobLink
        date
        id
      }
    }
  }
`
)
let jobs = data.allMyNodeType.nodes

    let allJobs = jobs.map(el => {
        return <div key={el.id}>
            <a href={el.jobLink}> {el.jobDescription}</a>
            <span>{el.date}</span>
        </div>
    })
    return (
        <div>
            {allJobs}
        </div>
    )
}


export default MeterJobs

