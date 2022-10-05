import Chart from "react-apexcharts";

type Props = { going: number, maybe: number, notGoing: number }

const DonutChartTotals = ({ going, maybe, notGoing } : Props) => {

  const options = {
    labels: ['Going', 'Maybe', 'Not going'],
    colors: ['#f25477', '#ffa7a6', '#4a90e2'],
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          size: '83px',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
    legend: {
      show: true,
      floating: false,
      fontSize: '13px',
      position: 'bottom',
      offsetY: -0.9,
      labels: {
        useSeriesColors: true,
      },
    },
  };

  const series = [going, maybe, notGoing];

  return (
    <div id="chart" className="donut-chart">
      <Chart options={options} series={series} type="donut" width='130%' height='100%' />
    </div>
  )
}

export default DonutChartTotals;