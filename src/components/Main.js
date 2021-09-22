import React from 'react';
import HornedBeast from './HornedBeast.js';
import data from '../data/data.json';

class Main extends React.Component {
  render() {
    return (
      <>
        {data.map((i, idx) => (
          <HornedBeast
            key={idx}
            title={i.title}
            description={i.description}
            image={i.image_url}
            alt={i.keyword}
          />
        ))}
      </>
    );
  }
}

export default Main;

/*
image_url
title
description
keyword
horns
*/
