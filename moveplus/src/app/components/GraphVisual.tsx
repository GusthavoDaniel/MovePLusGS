import { Line } from "react-chartjs-2";

export default function GraphVisual({ data }: { data: any }) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div style={{ height: "400px" }}>
      <Line data={data} options={options} />
    </div>
  );
}
