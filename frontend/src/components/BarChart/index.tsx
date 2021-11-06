import axios from "axios";
import { SalesSucess } from "components/types/sales";
import { round } from "components/utils/format";
import { BASE_URL } from "components/utils/request";
import { useEffect, useState } from "react";
import Chart from "react-apexcharts";

type SeriesData = {
  name: string;
  data: number[];
};

type ChartData = {
  labels: {
    categories: string[];
  };
  series: SeriesData[];
};

const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: {
      categories: [],
    },
    series: [
      {
        name: "",
        data: [],
      },
    ],
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/sales/success-by-seller`).then((response) => {
      const data = response.data as SalesSucess[];
      const myLabels = data.map((x) => x.sellerName);
      const mySeries = data.map((x) => round((100.0 * x.deals) / x.visited, 1));

      setChartData({
        labels: {
          categories: myLabels,
        },
        series: [
          {
            name: "% success",
            data: mySeries,
          },
        ],
      });
    });
  }, []);

  const options = {
    plotOptions: {
      bar: {
        horizontal: true,
      },
    },
  };

  return (
    <Chart
      options={{ ...options, xaxis: chartData.labels }}
      series={chartData.series}
      type="bar"
      height="240"
    />
  );
};

export default BarChart;
