import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import Search from "./search";
import Images from "./giphy";

const Join = () => {
  const [searchTerm, setSearchTerm] = useState('home thinking');
  const handleUserInput = (event) => {
    setSearchTerm(event.target.value);
  };

  const [giphy, setGiphy] = useState('https://media2.giphy.com/media/xT9IgDEI1iZyb2wqo8/200.gif');

  return (
    <div>
      <div className="background background-body">
        <Row>
          <Col lg={7}>
            <Search handleUserInput={handleUserInput} searchTerm={searchTerm} />
          </Col>
          <Col style={{ overflow: 'scroll', height: 800 }} lg={5}>
            <Images searchTerm={searchTerm} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Join;
