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
import Tree from '../components/Tree';
import LineChart from '../components/lineChart';
import NestedDonut from '../components/PieChart';
import HalfPie from '../components/BarChart';
import PieChart2 from '../components/PieChart2';
import NftTable from '../components/TableNft';
import PieGreen from '../components/Pie';

const MachineWallet = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [activeButton, setActiveButton] = useState(0);
  const [page, setPage] = useState('Overview');
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
            borderRadius: '10px',
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
                  onClick={() => {
                    setActiveButton(i), setPage(btn);
                  }}
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
        <MarginSpacer />
        {page === 'Overview' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NestedDonut />
            </div>
            <div
              style={{
                padding: 0,
                borderRadius: '40px',
                background: '#262626',
                marginTop: '3vh',
              }}
            >
              <H1 style={{ paddingTop: '4vh', paddingLeft: '4vh' }}>
                Score over Time
              </H1>
              <MarginSpacer mt='3vh' />

              <LineChart width='100%' />
            </div>
            <div
              style={{
                padding: 0,
                borderRadius: '40px',
                background: '#262626',
                marginTop: '3vh',
              }}
            >
              <H1 style={{ paddingTop: '4vh', paddingLeft: '4vh' }}>
                Wallet origin
              </H1>
              <Tree />
            </div>
          </div>
        )}
        {page === 'Trasansactions' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PieGreen />
            </div>
            <MarginSpacer mt='3vh' />
            <CustomizedTables title={'Recent Transaction'} />
            <div
              style={{
                padding: 0,
                borderRadius: '40px',
                background: '#262626',
                marginTop: '3vh',
              }}
            >
              <div
                style={{
                  padding: 0,
                  borderRadius: '40px',
                  background: '#262626',
                  marginTop: '3vh',
                }}
              >
                <H1 style={{ paddingTop: '4vh', paddingLeft: '4vh' }}>
                  Asset Holding over Time
                </H1>
                <MarginSpacer mt='3vh' />
                <HalfPie />
              </div>
            </div>
            <MarginSpacer mt='3vh' />
            <CustomizedTables title={'Assets inflow/outflow'} />
          </div>
        )}
        {page === 'Past Mints' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PieGreen />
            </div>
            <MarginSpacer mt='3vh' />
            <NftTable title={'Mints Participated'} />
            <PieChart2 />
            <MarginSpacer mt='3vh' />
            <NftTable title={'ILO Participated'} />
          </div>
        )}
        {page === 'Insight' && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PieGreen />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineWallet;
