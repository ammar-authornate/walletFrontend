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
      image: '1',
    },
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: '#478593',
      impact: '4.5',
      image: '2',
    },
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: '#437859',
      impact: '4.5',
      image: '3',
    },
    {
      name: 'Bitoin',
      BTC: '1.34587',
      value: '34,546,456',
      time: '1',
      type: 'journey',
      color: 'pink',
      impact: '4.5',
      image: '4',
    },
  ];
  return (
    <div
      style={{ background: '#262626', padding: '25px', borderRadius: '20px' }}
    >
      <H1>{title}</H1>
      <MarginSpacer mb='3vh' />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginLeft: '5.5rem',
        }}
      >
        <H2>Name</H2>
        <H2>Collection</H2>

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
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Image
                src={`/assets/${data.image}.png`}
                alt='ok'
                width={'40px'}
                style={{ marginRight: '2rem' }}
              />
              <H1 style={{ fontSize: '18px', fontWeight: '600' }}>
                {data.name}
              </H1>
            </div>

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
          style={{ textAlign: 'center', fontSize: '20px', marginRight: '1rem' }}
        >
          See all{' '}
        </H1>
        <Image height={'20px'} src='/assets/Greater.png' />
      </div>
    </div>
  );
};

export default Table3;
