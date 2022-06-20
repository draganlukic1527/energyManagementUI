import React from 'react';
import './chartCard.css';
import {Line} from 'react-chartjs-2';

function shouldShowChart (props) {
  if (!props.shouldShowChart) {
    return null;
  }      
}

export const ChartCard = props => (
  <div className='card-container'>
  <div className ="card-text">
    <h2> Avg. Yearly Cost</h2>
    <p> {props.energy?.price} </p>
    <p> {props.energy?.savings} less than last year </p>
  </div>
  <div>
    <Line
      data={props.energy?.data}
    /> 
  </div>
</div>
); 