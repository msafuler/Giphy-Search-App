import React from 'react';
import { Gif } from '@giphy/react-components';

export default function Giphy({ selectedGiphy }) {
  return (
    <Gif
      gif={selectedGiphy}
      width={300}
      className="single-gif"
    />
  );
}
