import React from 'react';
import {
  BarChart,
  Bar,
  Brush,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { MarginSpacer } from './Spacer';
import { H1 } from './TypoGraphy';

const BarGraph = () => {
  const data = [
    { name: 'A', x: 861 },
    { name: 'B', x: 862 },
    { name: 'C', x: 343 },
    { name: 'D', x: 454 },
    { name: 'E', x: 435 },
    { name: 'F', x: 653 },
    { name: 'G', x: 734 },
  ];

  return (
    <div
      style={{
        padding: 0,
        borderRadius: '40px',
        background: '#262626',
        marginTop: '3vh',
      }}
    >
      <H1 style={{ paddingTop: '4vh', paddingLeft: '4vh' }}>
        Assets Holding over Time
      </H1>
      <MarginSpacer mt='4vh' />
      <ResponsiveContainer width='95%' height={400}>
        <BarChart width={1500} height={700} data={data}>
          <CartesianGrid strokeDasharray='0' opacity='0.1' vertical={false} />
          <XAxis dataKey='name' />
          <YAxis />
          <Brush dataKey='name' height={30} stroke='#44C454' />
          <Bar
            dataKey='x'
            fill='#44C454'
            barSize={30}
            radius={[14, 14, 0, 0]}
            style={{
              '&:hover': {
                background: '#efefef',
              },
            }}
          />
          <Tooltip cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarGraph;
