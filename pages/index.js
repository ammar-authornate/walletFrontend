import styles from '../styles/Home.module.css';
import { useState } from 'react';
import { H1 } from '../components/TypoGraphy';
import { Image } from '../components/Image';
import { Navbar } from '../components/Navbar';
import { EmailModel } from '../components/Model';
import { MarginSpacer } from '../components/Spacer';
import { Button } from '../components/Button';
import { InputBox } from '../components/TextBox';
import Graph from '../components/Graph';
import Chart from '../components/Chart';

export default function Home() {
  const [signUpModel, setSignUpModel] = useState(false);
  const emailModel = (bet) => {
    setSignUpModel(true);
  };
  const [scorePage, setScorePage] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div className={styles.container}>
      {signUpModel && <EmailModel onClose={() => setSignUpModel(false)} />}
      <div>
        <Navbar />
        {scorePage && (
          <div>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <MarginSpacer mt='2vh' />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <InputBox align={'center'} padding={'0px'} width={'100%'}>
                  <Button
                    style={{
                      background: '#44C454',
                      width: '10rem',
                      color: 'white',
                      fontSize: '20px',
                    }}
                  >
                    Nft
                  </Button>
                  <H1
                    style={{
                      fontSize: '25px',
                      marginLeft: '20px',
                      marginRight: '20px',
                    }}
                  >
                    Crypto
                  </H1>
                </InputBox>
              </div>
            </div>
            <div style={{ marginLeft: '6rem', marginRight: '6rem' }}>
            <MarginSpacer mt='3vh' />
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width:'100%'
                }}
              >
                <InputBox align={'center'} width={'50%'}>
                  <Button
                    style={{
                      background: '#44C454',
                      width: '10rem',
                      color: 'white',
                      fontSize: '20px',
                    }}
                  >
                    Nft
                  </Button>
                  <MarginSpacer mr='2vh' />
                  <H1 style={{ fontSize: '25px' }}>Transactions</H1>
                  <MarginSpacer mr='2vh' />
                  <H1 style={{ fontSize: '25px' }}>Past Mint</H1>
                  <MarginSpacer mr='2vh' />
                  <H1 style={{ fontSize: '25px' }}>Insight</H1>
                </InputBox>
                <div style={{ display: 'flex', alignItems: 'center' ,opacity:'0.7'}}>
                  <Image src='/assets/walleticon.png' alt='wallets' />
                  <H1 style={{fontSize:'22px',marginLeft:'1rem'}}>00x234535k43nfg4i35g34gh444</H1>
                  <Image style={{marginLeft:'1rem'}} src='/assets/Copy.png' alt='wallets' />
                </div>
              </div>
              <MarginSpacer mt='3vh'/>
              <Graph />
            </div>
          </div>
        )}
        {homePage && (
          <div>
            <MarginSpacer mt='2vh' />
            <div style={{ textAlign: 'center' }}>
              <H1 style={{ fontSize: '40px' }}>
                Track the Value <br /> of your assets
              </H1>
              <MarginSpacer mt='5vh' />
              <H1 style={{ fontSize: '12px', opacity: '0.6' }}>
                Track the Value Your assets from any platform you want
              </H1>
              <MarginSpacer mt='5vh' />
            </div>
            <MarginSpacer mt='2vh' />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InputBox
                align={'center'}
                border={'20px'}
                width={'30%'}
                marginRight={'20px'}
              >
                <div style={{ margin: '20px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <H1
                      lineHeight='100%'
                      font='Roobert'
                      size='32px'
                      weight='bold'
                      align='center'
                      style={{
                        verticalAlign: 'top',
                      }}
                    >
                      Your Wallet
                    </H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </div>
                  <MarginSpacer mt='2vh' />
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InputBox
                      background={'black'}
                      width={'100%'}
                      align={'center'}
                      border={'10px'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src='/assets/tick.png' alt='tick' />
                        <H1
                          style={{
                            fontSize: '15px',
                            opacity: '0.9',
                            marginLeft: '15px',
                          }}
                        >
                          0xHakasdfkjs...sgdgd
                        </H1>
                      </div>
                      <Image src='/assets/Copy.png' alt='tick' />
                    </InputBox>
                  </div>
                  <MarginSpacer mt='2vh' />
                  <H1
                    style={{
                      opacity: '0.7',
                      fontSize: '20px',
                      textAlign: 'start',
                    }}
                  >
                    Wallet connected
                  </H1>
                  <MarginSpacer mt='3vh' />
                  <Button
                    style={{ background: '#44C454' }}
                    onClick={() => emailModel()}
                  >
                    Analyse my report
                  </Button>
                </div>
              </InputBox>
              <InputBox align={'center'} border={'20px'} width={'30%'}>
                <div style={{ margin: '20px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <H1
                      lineHeight='100%'
                      font='Roobert'
                      size='32px'
                      weight='bold'
                      align='center'
                      style={{
                        verticalAlign: 'top',
                      }}
                    >
                      Bulk Report
                    </H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </div>
                  <MarginSpacer mt='2vh' />
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InputBox
                      background={'black'}
                      width={'100%'}
                      align={'center'}
                      border={'10px'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src='/assets/walleticon.png' alt='tick' />
                        <H1
                          style={{
                            fontSize: '15px',
                            opacity: '0.5',
                            marginLeft: '15px',
                          }}
                        >
                          bulk-report csv
                        </H1>
                      </div>
                      <Image src='/assets/Copy.png' alt='tick' />
                    </InputBox>
                  </div>
                  <MarginSpacer mt='2vh' />
                  <H1
                    style={{
                      opacity: '0.7',
                      fontSize: '15px',
                      textAlign: 'start',
                    }}
                  >
                    Upload an CSV to Analyse precious wallet
                  </H1>
                  <MarginSpacer mt='3vh' />
                  <Button
                    style={{ background: 'white', color: 'black' }}
                    onClick={() => {
                      setHomePage(false), setScorePage(true);
                    }}
                  >
                    Analyse another wallet
                  </Button>
                </div>
              </InputBox>
            </div>
            <MarginSpacer mt='2vh' />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InputBox
                align={'center'}
                border={'20px'}
                width={'30%'}
                marginRight={'20px'}
                background={'#44C454'}
              >
                <div style={{ margin: '20px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      width: '100%',
                    }}
                  >
                    <H1
                      lineHeight='100%'
                      font='Roobert'
                      size='32px'
                      weight='bold'
                      align='center'
                      style={{
                        verticalAlign: 'top',
                      }}
                    >
                      Another Wallet
                    </H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </div>
                  <MarginSpacer mt='2vh' />
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InputBox
                      background={'white'}
                      width={'100%'}
                      align={'center'}
                      border={'10px'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Image src='/assets/walleticon.png' alt='tick' />
                        <H1
                          style={{
                            fontSize: '15px',
                            opacity: '0.9',
                            marginLeft: '15px',
                            color: 'black',
                          }}
                        >
                          0xHakasdfkjs...sgdgd
                        </H1>
                      </div>
                      <Image src='/assets/copyblack.png' alt='tick' />
                    </InputBox>
                  </div>
                  <MarginSpacer mt='2vh' />
                  <H1
                    style={{
                      opacity: '0.9',
                      fontSize: '15px',
                      textAlign: 'start',
                    }}
                  >
                    No wallet found
                  </H1>
                  <MarginSpacer mt='3vh' />
                  <Button style={{ background: 'black', color: 'white' }}>
                    Analyse my wallet
                  </Button>
                </div>
              </InputBox>
            </div>
            <Navbar />
          </div>
        )}
      </div>
    </div>
  );
}
