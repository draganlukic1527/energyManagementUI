import { IUserData } from './interfaces/userData.interface';
import { IChartData } from './interfaces/chartData.interface';
import { IEnergyData } from './interfaces/energyData.interface';
import { time } from 'console';

const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export function convertEnergyDataToChartsData(
  energyDatas: IEnergyData[]
): IChartData[] {
  let chartData: IChartData[] = [];

  const yearChartData = setYearlyChartData(energyDatas);
  const halfYearChartData = setHalfYearChartData(energyDatas);
  const quarterYearChartData = setQuarterlyChartData(energyDatas);
  const monthChartData = setMonthlyChartData(energyDatas);

  chartData = [
    yearChartData,
    halfYearChartData,
    quarterYearChartData,
    monthChartData,
  ];
  return chartData;
}

export function setYearlyChartData(energyDatas: IEnergyData[]): IChartData {
  const yearlySavings = 0;

  const yearlyChartData = {
    price: '$' + energyDatas[0].base.bill_total_cost.toString(),
    savings: yearlySavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonth(energyDatas[0].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[2].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[3].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[4].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[5].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[6].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[7].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[8].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[9].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[10].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[11].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[12].base.bill_statement_date),
      ],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            energyDatas[0].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
            energyDatas[3].base.bill_total_cost,
            energyDatas[4].base.bill_total_cost,
            energyDatas[5].base.bill_total_cost,
            energyDatas[6].base.bill_total_cost,
            energyDatas[7].base.bill_total_cost,
            energyDatas[8].base.bill_total_cost,
            energyDatas[9].base.bill_total_cost,
            energyDatas[10].base.bill_total_cost,
            energyDatas[11].base.bill_total_cost,
            energyDatas[12].base.bill_total_cost,
          ],
        },
      ],
    },
  };

  return yearlyChartData;
}

export function setHalfYearChartData(energyDatas: IEnergyData[]): IChartData {
  const halfYearSavings = calculateHalfYearEnergySavings(energyDatas);

  const halfYearChartData = {
    price: '$' + energyDatas[0].base.bill_total_cost.toString(),
    savings: halfYearSavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonth(energyDatas[0].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[2].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[3].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[4].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[5].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[6].base.bill_statement_date),
      ],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            energyDatas[0].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
            energyDatas[3].base.bill_total_cost,
            energyDatas[4].base.bill_total_cost,
            energyDatas[5].base.bill_total_cost,
            energyDatas[6].base.bill_total_cost,
          ],
        },
      ],
    },
  };

  return halfYearChartData;
}

export function setQuarterlyChartData(energyDatas: IEnergyData[]): IChartData {
  const quarterlySavings = calculateQuarterlyEnergySavings(energyDatas);

  const quarterlyChartData = {
    price: '$' + energyDatas[0].base.bill_total_cost.toString(),
    savings: quarterlySavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonth(energyDatas[0].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[2].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[3].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[4].base.bill_statement_date),
      ],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            energyDatas[0].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
            energyDatas[3].base.bill_total_cost,
            energyDatas[4].base.bill_total_cost,
          ],
        },
      ],
    },
  };

  return quarterlyChartData;
}

export function setMonthlyChartData(energyDatas: IEnergyData[]): IChartData {
  const monthlySavings = calculateMonthlyEnergySavings(energyDatas);

  const monthlyChartData = {
    price: '$' + energyDatas[0].base.bill_total_cost.toString(),
    savings: monthlySavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonth(energyDatas[0].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonth(energyDatas[2].base.bill_statement_date),
      ],
      datasets: [
        {
          label: '',
          fill: false,
          lineTension: 0.5,
          backgroundColor: 'rgba(75,192,192,1)',
          borderColor: 'rgba(0,0,0,1)',
          borderWidth: 2,
          data: [
            energyDatas[0].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
          ],
        },
      ],
    },
  };

  return monthlyChartData;
}

export function calculateMonthlyEnergySavings(
  energyDatas: IEnergyData[]
): number {
  return (
    ((energyDatas[0].base.bill_total_cost -
      energyDatas[1].base.bill_total_cost) /
      energyDatas[0].base.bill_total_cost) *
    100
  );
}

export function calculateQuarterlyEnergySavings(
  energyDatas: IEnergyData[]
): number {
  const totalCurrentQuarterlyCost =
    energyDatas[0].base.bill_total_cost +
    energyDatas[1].base.bill_total_cost +
    energyDatas[2].base.bill_total_cost +
    energyDatas[3].base.bill_total_cost;

  const totalPreviousQuarterlyCost =
    energyDatas[3].base.bill_total_cost +
    energyDatas[4].base.bill_total_cost +
    energyDatas[5].base.bill_total_cost +
    energyDatas[6].base.bill_total_cost;

  return (
    ((totalCurrentQuarterlyCost - totalPreviousQuarterlyCost) /
      totalCurrentQuarterlyCost) *
    100
  );
}

export function calculateHalfYearEnergySavings(
  energyDatas: IEnergyData[]
): number {
  const totalCurrentHalfYearCost =
    energyDatas[0].base.bill_total_cost +
    energyDatas[1].base.bill_total_cost +
    energyDatas[2].base.bill_total_cost +
    energyDatas[3].base.bill_total_cost +
    energyDatas[4].base.bill_total_cost +
    energyDatas[5].base.bill_total_cost;

  const totalPreviousHalfYearCost =
    energyDatas[6].base.bill_total_cost +
    energyDatas[7].base.bill_total_cost +
    energyDatas[8].base.bill_total_cost +
    energyDatas[9].base.bill_total_cost +
    energyDatas[10].base.bill_total_cost +
    energyDatas[11].base.bill_total_cost;

  return (
    ((totalCurrentHalfYearCost - totalPreviousHalfYearCost) /
      totalCurrentHalfYearCost) *
    100
  );
}

export function convertTimeStampToMonth(timeStamp: string): string {
  const date = new Date(timeStamp);
  return monthNames[date.getMonth()];
}

export function convertTimeStampToYear(timeStamp: string): number {
  const date = new Date(timeStamp);
  return date.getFullYear();
}
