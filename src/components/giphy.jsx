import React from "react";
import { Grid } from '@giphy/react-components';

export default function GiphyList({ searchTerm, gf, setSelectedGiphy }) {
  const pickAgif = (e) => {
    setSelectedGiphy(e);
  };
  const fetchGifs = (offset) => {
    return gf.search(searchTerm, { offset, limit: 10 });
  };
  return (
    <Grid
      width={520}
      columns={2}
      gutter={8}
      fetchGifs={fetchGifs}
      key={searchTerm}
      noLink={true}
      hideAttribution={true}
      onGifClick={pickAgif}
    />);
}
