import React from "react"
import Layout from "../components/layout"

import projects from '../posts.json'
import wordsCount from 'words-count';
import './projects.css'
import Footer from "../components/footer";

const Projects = () => {
    function onCardClick(e){
        window.location.assign("/project/" + e.target.getAttribute('name'))
    }
    return (
        <Layout>
            <section id="projects">
                <div id="content" className="bg-light">
                    <h1 className=" m-4 u-center">My Projects</h1>

                    <div className="row">
                        {
                            projects.sort(() => Math.random() - 0.5).map((project, i) => {
                                return(
                                    <div  key={i} className=" desktop col-lg-3 u-text-left col-md-4 col-sm-6 col-xs-12">
                                        <ProjectCard onClick={onCardClick}  project={project}/>
                                    </div>                                             
                                )
                            })
                        }     
                        {
                            projects.sort(() => Math.random() - 0.5).map((project, i) => {
                                return(
                                    <div key={i} className=" mobile col-lg-3 u-text-left col-md-4 col-sm-6 col-xs-12">
                                        <SimpleProjectCard onClick={onCardClick}  project={project}/>
                                    </div>                                       
                                )
                            })
                        }                         
                    </div>           
                <Footer />  
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
            <div name={slug} className="card card--slide-up">
                <div name={slug} className="card__container">
                    <div name={slug} className="card__image"><img src={image} alt="thumb-bg" /></div>
                </div>
                <div name={slug} className="card__mobile-title" >
                    <div name={slug} className="content" >
                        <div name={slug} className="tile">
                            <div name={slug} className="tile__container" >
                                <p name={slug} className="tile__title">{title}</p>
                                <p name={slug} className="tile__subtitle">{date}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div name={slug} className="card__body content" style={{marginTop:'50px'}}>
                    <p name={slug}>{description}</p>
                </div>
                <div className="card__footer content"  id="link-wrap" style={{marginBottom:'0px', fontSize:'15px'}}>
                    Demo: <a href={demo} className="" id="link">{demo}</a>
                </div>
                <div name={slug} className="card__footer content">
                        {minutesToRead} min. {secondsToRead} sec. read | Click to read more.
                </div>
            </div>
        </div>
    )
}


const SimpleProjectCard = (props) => {
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
        <div id="simplecard" name={slug} onClick={props.onClick}>
            <div className="card" style={{width:'100%'}} >
                <div className="card__container">
                    <div name={slug} className="card__image" style={{backgroundImage: `url(${image})`}} />
                </div>
                <div className="content">
                    <h4>{title}</h4>
                    <div style={{marginTop:'-15px', color:'grey'}}>Published: {date}</div>
                </div>
                <div name={slug} className="card__body content" style={{marginTop:'-10px'}}>
                    <p name={slug}>{description}</p>
                </div>
                <div className="card__footer content"  id="link-wrap" style={{marginBottom:'0px', fontSize:'15px'}}>
                    Demo: <a href={demo} className="" id="link">{demo}</a>
                </div>
                <div name={slug} className="card__footer content">
                        {minutesToRead} min. {secondsToRead} sec. read
                </div>
            </div>
        </div>
    )
}