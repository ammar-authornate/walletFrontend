import { useState, useEffect } from 'react';
import { H1 } from '../components/TypoGraphy';
import { Image } from '../components/Image';
import { EmailModel } from '../components/Model';
import { MarginSpacer } from '../components/Spacer';
import { Button } from '../components/Button';
import { InputBox } from '../components/TextBox';
import Link from 'next/link';
import Aos from 'aos';
import { CenterItems, MainHome, AlignCenter } from '../components/Styles';
import Textbox from '../components/inputBox';

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [signUpModel, setSignUpModel] = useState(false);

  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const emailModel = (bet) => {
    setSignUpModel(true);
  };
  const [value, setValue] = useState('0xHakasdfk...sgdgd');
  const [report, setReport] = useState('bulk-report csv');
  const [analyse, setAnalyse] = useState('0xHakasdfk...sgdgd');

  const [scorePage, setScorePage] = useState(false);
  const [homePage, setHomePage] = useState(true);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <div>
      {/* {signUpModel && <EmailModel onClose={() => setSignUpModel(false)} />} */}
      <div>
        {homePage && (
          <div data-aos='fade-up' style={{ width: 'auto' }}>
            <MarginSpacer mt='2vh' />
            <div style={{ textAlign: 'center' }}>
              <H1 style={{ fontSize: '30px' }}>
                Track the Value <br /> of your assets
              </H1>
              <MarginSpacer mt='3vh' />
              <H1 style={{ fontSize: '12px', opacity: '0.6' }}>
                Track the value your assets from any platform you all in one
                place
              </H1>
              <MarginSpacer mt='6vh' />
            </div>
            <MarginSpacer mt='2vh' />
            <CenterItems>
              <InputBox
                align={'center'}
                border={'20px'}
                width={'25%'}
                marginRight={'20px'}
              >
                <div style={{ margin: '20px', width: '100%' }}>
                  <MainHome>
                    <H1 style={{ fontSize: '20px' }}>Your Wallet</H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </MainHome>
                  <MarginSpacer mt='2vh' />
                  <CenterItems>
                    <InputBox
                      width={'100%'}
                      background={'black'}
                      align={'center'}
                      border={'10px'}
                      padding={'10px'}
                    >
                      <AlignCenter>
                        <Textbox
                          icon='/assets/tick.png'
                          color='rgba(255, 255, 255, 1)'
                          value={value}
                          onChange={(e) => setValue(e.target.value)}
                        />
                      </AlignCenter>
                      <Image
                        src='/assets/Copy.png'
                        alt='tick'
                        style={{ cursor: 'pointer', }}
                        onClick={() => navigator.clipboard.writeText(value)}
                      />
                    </InputBox>
                  </CenterItems>
                  <MarginSpacer mt='2vh' />
                  <H1
                    style={{
                      opacity: '0.7',
                      fontSize: '15px',
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
                  <MainHome>
                    <H1 style={{ fontSize: '20px' }}>Bulk Report</H1>
                    <Image src='/assets/tick.png' alt='hello' />
                  </MainHome>
                  <MarginSpacer mt='2vh' />
                  <CenterItems>
                    <InputBox
                      background={'black'}
                      width={'100%'}
                      align={'center'}
                      border={'10px'}
                      padding={'10px'}
                    >
                      <AlignCenter>
                        <Textbox
                          icon='/assets/walleticon.png'
                          value={report}
                          onChange={(e) => setReport(e.target.value)}
                        />
                      </AlignCenter>
                      <div>
                        <Image
                          src='/assets/Copy.png'
                          alt='tick'
                          style={{ cursor: 'pointer' }}
                          onClick={() => navigator.clipboard.writeText(report)}
                        />
                      </div>
                    </InputBox>
                  </CenterItems>
                  <MarginSpacer mt='2vh' />
                  <H1
                    style={{
                      opacity: '0.7',
                      fontSize: '12px',
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
            </CenterItems>
            <MarginSpacer mt='2vh' />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <InputBox
                align={'center'}
                border={'20px'}
                width={'25%'}
                marginRight={'20px'}
                background={'#34A542'}
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
                      padding={'10px'}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <AlignCenter>
                          <Textbox
                            icon='/assets/walleticon.png'
                            color='rgba(0, 0, 0, 1)'
                            value={analyse}
                            onChange={(e) => setAnalyse(e.target.value)}
                          />
                        </AlignCenter>
                      </div>
                      <Image
                        src='/assets/copyblack.png'
                        alt='tick'
                        style={{ cursor: 'pointer' }}
                        onClick={() => navigator.clipboard.writeText(analyse)}
                      />
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
