import React from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const data = [
  {
    name: "Mon 10",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Tue 11",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Wed 12",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Thur 13",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Fri 14",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Start 15",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sun 16",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export function Chart() {
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
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
      <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
    </LineChart>
  );
}
