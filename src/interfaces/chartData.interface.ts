export interface IChartData {
  price: string;
  savings: string;
  data: {
    labels: string[];
    datasets: IChartDataSet[];
  };
}

export interface ICarouselData {
  children: string;
  width: string;
}

export interface IChartDataSet {
  label: string;
  fill: boolean;
  lineTension: number;
  backgroundColor: string;
  borderColor: string;
  borderWidth: number;
  data: number[];
}
