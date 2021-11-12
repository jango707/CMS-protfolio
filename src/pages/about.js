import React from "react"
import Layout from "../components/layout"
import profile from '../staticPics/profile.png'

import './about.css'

const About = () => {
    return (
        <Layout>
            <section id="about-page" className="section bg-light" style={{ background: "linear-gradient(to right, #f6f9fc, #f0f9fc"}}>
                <div className="hero fullscreen">
                    <div className="hero-body">
                        <div className="content u-center" >
                            <div className="card" id="card" >
                                <div className="content u-text-center pt-3 ">
                                    <div className="row">
                                    <div className="col-4 u-center ">
                                        <div className="avatar avatar--xlarge bg-light"><img src={profile} alt="profile_pic" /></div>
                                    </div>
                                    <div className="col-8 u-center">
                                        <div className="row">
                                            <div className="col-12 u-text-left ">
                                                <h3 className="title u-center">Jang Belche <span role="img" aria-label="beer">🍺</span></h3>
                                            </div>
                                            <div className="col-6 u-text-left ">
                                                <h6 className="title">From: Lux</h6>
                                                <h6 className="title">Favorite Hobby: <span role="img" aria-label="lux-flag">🏀</span></h6>
                                            </div>
                                            <div className="col-6 u-text-left ">
                                                <h6 className="title">Currently in: UK</h6>
                                                <h6 className="title">Spirit Animal: <span role="img" aria-label="gb-flag">🐐</span></h6>
                                            </div>
                                        </div>
                                        <div className="col-12 u-text-left ">
                                            <p>Reach out to me and tell me about your passion!</p>
                                        </div>
                                        <div className="row" id="icons">
                                            <div className="col-3 u-center col-xs-6">
                                                <a href="https://github.com/jango707" ><i className="fab fa-github-square fa-3x" aria-hidden="true"></i> </a>
                                            </div>
                                            <div className="col-3 u-center col-xs-6 ">
                                                <a href="https://www.linkedin.com/in/jang-belche/" ><i className="fab fa-linkedin fa-3x" aria-hidden="true"></i> </a>
                                            </div>
                                            <div className="col-3 u-center col-xs-6">
                                                <a href="https://www.facebook.com/jangoQuarantino" ><i className="fab fa-facebook-square fa-3x" aria-hidden="true"></i> </a>
                                            </div>
                                            <div className="col-3 u-center col-xs-6">
                                                <a href="https://devpost.com/jango707" ><i className="fas fa-laptop-code fa-3x" aria-hidden="true"></i> </a>
                                            </div>
                                        </div>
                            
                                    </div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default About