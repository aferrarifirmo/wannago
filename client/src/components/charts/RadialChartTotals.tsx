import Chart from "react-apexcharts";

type Props = { engagement: number, successRatio: number }

const RadialChartTotals = ({ engagement, successRatio}: Props) => {

  const options = {
    labels: ['Engagement', 'Success'],
    colors: ['#f25477', '#4a90e2'],
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: true,
      floating: true,
      fontSize: '13px',
      position: 'bottom',
      // offsetX: 160,
      offsetY: 7,
      labels: {
        useSeriesColors: true,
      },
      markers: {
        size: 0
      },
    },
  };

  const series = [engagement, successRatio];

  return (
    <div id="chart">
      <Chart options={options} series={series} type='radialBar' width='120%' />
    </div>
  )
}

export default RadialChartTotals;