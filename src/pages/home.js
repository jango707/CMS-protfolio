import React from "react"

import Layout from "../components/layout"
import PostList from "../components/postlist"
import "./pages.css"

const Home = () => {
    return (
        <div>
            <Layout>
                <section className="section bg-light">
                    <div className="hero fullscreen">
                        <div className="hero-body">
                            <div className="content">
                                <div className="row">
                                    <div className="col-12">
                                        <h1>👋 Hello there!</h1>
                                        <h6 className="font-alt font-light">Welcome to my website portfolio</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </div>
    )
}

export default Home