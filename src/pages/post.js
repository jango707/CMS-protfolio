import React from "react";
import Markdown from "react-markdown";
import Footer from "../components/footer";
import Layout from "../components/layout";
import postlist from "../posts.json";
import "./post.css";

const Post = (props) => {
  const validSlug = props.match.params.slug;
  const fetchedPost = {};
  let postExists = false;
  postlist.forEach((post, i) => {
    if (validSlug === convertToSlug(post.title)) {
      fetchedPost.title = post.title ? post.title : "No title given";
      fetchedPost.date = post.date ? post.date : "No date given";
      fetchedPost.content = post.content ? post.content : "No content given";
      fetchedPost.demo = post.demo ? post.demo : "No content given";
      fetchedPost.image = post.thumbnail ? post.thumbnail : "";
      postExists = true;
    }
  });

  if (!postExists) window.location.assign("/projects");

  function convertToSlug(Text) {
    return Text.toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }
  return (
    <Layout>
      <div className="post">
        <h1>{fetchedPost.title}</h1>
        <small>Published on {fetchedPost.date}</small>
        <br />
        <hr />
        <div className="img u-center">
          <img src={fetchedPost.image} alt="thumbnail" />
        </div>
        <a href="/projects" className="u u-LR" style={{ padding: "0" }}>
          Return to Projects
        </a>
        <Markdown source={fetchedPost.content} escapeHtml={false} />
        <p>
          Try it out:{" "}
          <a href={fetchedPost.demo} rel="noopener noreferrer" target="_blank">
            {" "}
            {fetchedPost.demo}{" "}
          </a>
        </p>
      </div>
      <Footer />
    </Layout>
  );
};

export default Post;
