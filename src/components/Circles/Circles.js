import React from 'react';
import './Circles.css';

const Circles = (props) => {
  return (
    <div className="Circles">
        <div className={props.circle1}>1</div>
        <div className={props.circle2}>2</div>
        <div className={props.circle3}>3</div>
        <div className={props.circle4}>4</div>
    </div>
  );
};

export default Circles;