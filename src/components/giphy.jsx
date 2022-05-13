import React, { useState } from "react";
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api';

export default function Images(props) {
  const gf = new GiphyFetch('pXUyjhupH5pR105ZMuPsx7mIxtDXak9A');
  const fetchGifs = (offset) => gf.search(props.searchTerm, { offset, limit: 10 });
  return (
    <Grid
      width={520}
      columns={2}
      gutter={8}
      fetchGifs={fetchGifs}
      key={props.searchTerm}
      onGifClick={props.changeGiphy}
      noLink={true}
    />);
}
