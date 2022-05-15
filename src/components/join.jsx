import React, { useState } from "react";
import { Row, Col } from 'react-bootstrap';
import { GiphyFetch } from '@giphy/js-fetch-api';
import Search from "./search";
import GiphyList from "./giphy";
import Giphy from "./gif";

const Join = () => {
  const [searchTerm, setSearchTerm] = useState('disney');
  const handleUserInput = (event) => {
    setSearchTerm(event.target.value);
  };
  const gf = new GiphyFetch('pXUyjhupH5pR105ZMuPsx7mIxtDXak9A');
  const [selectedGiphy, setSelectedGiphy] = useState(null);

  return (
    <div>
      <div className="background background-body">
        <Row>
          <Col lg={7}>
            <Search handleUserInput={handleUserInput} searchTerm={searchTerm} />
            {selectedGiphy && <Giphy selectedGiphy={selectedGiphy} />}
          </Col>
          <Col style={{ overflow: 'scroll', height: 800 }} lg={5}>
            <GiphyList searchTerm={searchTerm} gf={gf} setSelectedGiphy={setSelectedGiphy} />
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Join;
