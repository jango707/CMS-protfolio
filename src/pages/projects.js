import React from "react"
import Layout from "../components/layout"

import projects from '../posts.json'
import wordsCount from 'words-count';
import './projects.css'

const Projects = () => {
    function onCardClick(e){
        window.location.assign("/project/" + e.target.getAttribute('name'))
    }
    return (
        <Layout>
            <section id="projects">
                <div id="content" class="bg-light">
                    <h1 class=" m-4 u-center">My Projects</h1>

                    <div className="row">
                        {
                            projects.map((project, i) => {
                                return(
                                    <div key={i} className="col-lg-3 u-text-left col-md-4 col-sm-6 col-xs-12">
                                        <ProjectCard onClick={onCardClick}  project={project}/>
                                    </div>                                               
                                )
                            })
                        }                        
                    </div>           
                </div>           
            </section>
        </Layout>
    )
}

export default Projects


const ProjectCard = (props) => {
    const title = props.project.title
    const date = props.project.date
    const image = props.project.thumbnail
    const md_text = props.project.content
    const demo = props.project.demo
    const description = props.project.description
    const slug = convertToSlug(title)

    const totalNumWords = wordsCount(md_text)
    var secondsToRead = Math.round((totalNumWords / 250) * 60 + 1)
    var minutesToRead = 0

    while (secondsToRead >= 60){
        minutesToRead++
        secondsToRead ^= 60
    }

    function convertToSlug(Text)
    {
        return Text
            .toLowerCase()
            .replace(/ /g,'-')
            .replace(/[^\w-]+/g,'')
            ;
    }
    
    return (
        <div id="card" name={slug} onClick={props.onClick}>
            <div name={slug} class="card card--slide-up">
                <div name={slug} class="card__container">
                    <div name={slug} class="card__image" style={{backgroundImage: `url(${image})`}}></div>
                </div>
                <div name={slug} class="card__mobile-title" >
                    <div name={slug} class="content" >
                        <div name={slug} class="tile">
                            <div name={slug} class="tile__container" >
                                <p name={slug} class="tile__title">{title}</p>
                                <p name={slug} class="tile__subtitle">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div name={slug} class="card__body content" style={{marginTop:'50px'}}>
                    <p name={slug}>{description}</p>
                </div>
                <div class="card__footer content"  id="link-wrap" style={{marginBottom:'0px', fontSize:'15px'}}>
                    Demo: <a href={demo} class="" id="link">{demo}</a>
                </div>
                <div name={slug} class="card__footer content">
                        {minutesToRead} min. {secondsToRead} sec. read
                </div>
            </div>
        </div>
    )
}