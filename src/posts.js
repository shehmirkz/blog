import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import CommentSvg from "./commentSvg.svg"
import "./App.css";
import Post from "./post";

function SinglePost(props) {
  const [post, setPost] = useState([]);
  const [comment, setComment] = useState([]);

  let { id } = useParams();

  const getPost = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setPost(result);
      });
  };
  useEffect(() => {
    getPost();
  }, []);

  const renderPost = () => {
    const showPost = post.map((onePost) => {
      console.log("Can One Post Availabe", onePost);
      return (post = { onePost });
    });
    return showPost;
  };

  const getComments = () => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result);
        setComment(result);
      });
  };

  useEffect(() => {
    getComments();
  }, []);

  const renderComments = () => {
    const showComment = comment.map((comment) => {
      return (comment = { comment });
    });
    return showComment;
  };

  return (
    <div>
      <h1>This is Main Page of Single Post Id No: {id}</h1>
      <br />
      <Container className="mb-3">
        <Row className="row">
          <Col className="col" sm={8}>
            <strong className="pb-3">World {post.userId}</strong>
            <h3>{post.title}</h3>
            <div className="text-muted">Nov 12</div>
            <p>{post.body}</p>
          </Col>
          <Col className="col-b" sm={4}></Col>
          <br />
          <br />
          <img src={CommentSvg} alt="Comment Img" />
          <h5 className="mt-3">comments</h5>
          <Col className="comment-box mb-5" sm={12}>
            <h6>{comment.body}</h6>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default SinglePost;