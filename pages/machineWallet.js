import React, { useState } from 'react';
import Graph from '../components/Graph';
import { Button } from '../components/Button';
import { InputBox } from '../components/TextBox';
import { H1 } from '../components/TypoGraphy';
import { Image } from '../components/Image';
import { MarginSpacer } from '../components/Spacer';
import CustomizedTables from '../components/Table';
import Tree from '../components/Tree';
import styled from 'styled-components';
import LineChart from '../components/lineChart';
import NestedDonut from '../components/PieChart';
import Textbox from '../components/inputBox';
import HalfPie from '../components/BarChart';
import PieChart2 from '../components/PieChart2';
import NftTable from '../components/TableNft';
import PieGreen from '../components/Pie';
import { IconButton } from '../components/Button';
import { MainHome, AlignCenter, CenterItems } from '../components/Styles';
import Instruction from '../components/Instruction';

const MachineWallet = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  const [value, setValue] = useState('00x234535k43nfg4i35g34gh444');
  const [activeButton, setActiveButton] = useState(0);
  const [page, setPage] = useState('Overview');
  const labels = [
    {
      name: 'Overview',
      icon: '1icon',
    },
    {
      name: 'Transaction',
      icon: '2icon',
    },
    {
      name: 'Past Mints',
      icon: '4icon',
    },
    {
      name: 'Insight',
      icon: '3icon',
    },
  ];
  const ButtonNav = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: '10px';
    margin:'10px';
    border: 1px solid #23562a;
    border-radius: '10px 10px 0px 0px';
    @media screen and (max-width: 900px) {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 2em;
      width: '100%';
      border: none;
      gap: 2em;
      margin: 2em;
    }
  `;
  const InputCoin = styled.div`
  display:flex;
  alignItems:center;
  opacity: 0.4
  width: 40%;
  @media screen and (mix-width:900px){
    width: 100%;
  }
  `;

  return (
    <div>
      <CenterItems data-aos='fade-down'>
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
          <IconButton
            style={{
              backgroundColor: active === true ? '#262626' : '#44C454',
              width: '10rem',
              color: 'white',
              fontSize: '20px',
            }}
            onClick={handleClick}
          >
            Nft
          </IconButton>
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
      </CenterItems>
      <div style={{ marginLeft: '4rem', marginRight: '4rem' }}>
        <MarginSpacer mt='3vh' />

        <ButtonNav>
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
          >
            <InputBox padding={'8px'}>
              {labels.map((btn, i) => (
                <IconButton
                  icon={`/assets/${btn.icon}.png`}
                  style={{
                    backgroundColor: i === activeButton ? '#44C454' : '#262626',
                    color: 'white',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px',
                    fontSize: '18px',
                  }}
                  key={i}
                  onClick={() => {
                    setActiveButton(i), setPage(btn.name);
                  }}
                >
                  {btn.name}
                </IconButton>
              ))}
            </InputBox>
          </div>

          <InputCoin
            data-aos='fade-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            style={{
              display: 'flex',
              alignItems: 'center',
              opacity: '0.4',
            }}
          >
            <Textbox
              icon='/assets/walleticon.png'
              color='rgba(255, 255, 255, 1)'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <Image src='/assets/Copy.png' alt='wallets' />
          </InputCoin>
        </ButtonNav>
        {page === 'Overview' && (
          <div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <NestedDonut />
            </div>
            <div
              style={{
                padding: 0,
                borderRadius: '40px',
                background: '#262626',
                marginTop: '1vh',
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
        {page === 'Transaction' && (
          <div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PieGreen />
            </div>
            <MarginSpacer mt='1vh' />
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
          <div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PieGreen />
            </div>
            <MarginSpacer mt='1vh' />
            <NftTable title={'Mints Participated'} />
            <div
              style={{
                padding: 0,
                borderRadius: '40px',
                background: '#262626',
                marginTop: '3vh',
              }}
            >
              <H1
                style={{
                  paddingTop: '4vh',
                  paddingLeft: '4vh',
                  fontSize: '25px',
                }}
              >
                Primary Sales Participation Quality
              </H1>
              <PieChart2 />
            </div>
            <MarginSpacer mt='3vh' />
            <NftTable title={'ILO Participated'} />
          </div>
        )}
        {page === 'Insight' && (
          <div data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PieGreen />
            </div>

            <Instruction />
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineWallet;
