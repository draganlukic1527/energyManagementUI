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

const billPayPeriod = {
  year: 12,
  halfYear: 6,
  quarter: 3,
  month: 1,
};

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
    price:
      '$' + getTotalBillCost(energyDatas, billPayPeriod.year) + ' Past Year',
    savings: yearlySavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonthAndYear(
          energyDatas[12].base.bill_statement_date
        ),
        convertTimeStampToMonthAndYear(
          energyDatas[11].base.bill_statement_date
        ),
        convertTimeStampToMonthAndYear(
          energyDatas[10].base.bill_statement_date
        ),
        convertTimeStampToMonthAndYear(energyDatas[9].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[8].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[7].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[6].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[5].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[4].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[3].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[2].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[0].base.bill_statement_date),
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
            energyDatas[12].base.bill_total_cost,
            energyDatas[11].base.bill_total_cost,
            energyDatas[10].base.bill_total_cost,
            energyDatas[9].base.bill_total_cost,
            energyDatas[8].base.bill_total_cost,
            energyDatas[7].base.bill_total_cost,
            energyDatas[6].base.bill_total_cost,
            energyDatas[5].base.bill_total_cost,
            energyDatas[4].base.bill_total_cost,
            energyDatas[3].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[0].base.bill_total_cost,
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
    price:
      '$' +
      getTotalBillCost(energyDatas, billPayPeriod.halfYear) +
      ' Past 6 Months',
    savings: halfYearSavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonthAndYear(energyDatas[6].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[5].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[4].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[3].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[2].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[0].base.bill_statement_date),
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
            energyDatas[6].base.bill_total_cost,
            energyDatas[5].base.bill_total_cost,
            energyDatas[4].base.bill_total_cost,
            energyDatas[3].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[0].base.bill_total_cost,
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
    price:
      '$' +
      getTotalBillCost(energyDatas, billPayPeriod.quarter) +
      ' Past 3 Months',
    savings: quarterlySavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonthAndYear(energyDatas[3].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[2].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[0].base.bill_statement_date),
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
            energyDatas[3].base.bill_total_cost,
            energyDatas[2].base.bill_total_cost,
            energyDatas[1].base.bill_total_cost,
            energyDatas[0].base.bill_total_cost,
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
    price:
      '$' + getTotalBillCost(energyDatas, billPayPeriod.month) + ' Past Month',
    savings: monthlySavings.toString() + '%',
    data: {
      labels: [
        convertTimeStampToMonthAndYear(energyDatas[1].base.bill_statement_date),
        convertTimeStampToMonthAndYear(energyDatas[0].base.bill_statement_date),
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
            energyDatas[1].base.bill_total_cost,
            energyDatas[0].base.bill_total_cost,
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

export function convertTimeStampToMonthAndYear(timeStamp: string): string {
  const date = new Date(timeStamp);
  return monthNames[date.getMonth()] + ' ' + date.getFullYear();
}

export function getTotalBillCost(
  energyDatas: IEnergyData[],
  billPeriod: number
): string {
  let totalBillCost: number = 0;
  energyDatas.forEach((energyData, index) => {
    if (index < billPeriod) {
      totalBillCost += energyData.base.bill_total_cost;
    }
  });

  return parseFloat(totalBillCost.toFixed(2)).toString();
}
