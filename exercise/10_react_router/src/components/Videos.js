import React from 'react';
import Box from './Box';

const boxes = [
  { vid: 's6zR2T9vn2c', img: 'images/pic01.jpg' },
  { vid: 's6zR2T9vn2c', img: 'images/pic02.jpg' },
  { vid: 's6zR2T9vn2c', img: 'images/pic03.jpg' },
  { vid: 's6zR2T9vn2c', img: 'images/pic04.jpg' },
  { vid: 's6zR2T9vn2c', img: 'images/pic05.jpg' },
  { vid: 's6zR2T9vn2c', img: 'images/pic06.jpg' },
];

const Videos = () => (
  <div id="main">
    <div className="inner">
      <div className="thumbnails">
        {boxes.map(box => (
          <Box {...box} key={box.img} />
        ))}
      </div>
    </div>
  </div>
);

export default Videos;
