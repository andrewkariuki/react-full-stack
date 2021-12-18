import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
const data = [
  {
    date: "Mon 10",
    uv: 4000,
  },
  {
    date: "Tue 11",
    uv: 3000,
  },
  {
    date: "Wed 12",
    uv: 2000,
  },
  {
    date: "Thur 13",
    uv: 2780,
  },
  {
    date: "Fri 14",
    uv: 1890,
  },
  {
    date: "Sat 15",
    uv: 2390,
  },
  {
    date: "Page G",
    uv: 3490,
  },
];

export const Chart: React.FC = () => {
  return (
    <LineChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
    </LineChart>
  );
};
