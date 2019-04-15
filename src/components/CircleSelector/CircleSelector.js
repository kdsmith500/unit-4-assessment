import React from 'react';
import './CircleSelector.css';

const CircleSelector = (props) => {
  return (
    <div className="CircleSelector">
        <button className={props.circleSelector1} onClick={props.handleCircleSelector1}>Select Circle 1</button>
        <button className={props.circleSelector2} onClick={props.handleCircleSelector2}>Select Circle 2</button>
        <button className={props.circleSelector3} onClick={props.handleCircleSelector3}>Select Circle 3</button>
        <button className={props.circleSelector4} onClick={props.handleCircleSelector4}>Select Circle 4</button>
    </div>
  );
};

export default CircleSelector;