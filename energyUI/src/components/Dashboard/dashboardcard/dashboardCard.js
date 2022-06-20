import React from 'react';
import {ChartCard} from '../chartcard/chartCard.js'
import './dashboardCard.css'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import { useState } from 'react';


const energy = 
    {
     price: '$306.20',
     savings: '1.3%',
     data:  {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 71, 62, 81, 78, 68, 72, 71]
        }
      ]
    }
      
    }


  export default function DashboardCard() {
  //  const [energy, setData] = useState('');


    const parentToChild = () => {
     // setData(energy);
    }

    return (
        <div className="content">
        <div className='dashboard-header'>Energy Management</div>
        <div className="button-group">
        <ButtonGroup size="small" aria-label="small button group">
            <Button onClick={() => parentToChild()}>1W</Button>
            <Button onClick={() => parentToChild()}>1M</Button>
            <Button onClick={() => parentToChild()}>3M</Button>
            <Button onClick={() => parentToChild()}>6M</Button>
            <Button onClick={() => parentToChild()}>1Y</Button>
        </ButtonGroup>

        </div>
         <div className='chart-card'>
            <ChartCard  energy={energy} shouldShowChart='true' />
        </div>
        <div className='card-list'>
            <ChartCard  energy={energy} />
            <ChartCard  energy={energy}/>
            <ChartCard  energy={energy} />
        </div>
        </div>
    );
  }