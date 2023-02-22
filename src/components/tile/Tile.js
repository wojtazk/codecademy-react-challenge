import React from 'react';

export const Tile = ({ item }) => {
  let index = 0;
  let content = [];

  for (const [key, value] of Object.entries(item)) {
    let className = 'tile';
    if (key === 'name' || key === 'contact') className += '-title';

    content.push(
      <p className={className} key={index.toString()}>
        {value}
      </p>
    );

    index++;
  }
  return (
    <div className="tile-container">
      {/* <p className="tile-title">{item?.name || item?.contact.name}</p>

      <p className="tile">{item.phoneNumber}</p>
      <p className="tile">{item.email}</p> */}
      {content}
    </div>
  );
};
