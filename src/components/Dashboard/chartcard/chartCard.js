import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './chartCard.css';
import Chart from "chart.js";
import {Line} from 'react-chartjs-2';


const state = {
  labels: ['January', 'February', 'March',
           'April', 'May'],
  datasets: [
    {
      label: 'Rainfall',
      fill: false,
      lineTension: 0.5,
      backgroundColor: 'rgba(75,192,192,1)',
      borderColor: 'rgba(0,0,0,1)',
      borderWidth: 2,
      data: [65, 59, 80, 81, 56]
    }
  ]
}

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
      data={state}
      options={{
        title:{
          display:true,
          text:'Average Rainfall per month',
          fontSize:20
        },
        legend:{
          display:true,
          position:'right'
        }
      }}
    /> 
  </div>
</div>
);
  // export default function ChartCard() {
  //   return (
  //   <div className='card-container'>
  //         <div className ="card-text">
  //           <h2> Avg. Yearly Cost</h2>
  //           <p> $306.20 </p>
  //           <p> 1.3% less than last year </p>
  //         </div>
  //         <div>
  //           <Line
  //             data={state}
  //             options={{
  //               title:{
  //                 display:true,
  //                 text:'Average Rainfall per month',
  //                 fontSize:20
  //               },
  //               legend:{
  //                 display:true,
  //                 position:'right'
  //               }
  //             }}
  //           />
  //         </div>
  //   </div>
  //   )
  // }