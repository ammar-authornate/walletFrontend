import { useState } from 'react';
import { H1 } from '../components/TypoGraphy';
import { Image } from '../components/Image';
import { EmailModel } from '../components/Model';
import { MarginSpacer } from '../components/Spacer';
import { Button } from '../components/Button';
import { InputBox } from '../components/TextBox';
import Link from 'next/link';

export default function Home() {
  const [signUpModel, setSignUpModel] = useState(false);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const emailModel = (bet) => {
    setSignUpModel(true);
  };
  const [scorePage, setScorePage] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div>
      {signUpModel && <EmailModel onClose={() => setSignUpModel(false)} />}
      <div>
        {homePage && (
          <div style={{ width: 'auto' }}>
            <MarginSpacer mt='2vh' />
            <div style={{ textAlign: 'center' }}>
              <H1 style={{ fontSize: '25px' }}>
                Track the Value <br /> of your assets
              </H1>
              <MarginSpacer mt='5vh' />
              <H1 style={{ fontSize: '12px', opacity: '0.6' }}>
                Track the Value Your assets from any platform you want
              </H1>
              <MarginSpacer mt='5vh' />
            </div>
            <MarginSpacer mt='2vh' />
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: 'auto',
              }}
            >
              <InputBox
                align={'center'}
                border={'20px'}
                width={'25%'}
                marginRight={'20px'}
              >
                <div style={{ margin: '20px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <H1 style={{ fontSize: '20px' }}>Your Wallet</H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </div>
                  <MarginSpacer mt='2vh' />
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      width: '100%',
                    }}
                  >
                    <InputBox
                      width={'100%'}
                      background={'black'}
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
              <InputBox align={'center'} border={'20px'} width={'25%'}>
                <div style={{ margin: '20px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <H1 style={{ fontSize: '20px' }}>Bulk Report</H1>
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
                  <Link href={'/machineWallet'}>
                    <Button
                      style={{ background: 'white', color: 'black' }}
                      onClick={() => {
                        setHomePage(false), setScorePage(true);
                      }}
                    >
                      Analyse another wallet
                    </Button>
                  </Link>
                </div>
              </InputBox>
            </div>
            <MarginSpacer mt='2vh' />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InputBox
                align={'center'}
                border={'20px'}
                width={'25%'}
                marginRight={'20px'}
                background={'#44C454'}
              >
                <div style={{ margin: '20px', width: '100%' }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                    }}
                  >
                    <H1 style={{ fontSize: '20px' }}>Another Wallet</H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </div>
                  <MarginSpacer mt='2vh' />
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <InputBox
                      background={'white'}
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
          </div>
        )}
      </div>
    </div>
  );
}
