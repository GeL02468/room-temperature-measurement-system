import './AirPressureInfo.css'
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { chartData } from "../../lib/data";

ChartJS.register(
  LineElement,
  BarElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Tooltip,
  Legend
);

// 軸ラベル
const labels = chartData.map((d) => d.hour);

// 実績・目標データ
const actualValues = chartData.map((d) => d.inside);
const targetValues = chartData.map((d) => d.outside);

export function AirPressureInfo() {
  return (
    <div style={{ display: "grid", gap: 24 }}>
      {/* ============================= */}
      {/* Simple Chart.js */}
      {/* ============================= */}
      <section>
        <h2
          style={{
            fontSize: 14,
            fontWeight: 600,
            marginBottom: 8,
            color: "#4b5563",
          }}
        >
          Simple Chart.js（最低限で整った折れ線）
        </h2>
        <p
          style={{
            fontSize: 12,
            color: "#6b7280",
            marginBottom: 12,
          }}
        >
          設定をほぼ書かずに使える、Chart.js のベーシックな折れ線グラフです。
          実績と目標の 2 系列を、最低限のオプションで描画しています。
        </p>

        <div
          style={{
            height: 260,
            padding: 12,
            background: "#ffffff",
            borderRadius: 12,
            boxShadow: "0 8px 24px rgba(15,23,42,0.06)",
          }}
        >
          <Line
            data={{
              labels,
              datasets: [
                {
                  label: "室内",
                  data: actualValues,
                  borderColor: "#3b82f6",
                  backgroundColor: "#3b82f666",
                  tension: 0.4,
                  pointRadius: 4,
                  borderWidth: 2,
                },
                {
                  label: "室外",
                  data: targetValues,
                  borderColor: "#9ca3af",
                  borderDash: [6, 4],
                  tension: 0.4,
                  pointRadius: 0,
                  borderWidth: 2,
                },
              ],
            }}
            options={{
              responsive: true,
              plugins: {
                legend: { position: "top" },
              },
              scales: {
                x: { grid: { display: false } },
                y: { grid: { color: "#e5e7eb" } },
              },
            }}
          />
        </div>
      </section>
    </div>
  );
}
