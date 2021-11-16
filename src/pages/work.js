import React from "react"
import Layout from "../components/layout"

import works from '../works.json'
import './work.css'

const Work = () => {
    return (
        <Layout>
            <section id="work">
                <div id="content" className="bg-light">
                    <h1 className=" m-6 u-center">My Work Experiences</h1>
                    {
                        works.map((work, i) => {

                            return(
                                <WorkCard key={i} work={work}/>
                            )
                            
                        })
                    }
                    
                </div>
            </section>
        </Layout>
    )
}

export default Work

const WorkCard = (props) => {
    const title = props.work.title
    const company = props.work.company
    const companyLink = props.work.companyLink
    const demo = props.work.demo
    const timePeriod = props.work.timePeriod
    const image = props.work.thumbnail
    const md_text = props.work.content

    return (
        <div class="card">
            <div className="row">
                <div className="col-4 image p-4">
                    <img src={image} alt="work-thumbnail" />
                </div>
                <div className="col-8 p-4">
                    <h3>{title}</h3>
                    <a href={companyLink} rel="noopener noreferrer" target="_blank">@{company}</a>
                    <p id="timePeriod">{timePeriod}</p>
                    <p>{md_text}</p>
                    <p>Demo: <a href={demo} rel="noopener noreferrer" target="_blank">{demo}</a></p>
                </div>
            </div>
    </div>
    )
}