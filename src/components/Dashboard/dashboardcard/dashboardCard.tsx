import React from 'react';
import { ChartCard } from '../chartcard/chartCard';
import './dashboardCard.scss';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { IChartData } from '../../../interfaces/chartData.interface';
import { IUserData } from '../../../interfaces/userData.interface';

import { convertEnergyDataToChartsData } from '../../../utils';
import { IEnergyData } from '../../../interfaces/energyData.interface';

interface MyProps {
  userData: IUserData;
}

interface MyState {
  index: number;
}

let selectedIndex: number = 0;

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
    selectedIndex = index;
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
          <strong className="header-price">
            <span>Total Cost: </span>
            {
              this.getEnergyData(this.props.userData.EnergyData)[
                this.state.index
              ].price
            }
          </strong>
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
          <CardContent sx={{ height: '100%' }}>
            <ChartCard
              energy={
                this.getEnergyData(this.props.userData.EnergyData)[
                  this.state.index
                ]
              }
              shouldShowChart="true"
            />
          </CardContent>
        </Card>

        <div className="card-list">
          <Card className="card">
            <CardContent>
              <div className="cardContent">
                <strong style={{ fontSize: 'xxx-large' }}>59kwh</strong>
                <div>Your Total Usage Last Month</div>
                <div></div>
              </div>
            </CardContent>
          </Card>

          <Card className="card">
            <CardContent>
              <div className="cardContent">
                <strong style={{ fontSize: 'xxx-large' }}>24kwh</strong>
                <div>Average Total Usage Per Area</div>
                <div></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}
