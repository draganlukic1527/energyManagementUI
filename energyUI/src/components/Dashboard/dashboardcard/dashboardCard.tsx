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

import { convertEnergyDataToChartsData } from '../../../utils';
import { IEnergyData } from '../../../interfaces/energyData.interface';

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

    console.log(
      'ENERGYDATA:',
      this.getEnergyData(this.props.userData.EnergyData)
    );
  }

  parentToChild(index: number) {
    this.setState({
      index: index,
    });
  }

  getEnergyData(energyDatas: IEnergyData[]): IChartData[] {
    return convertEnergyDataToChartsData(energyDatas);
  }

  render() {
    return (
      <div className="Dashboard">
        <div className="dashboard-header">
          <div className="button-group">
            <ButtonGroup size="small" aria-label="small button group">
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
                  energy={
                    this.getEnergyData(this.props.userData.EnergyData)[
                      this.state.index
                    ]
                  }
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
