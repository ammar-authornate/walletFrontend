import styled from 'styled-components';
import { Image } from './Image';
import { MarginSpacer } from './Spacer';
import { Wrapper } from './Styles';
import { InputBox } from './TextBox';
import { H1 } from './TypoGraphy';
import Link from 'next/link';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
const NavbarItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    gap: 2em;
    margin-bottom: 2em;
  }
`;
const NavbarMenu = styled.div`
  display: flex;
  margin-left: 30px;
`;
export function Navbar() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth == 768;
  return (
    <NavbarWrapper data-aos='fade-down-right'>
      <Link
        href={'/'}
        style={
          isMobile
            ? {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }
            : {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }
        }
      >
        <Image
          style={{ cursor: 'pointer' }}
          width={'60px'}
          height={'60px'}
          src='/assets/Group.png'
          alt='Wallet logo'
        />
        <div
          style={{
            marginLeft: '15px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <H1 style={{ fontSize: '30px' }}>machine</H1>
          <H1 style={{ fontSize: '30px', color: '#44C454' }}>wallet</H1>
        </div>
      </Link>
      <NavbarItems>
        <Image src='/assets/print.png' alt='print' width={'22px'} />
        <H1
          style={{
            marginLeft: '12px',
            marginRight: '20px',
            opacity: '0.6',
            fontSize: '16px',
            fontWeight: '400',
          }}
        >
          Print&nbsp;Report
        </H1>
        <InputBox
          background={'black'}
          border={'20px'}
          padding={'7px'}
          width={'400px'}
        >
          <InputBox border={'10px'} align={'center'} width={'100%'}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.6em',
                cursor: 'pointer',
              }}
            >
              <Image src='/assets/greendot.png' alt='greendot' width={'15px'} />
              <H1 style={{ fontSize: '15px' }}>$0.00</H1>
              <H1 style={{ fontSize: '15px' }}>Connected to</H1>
              <div
                style={{
                  clipPath:
                    'polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)',
                  background: '#000',
                  height: '30px',
                  width: '30px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Image src='/assets/meta.png' width={'20px'} alt='meta' />
              </div>
              <H1 style={{ fontSize: '15px', color: '#44C454' }}>MetaMask</H1>
            </div>
          </InputBox>
        </InputBox>
      </NavbarItems>
    </NavbarWrapper>
  );
}
