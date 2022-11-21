import React, { useState } from 'react';
import Graph from '../components/Graph';
import { Button } from '../components/Button';
import { InputBox } from '../components/TextBox';
import { H1 } from '../components/TypoGraphy';
import { Image } from '../components/Image';
import { MarginSpacer } from '../components/Spacer';
import Chart from '../components/Chart';
import BarGraph from '../components/BarGraph';
import CustomizedTables from '../components/Table';
import ChartScore from '../components/ChartScore';


const MachineWallet = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [activeButton, setActiveButton] = useState(0);
  const labels = ['Overview', 'Trasansactions', 'Past Mints', 'Insight'];
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MarginSpacer mt='2vh' />
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            background: '#262626',
            borderRadius: '60px',
            alignItems: 'center',
          }}
        >
          <Button
            style={{
              backgroundColor: active === true ? '#262626' : '#44C454',
              width: '10rem',
              color: 'white',
              fontSize: '20px',
            }}
            onClick={handleClick}
          >
            Nft
          </Button>
          <Button
            style={{
              backgroundColor: active ? '#44C454' : '#262626',
              width: '10rem',
              color: 'white',
              fontSize: '20px',
              border: 'none',
            }}
            onClick={handleClick}
          >
            Crypto
          </Button>
        </div>
      </div>
      <div style={{ marginLeft: '6rem', marginRight: '6rem' }}>
        <MarginSpacer mt='3vh' />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '10px',
            border: '1px solid #23562a',
            borderRadius: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              background: '#262626',
              borderRadius: '60px',
              alignItems: 'center',
            }}
          >
            <InputBox padding={'8px'}>
              {labels.map((btn, i) => (
                <Button
                  style={{
                    backgroundColor: i === activeButton ? '#44C454' : '#262626',
                    width: '10rem',
                    color: 'white',
                    fontSize: '20px',
                  }}
                  key={i}
                  onClick={() => setActiveButton(i)}
                >
                  {btn}
                </Button>
              ))}
            </InputBox>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              opacity: '0.7',
            }}
          >
            <Image src='/assets/walleticon.png' alt='wallets' />
            <H1 style={{ fontSize: '22px', marginLeft: '1rem' }}>
              00x234535k43nfg4i35g34gh444
            </H1>
            <Image
              style={{ marginLeft: '1rem' }}
              src='/assets/Copy.png'
              alt='wallets'
            />
          </div>
        </div>

        <MarginSpacer mt='3vh' />
        <Chart />
        <Graph />
        <BarGraph />
        <CustomizedTables />
        <ChartScore />
      </div>
    </div>
  );
};

export default MachineWallet;
