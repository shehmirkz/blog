import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Post from "./post";

function Blog() {
  const [posts, setPosts] = useState([]);

  const getBlog = () =>
    fetch(`https://jsonplaceholder.typicode.com/posts`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setPosts(result);
      });

  useEffect(() => {
    getBlog();
  }, []);

  const getBlogItems = () => {
    const allPosts = posts.map((post) => {
      return <Post item={post} key={post.id} />;
    });
    return allPosts;
  };

  return <div className="main-div">{getBlogItems()}</div>;
}

export default Blog;
