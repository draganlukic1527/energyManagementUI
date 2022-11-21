import React from 'react';
import { ChartCard } from '../chartcard/chartCard';
import './dashboardCard.css';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Carousel, {
  CarouselItem,
} from '../../sharedComponents/carousel/carousel';

import {
  IChartData,
  ICarouselData,
} from '../../../interfaces/chartData.interface';
import { IUserData } from '../../../interfaces/userData.interface';

const energyData: IChartData[] = [
  {
    price: '$306.20',
    savings: '1.3%',
    data: {
      labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 71, 62, 81, 78, 68, 72, 71],
        },
      ],
    },
  },
  {
    price: '$108.10',
    savings: '1.3%',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 71],
        },
      ],
    },
  },
  {
    price: '$306.20',
    savings: '1.3%',
    data: {
      labels: [
        'Jan 1',
        'Jan 15',
        'Jan 31',
        'Feb 1',
        'Feb 28',
        'Mar 1',
        'Mar 15',
        'Mar 30',
      ],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 72, 63, 59, 68, 62, 72, 80],
        },
      ],
    },
  },
  {
    price: '$306.20',
    savings: '1.3%',
    data: {
      labels: ['Jan 1', 'Jan 6', 'Jan 12', 'Jan 18', 'Jan 24', 'Jan 31'],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 71, 62],
        },
      ],
    },
  },
  {
    price: '$306.20',
    savings: '1.3%',
    data: {
      labels: ['Mon', 'Tues', 'Wed', 'Th', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [65, 59, 80, 81, 56, 71, 62],
        },
      ],
    },
  },
];

interface MyProps {
  userData: IUserData;
}

interface MyState {
  index: number;
}

const carouselItem: ICarouselData[] = [
  {
    children: 'item1',
    width: '100%',
  },
  {
    children: 'item2',
    width: '100%',
  },
  {
    children: 'item3',
    width: '100%',
  },
];

export default class DashboardCard extends React.Component<MyProps, MyState> {
  constructor(props: any) {
    console.log('DASH PROPS:', props);
    super(props);
    this.state = {
      index: 0,
    };

    this.parentToChild = this.parentToChild.bind(this);
  }

  parentToChild(index: number) {
    this.setState({
      index: index,
    });
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="dashboard-header">
          <div className="button-group">
            <ButtonGroup size="small" aria-label="small button group">
              <Button onClick={() => this.parentToChild(4)}>1W</Button>
              <Button onClick={() => this.parentToChild(3)}>1M</Button>
              <Button onClick={() => this.parentToChild(2)}>3M</Button>
              <Button onClick={() => this.parentToChild(1)}>6M</Button>
              <Button onClick={() => this.parentToChild(0)}>1Y</Button>
            </ButtonGroup>
          </div>
        </div>
        <Card className="card-dashboard">
          <CardContent>
            <div className="content">
              <div className="chart-card">
                <ChartCard
                  energy={energyData[this.state.index]}
                  shouldShowChart="true"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="card-list">
          <Card className="card-lidt-card">
            <CardContent>
              <p>Energy Use: 24kwh</p>
            </CardContent>
          </Card>

          <div>
            <Carousel>
              <CarouselItem>Item 1</CarouselItem>
              <CarouselItem>Item 2</CarouselItem>
              <CarouselItem>Item 3</CarouselItem>
            </Carousel>
          </div>

          <Card className="card-lidt-card">
            <CardContent>
              <p>Energy Use: 24kwh</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

function setData(energyData: any) {
  throw new Error('Function not implemented.');
}
