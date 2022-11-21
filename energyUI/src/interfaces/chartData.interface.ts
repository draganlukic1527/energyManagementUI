export interface IChartData {
  price: string;
  savings: string;
  data: {
    labels: string[];
    datasets: [
      {
        label: string;
        fill: boolean;
        lineTension: number;
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
        data: number[];
      }
    ];
  };
}

export interface ICarouselData {
  children: string;
  width: string;
}
