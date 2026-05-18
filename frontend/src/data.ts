// src/data.ts
export type ChartDatum = {
  hour: string;
  inside: number; // 室内
  outside: number; // 室外
};

export const chartData: ChartDatum[] = [
  { hour: "0:00", inside: 20, outside: 25},
  { hour: "1:00", inside: 21, outside: 26 },
  { hour: "2:00", inside: 22, outside: 27 },
  { hour: "3:00", inside: 23, outside: 28 },
  { hour: "4:00", inside: 24, outside: 29 },
  { hour: "5:00", inside: 25, outside: 30 },
  { hour: "6:00", inside: 24, outside: 29 },
  { hour: "7:00", inside: 23, outside: 28 },
  { hour: "8:00", inside: 22, outside: 27 },
  { hour: "9:00", inside: 21, outside: 26 },
  { hour: "10:00", inside: 20, outside: 25 },
  { hour: "11:00", inside: 21, outside: 26 },
  { hour: "12:00", inside: 22, outside: 27 },
  { hour: "13:00", inside: 23, outside: 28 },
  { hour: "14:00", inside: 24, outside: 29 },
  { hour: "15:00", inside: 25, outside: 30 },
  { hour: "16:00", inside: 24, outside: 29 },
  { hour: "17:00", inside: 23, outside: 28 },
  { hour: "18:00", inside: 22, outside: 27 },
  { hour: "19:00", inside: 21, outside: 26 },
  { hour: "20:00", inside: 20, outside: 25 },
  { hour: "21:00", inside: 21, outside: 26 },
  { hour: "22:00", inside: 22, outside: 27 },
  { hour: "23:00", inside: 23, outside: 28 },
];
