import React from 'react';
import {
  RadialBarChart,
  PolarAngleAxis,
  RadialBar,
  Legend,
  ResponsiveContainer,
  Label,
} from 'recharts';
import { H1 } from './TypoGraphy';

const ChartScore = () => {
  // Sample data
  const data = [
    { name: 'Claim', x: 1, fill: 'aqua' },
    { name: 'Average', x: 2, fill: 'yellow' },
    { name: 'Undercuts', x: 3, fill: '#44C454' },
    // { name: 'D', x: 4, fill: 'blue' },
    // { name: 'E', x: 5, fill: 'orange' },
    // { name: 'F', x: 6, fill: 'red' },
    // { name: 'G', x: 7, fill: 'black' },
    // { name: 'H', x: 8, fill: 'purple' },
    // { name: 'I', x: 9, fill: 'gray' },
  ];
  const Bullet = ({ backgroundColor }) => {
    return (
      <div
        className='CirecleBullet'
        style={{
          backgroundColor,
          width: '90px',
          height: '40px',
          borderRadius: '15px',
        }}
      ></div>
    );
  };
  const style = {
    top: 160,
    right: 490,
    lineHeight: '24px',
  };
  const CustomizedLegend = (props) => {
    const { payload } = props;
    return (
      <ul className='LegendList'>
        {payload.map((entry, index) => (
          <li key={`item-${index}`}>
            <div
              className='BulletLabel'
              style={{
                display: 'flex',
                margin: '20px',
                alignItems: 'center',
                border: '1px solid rgba(255,255,255,0.5)',
              }}
            >
              <div style={{display:'flex',margin:'12px',alignItems:'center'}}>
                <Bullet backgroundColor={entry.payload.fill} />
                <div
                  className='BulletLabelText'
                  style={{
                    marginLeft: '2rem',
                    color: 'white',
                    fontSize: '20px',
                    textDecoration: 'bold',
                  }}
                >
                  {entry.value}
                </div>

              </div>
            </div>
            <div style={{ marginLeft: '20px' }}>{entry.payload.value}</div>
          </li>
        ))}
      </ul>
    );
  };

  const CustomLabel = ({ viewBox, labelText, value }) => {
    const { cx, cy } = viewBox;
    return (
      <g>
        <text
          x={cx}
          y={cy}
          className='recharts-text recharts-label'
          textAnchor='middle'
          dominantBaseline='central'
          alignmentBaseline='middle'
          fontSize='15'
        >
          {labelText}
        </text>
        <text
          x={cx}
          y={cy + 20}
          className='recharts-text recharts-label'
          textAnchor='middle'
          dominantBaseline='central'
          alignmentBaseline='middle'
          fill='#0088FE'
          fontSize='26'
          fontWeight='600'
        >
          {value}
        </text>
      </g>
    );
  };
  return (
    <ResponsiveContainer width='100%' height={500}>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <RadialBarChart
          width={500}
          height={500}
          background={{ fill: data[0].fill }}
          data={data}
          cx={250}
          cy={250}
          innerRadius={120}
          outerRadius={210}
          barSize={30}
          startAngle={90}
          endAngle={-270}
        >
          <PolarAngleAxis
            tra
            type='number'
            domain={[60, 30]}
            angleAxisId={0}
            tick={false}
          />
          <RadialBar
            background
            dataKey='value'
            cornerRadius={30 / 2}
            fill='#0BEFF2'
          />
          <Label
            content={<CustomLabel labelText='ICPs' value={15} />}
            position='center'
          />
          <Legend content={<CustomizedLegend />} wrapperStyle={style} />
        </RadialBarChart>
      </div>
    </ResponsiveContainer>
  );
};

export default ChartScore;
