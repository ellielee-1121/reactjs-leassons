import React from 'react';
import { Link } from 'react-router-dom';
import './Overlay.css';

const Overlay = ({ match }) => (
  <div className="overlay">
    <div className="overlay-content">
      <iframe
        src={`http://www.youtube.com/embed/${match.params.id}`}
        title="vid"
        frameBorder="0"
        autoPlay="1"
        width="720"
        height="480"
      />
      <Link to="/vid" className="closer">×</Link>
    </div>
  </div>
);

export default Overlay;
