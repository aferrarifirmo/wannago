import Chart from "react-apexcharts";

type Props = { total: number, active: number, past: number }

const TotalWannaGos = ({ total, active, past}: Props) => {

  const options = {
    labels: ['Total', 'Active', 'Past'],
    colors: ['#f25477', '#ffa7a6', '#4a90e2'],
    plotOptions: {
      radialBar: {
        dataLabels: {
          enabled: true,
          total: {
            show: true,
            label: 'Total',
            formatter: function(w: any) {
              return 11
            }
          },
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
      },
    },
  };

  const series = [total, active, past];

  return (
    <div id="chart">
      <Chart options={options} series={series} type='radialBar' width='120%' />
    </div>
  )
}

export default TotalWannaGos;