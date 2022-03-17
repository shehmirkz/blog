import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';

import "./App.css";
import SinglePost from "./posts";



const Post = (props) => {
    console.log('Checking Props not showing', props);
    let navigation = useNavigate();
   
  return (
    <Container className="mb-3">
      <Row className="row">
        <Col className="col" sm={8}>
          <strong className="pb-3">World {props.item.userId}</strong>
          <h3>{props.item.title}</h3>
          <div className="text-muted">Nov 12</div>
          <p>
            {props.item.body}
          </p>
          
          <Link to={`/posts/${props.item.id}`}>Continue Reading</Link>
          {/* <a onClick={ () => {navigation(`/posts/${props.item.id}`)} }>Continue Reading</a> */}

        </Col>
        <Col className="col-b" sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Post;
