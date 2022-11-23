import { useState } from 'react';
import { Image } from './Image';
import styled from 'styled-components';
import { H1 } from './TypoGraphy';
import { MarginSpacer } from './Spacer';
import { InputBox } from './TextBox';
MarginSpacer;
const Wrapper = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.7);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
`;

const Container = styled.div`
  background-color: #181818;
  box-shadow: 0px 2px 0px #282828;
  border-radius: 20px;
  width: 520px;
  height: auto;
`;

const Title = styled.h1`
  font-family: Tofino, sans-serif;
  padding: 20px 40px;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.9);
  border-bottom: 2px solid grey;
`;

const Body = styled.div`
  padding: 50px;
  text-align: center;
`;

const InfoText1 = styled.p`
  font-family: Tofino, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 50px;
  text-transform: uppercase;
`;

const InfoText2 = styled.p`
  font-family: Tofino, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #bcfe01;
  margin-bottom: 50px;
  max-width: 396px;
  margin-left: auto;
  margin-right: auto;
`;

const Button = styled.button`
  padding: 16px 40px 18px;
  width: 100%;
  height: 100%;
  background: linear-gradient(97.74deg, #cef458 44.02%, #ae29dd 178.75%);
  border-radius: 70px;
  border: 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
`;

export const EmailModel = ({ bet, onClose }) => {
  return (
    <Wrapper>
      <Container>
        <Body>
          <InputBox width={'100%'} background='white' align={'center'}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    clipPath:
                      'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
                    background: '#000',
                    height: '50px',
                    width: '50px',
                    margin: '10px auto',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Image src='/assets/meta.png' alt='meta' width={'40px'} />
                </div>
                <H1
                  style={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: 'black',
                  }}
                >
                  MetaMask
                </H1>
              </div>
              <Button
                style={{
                  width: '50%',
                  fontSize: '15px',
                  background: 'black',
                  color: 'white',
                  height: '100%',
                  paddingBottom: '15px',
                }}
              >
                Connect
              </Button>
            </div>
          </InputBox>
          <MarginSpacer mt='2vh' />
          <InputBox
            width={'100%'}
            background='rgba(0, 0, 0, 0.3)'
            align={'center'}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Image src='/assets/meta.png' alt='meta' width={'40px'} />
                <H1
                  style={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: 'white',
                  }}
                >
                  Crypto Wallet
                </H1>
              </div>
              <Button
                style={{
                  width: '50%',
                  fontSize: '15px',
                  background: 'transparent',
                  color: 'rgba(255,255,255, 0.4)',
                  height: '100%',
                  paddingBottom: '15px',
                  border: '1px solid rgba(255,255,255, 0.4)',
                }}
              >
                Connect
              </Button>
            </div>
          </InputBox>
          <MarginSpacer mt='2vh' />
          <MarginSpacer mt='2vh' />
          <InputBox
            width={'100%'}
            background='rgba(0, 0, 0, 0.3)'
            align={'center'}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Image src='/assets/meta.png' alt='meta' width={'40px'} />
                <H1
                  style={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: 'white',
                  }}
                >
                  Wallethub
                </H1>
              </div>
              <Button
                style={{
                  width: '50%',
                  fontSize: '15px',
                  background: 'transparent',
                  color: 'rgba(255,255,255, 0.4)',
                  height: '100%',
                  paddingBottom: '15px',
                  border: '1px solid rgba(255,255,255, 0.4)',
                }}
              >
                Connect
              </Button>
            </div>
          </InputBox>
          <MarginSpacer mt='2vh' />
          <InputBox
            width={'100%'}
            background='rgba(0, 0, 0, 0.3)'
            align={'center'}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                }}
              >
                <Image src='/assets/meta.png' alt='meta' width={'40px'} />
                <H1
                  style={{
                    fontSize: '15px',
                    marginLeft: '10px',
                    color: 'white',
                  }}
                >
                  Coinbase
                </H1>
              </div>
              <Button
                style={{
                  width: '50%',
                  fontSize: '15px',
                  background: 'transparent',
                  color: 'rgba(255,255,255, 0.4)',
                  height: '100%',
                  paddingBottom: '15px',
                  border: '1px solid rgba(255,255,255, 0.4)',
                }}
              >
                Connect
              </Button>
            </div>
          </InputBox>
          <MarginSpacer mt='2vh' />
        </Body>
      </Container>
    </Wrapper>
  );
};
