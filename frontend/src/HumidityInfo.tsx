import './HumidityInfo.css'
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
import { chartData } from "./data";

// 時間ごとの表示：1日を1時間単位で区切ったときの、温度推移グラフ(00:00)
// 日ごとの表示：1週を1日単位で区切ったときの、温度推移グラフ（表形式のグラフで、室内外の最高・最低温度を表示する）

// DBの温度のデータをすべての期間で一括で取得する
// 時間軸別のタブの切り替えの際に、バックエンドからのロードを挟まないようにし、表示のみを切り替えるようにする
// 1. バックエンド側から室内環境データ（温度、測定時刻）を取得する
// 2. バックエンド側から室外環境データ（温度、測定時刻）を取得する
// 3. 各測定時刻を、「00:00」のような形の表記に変更する
// 4. グラフに時刻と温度の情報を、青色でプロットする（室内）
// 5. グラフに時刻と温度の情報を、灰色でプロットする（室外）

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

export function HumidityInfo() {
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

