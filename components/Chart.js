import React from 'react';
import {
  RadialBarChart,
  RadialBar,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'unknow',
    uv: 6.67,
    pv: 4800,
    fill: '#44C454',
  },
];

const style = {
  top: 0,
  left: 750,
  lineHeight: '24px',
};

export default function Chart() {
  return (
    <ResponsiveContainer width='95%' height={400}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={120}
          outerRadius={210}
          barSize={30}
          data={data}
        >
          <defs>
            <linearGradient id='colorView' x1='0' y1='0' x2='0' y2='1'>
              <stop offset='30%' stopColor='#dd1438' stopOpacity={0.4} />
              <stop offset='75%' stopColor='#ff9bff81' stopOpacity={0.3} />
              <stop offset='95%' stopColor='#FFFFFF' stopOpacity={0.2} />
            </linearGradient>
          </defs>
          <RadialBar
            minAngle={15}
            label={{ position: 'insideStart', fill: '#fff' }}
            background
            clockWise
            dataKey='uv'
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout='vertical'
            verticalAlign='middle'
            wrapperStyle={style}
          />
        </RadialBarChart>
      </div>
    </ResponsiveContainer>
  );
}
