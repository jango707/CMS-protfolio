import React from "react"
import { Redirect } from "react-router-dom"
import Markdown from "react-markdown"
import Layout from "../components/layout"
import postlist from "../posts.json"
import "./pages.css"

const Post = (props) => {
    const validId = props.match.params.slug
    console.log(validId)
    const fetchedPost = {}
    let postExists = false
    postlist.forEach((post, i) => {
        if (validId === post.id) {
            fetchedPost.title = post.title ? post.title : "No title given"
            fetchedPost.date = post.date ? post.date : "No date given"
            fetchedPost.author = post.author ? post.author : "No author given"
            fetchedPost.content = post.content ? post.content : "No content given"
            postExists = true
        }
    })
    return (
        <Layout>
            <div className="post">
                <h2>{fetchedPost.title}</h2>
                <small>Published on {fetchedPost.date} by {fetchedPost.author}</small>
                <hr/>
                <Markdown source={fetchedPost.content} escapeHtml={false} />
            </div>
        </Layout>
    )
}

export default Post