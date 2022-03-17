import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import SinglePost from "./posts";
import { useNavigate } from 'react-router-dom';


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
          
          <a onClick={ () => {navigation(`/posts/${props.item.id}`)} }>Continue Reading</a>

        </Col>
        <Col className="col-b" sm={4}></Col>
      </Row>
    </Container>
  );
}

export default Post;
