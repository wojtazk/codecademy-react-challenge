import React from 'react';
import { Tile } from '../tile/Tile';

export const TileList = ({ list }) => {
  return (
    <div>
      {list.map((item) => {
        return <Tile item={item} key={item?.name || item?.title} />;
      })}
    </div>
  );
};
