import axios from 'axios';
import { SalesSum } from 'components/types/sales';
import { BASE_URL } from 'components/utils/request';
import Chart from 'react-apexcharts'

type ChartData = {
  labels: string[];
  series: number[];
}

const DonutChart = () => {
    let charData : ChartData = { labels: [], series: []}

    axios.get(`${BASE_URL}/sales/amount-by-seller`)
        .then((response) => {
          const data = response.data as SalesSum[]
          const myLabels = data.map(x => x.sellerName)
          const mySeries = data.map(x => x.sum)

          charData = { labels: myLabels, series: mySeries}
        });
    /* const mockData = {
        series: [477138, 499928, 444867, 220426, 473088],
        labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    } */
    
    const options = {
        legend: {
            show: true
        }
    }

    return (
      < Chart
        options={{...options, labels: charData.labels}}
        series={charData.series}
        type="donut"
        height="240"
      />
    );
  };
  
  export default DonutChart;
  