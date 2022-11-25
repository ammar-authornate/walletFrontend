import React from 'react';
import { H1, P, H2, H3 } from './TypoGraphy';
import { MarginSpacer } from './Spacer';
import { Image } from './Image';
const Table3 = ({ title }) => {
  const data = [
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: 'blue',
      impact: '4.5',
    },
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: '#478593',
      impact: '4.5',
    },
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: '#437859',
      impact: '4.5',
    },
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: 'pink',
      impact: '4.5',
    },
  ];
  return (
    <div
      style={{ background: '#262626', padding: '20px', borderRadius: '20px' }}
    >
      <H1>{title}</H1>
      <MarginSpacer mb='3vh' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          margin: '10px',
        }}
      >
        <H2>Name</H2>
        <H2>Value(Coin)</H2>

        <H2>Value($)</H2>

        <H2>Flip Time</H2>
        <H2>Impact on Score</H2>
      </div>
      <hr style={{ opacity: '0.4' }} />
      <MarginSpacer mth='2vh' />
      {data.map((data, index) => {
        return (
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#302f2f',
              borderRadius: '20px',
              padding: '20px',
              marginBottom: '2vh',
              marginTop: '2vh',
            }}
            key={index}
          >
            <H2>{data.name}</H2>
            <H2>{data.BTC} BTC</H2>

            <H2>${data.value}</H2>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <H2>{data.time} Hour</H2>
              <H2
                style={{
                  background: `${data.color}`,
                  borderRadius: '20px',
                  marginLeft: '1rem',
                  padding: '10px',
                  textAlign: 'center',
                  fontSize: '12px',
                }}
              >
                {data.type}
              </H2>
            </div>
            <H2>{data.impact} %</H2>
          </div>
        );
      })}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '3rem',
        }}
      >
        <H1
          style={{
            textAlign: 'center',
            fontSize: '20px',
            marginRight: '1rem',
            cursor: 'pointer',
          }}
        >
          See all{' '}
        </H1>
        <Image height={'20px'} src='/assets/Greater.png' />
      </div>
    </div>
  );
};

export default Table3;
