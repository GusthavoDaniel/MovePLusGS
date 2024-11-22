import { Line } from "react-chartjs-2";
import { ChartOptions, ChartData } from "chart.js";

type GraphVisualProps = {
  data: ChartData<"line">;
};

export default function GraphVisual({ data }: GraphVisualProps) {
  const options: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "top", 
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "X Axis Label", 
        },
      },
      y: {
        title: {
          display: true,
          text: "Y Axis Label", 
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Line data={data} options={options} />
    </div>
  );
}
