import React from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

const data = [
  {
    name: "N-1 (8.5 K€)",
    uv: 9.8,
    pv: 4800,
    fill: "#e55039"
  },
  {
    name: "CA (3.5 K€)",
    uv: 3.5,
    pv: 4800,
    fill: "#f6b93b"
  },
  {
    name: "Objectif (12.8 K€)",
    uv: 12.8,
    pv: 4800,
    fill: "#38ada9"
  }
];

const style = {
  top: 0,
  left: 350,
  lineHeight: "24px"
};

export default function Chart() {
  return (
    <div style={{display:'flex',justifyContent:'center',marginTop:'3vh',marginBottom:'3vh'}}>
    <RadialBarChart
      width={500}
      height={300}
      cx={150}
      cy={150}
      innerRadius={60}
      outerRadius={160}
      barSize={24}
      data={data}
    >
      <RadialBar
        minAngle={100}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={18}
        width={120}
        height={120}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
    </div>
  );
}
