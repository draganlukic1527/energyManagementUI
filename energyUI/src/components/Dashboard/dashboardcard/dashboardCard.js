import React from 'react';
import {ChartCard} from '../chartcard/chartCard.js'
import './dashboardCard.css'

const energy = 
    {
     price: '$306.20',
     savings: '1.3%'
    }


  export default function DashboardCard() {
    return (
        <div>
            <div className='dashboard-header'>Overview</div>
        <div className='card-list'>
            <ChartCard  energy={energy} />
            <ChartCard  energy={energy}/>
            <ChartCard  energy={energy} />
        </div>
        <div className='chart-card'>
            <ChartCard  energy={energy} shouldShowChart='true' />
        </div>
        </div>
    );
  }