import React from 'react';
import { Area, XAxis, AreaChart, Tooltip, YAxis,CartesianGrid } from 'recharts';
import { MarginSpacer } from './Spacer';
import { H1 } from './TypoGraphy';
export default function Graph() {
  const data = [
    {
      name: 'Jan',
      uv: 260,
      total: 800,
    },
    {
      name: 'Feb',
      uv: 320,
    },
    {
      name: 'March',
      uv: 150,
    },
    {
      name: 'April',
      uv: 700,
    },
    {
      name: 'May',
      uv: 300,
    },
    {
      name: 'Aug',
      uv: 500,
    },
  ];



  return (
    <div style={{ padding: 0 ,borderRadius:'40px',background:'#262626'}}>
      <H1 style={{paddingTop:'4vh',paddingLeft:'4vh'}}>Score Over Time</H1>
      <MarginSpacer mt='4vh' />
      <AreaChart
        width={1500}
        height={500}
        data={data}
        margin={{ top: 30,  bottom: 20 }}
      >
        <defs>
          <linearGradient id='colorUv' x1='0' y1='0' x2='0' y2='1'>
            <stop offset='0%' stopColor='#44C454' stopOpacity={10} />
            <stop offset='95%' stopColor='#44C454' stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="0" opacity='0.1' vertical={false}  />
        <XAxis
          dataKey='name'
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'rgba(255,255,255, 0.6)', fontSize: 14 }}
        />
        <YAxis
          axisLine={false}
          tickLine={false}
          tick={{ fill: 'rgba(255,255,255, 0.6)', fontSize: 14 }}
          dataKey='total'
        />
        <Tooltip cursor={{ strokeDasharray: 6 }} />
        <Area
          type='monotone'
          dataKey='uv'
          stroke='#44C454'
          fillOpacity={1}
          strokeWidth={3}
          fill='url(#colorUv)'
          dot={{ stroke: '#ffff', fill: '#44C454', strokeWidth: 3, r: 10 }}
          activeDot={{
            stroke: '#44C454',
            fill: '#44C454',
            strokeWidth: 1,
            r: 2,
          }}
        />
      </AreaChart>
    </div>
  );
}
