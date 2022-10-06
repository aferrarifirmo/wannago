import Chart from "react-apexcharts";

type Props = { active: number, past: number }

const TotalWannaGos = ({ active, past }: Props) => {

  const options = {
    labels: ['Active', 'Past'],
    colors: ['#f25477', '#4a90e2'],
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
              label: "Total WannaGo's",
              fontWeight: 'bold',
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

  const series = [active, past];

  return (
    <div id="chart" className="donut-chart">
      <Chart options={options} series={series} type="donut" width='120%' height='180%' />
    </div>
  )
}

export default TotalWannaGos;