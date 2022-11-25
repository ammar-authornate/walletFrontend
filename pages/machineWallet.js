import React, { useState } from 'react';
import Graph from '../components/Graph';
import { Button } from '../components/Button';
import { InputBox } from '../components/TextBox';
import { H1 } from '../components/TypoGraphy';
import { Image } from '../components/Image';
import { MarginSpacer } from '../components/Spacer';
import CustomizedTables from '../components/Table';
import Tree from '../components/Tree';
import LineChart from '../components/lineChart';
import NestedDonut from '../components/PieChart';
import HalfPie from '../components/BarChart';
import PieChart2 from '../components/PieChart2';
import NftTable from '../components/TableNft';
import PieGreen from '../components/Pie';
import { IconButton } from '../components/Button';
import { MainHome, AlignCenter, CenterItems } from '../components/Styles';

const MachineWallet = () => {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(!active);
  };
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
      <div style={{ marginLeft: '6rem', marginRight: '6rem' }}>
        <MarginSpacer mt='3vh' />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '10px',
            border: '1px solid #23562a',
            borderRadius: '10px 10px 0px 0px',
          }}
        >
          <div
            data-aos='fade-right'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
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

          <div
            data-aos='fade-left'
            data-aos-offset='300'
            data-aos-easing='ease-in-sine'
            style={{
              display: 'flex',
              alignItems: 'center',
              opacity: '0.4',
            }}
          >
            <Image src='/assets/walleticon.png' alt='wallets' />
            <H1
              style={{
                fontSize: '22px',
                marginLeft: '1rem',
                fontWeight: '400',
              }}
            >
              00x234535k43nfg4i35g34gh444
            </H1>
            <Image
              style={{ marginLeft: '1rem' }}
              src='/assets/Copy.png'
              alt='wallets'
            />
          </div>
        </div>
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
            <div>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-evenly',
                  alignItems: 'center',
                  background: '#262626',
                  borderRadius: '20px',
                  padding: '40px',
                }}
              >
                <Image src='/assets/Group.png' height={'200px'} alt='group' />
                <div>
                  <H1 style={{ lineHeight: '50px' }}>
                    You can improve your score by holding assets for a longer{' '}
                    <br /> time. Dropping values will decrease the score rate
                    quickly.
                  </H1>
                  <H1
                    style={{
                      fontSize: '17px',
                      marginTop: '2.5rem',
                      opacity: '0.5',
                    }}
                  >
                    it is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at{' '}
                    <br />
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribution of letters, as <br />{' '}
                    opposed to using .Content here, content here, making it look
                    like readable English.
                  </H1>
                </div>
              </div>
              <MarginSpacer mt='2vh'/>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                  alignItems: 'center',
                }}
              >
                <div
                  style={{
                    width: '100px',
                    borderWidth: '0.00001px',
                    borderStyle: 'solid',
                    marginRight: '5px',
                    height: '1px',
                    borderImage:
                      'linear-gradient(213deg,#fff 1%,#fff 50%,#000) 100% 0 100% 0/3px 0 3px 0 stretch',
                  }}
                ></div>
                <Image
                  src='/assets/greendot.png'
                  alt='greendot'
                  width={'20px'}
                />
                <div
                  style={{
                    width: '100px',
                    marginLeft: '5px',
                    borderWidth: '0.00001px',
                    borderStyle: 'solid',
                    height: '1px',
                    borderImage:
                      'linear-gradient(90deg,#fff 1%,#fff 50%,#000) 100% 0 100% 0/3px 0 3px 0 stretch',
                  }}
                ></div>
              </div>
            </div>
            <MarginSpacer mt='2vh'/>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default MachineWallet;
