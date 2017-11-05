import React from 'react';
import { Link } from 'react-router-dom';

const Box = ({ vid, img }) => (
  <div className="box">
    <Link className="image fit" to={`/vid/${vid}`}>
      <img src={img} alt="" />
    </Link>
    <div className="inner">
      <h3>Nascetur nunc varius commodo</h3>
      <p>Interdum amet accumsan placerat commodo ut amet aliquam blandit nunc tempor lobortis nunc non. Mi accumsan.</p>
      <Link className="button fit" to={`/vid/${vid}`}>
        Watch
      </Link>
    </div>
  </div>
);

export default Box;
