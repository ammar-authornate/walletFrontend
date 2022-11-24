import styled from 'styled-components';
import { Image } from './Image';
import { MarginSpacer } from './Spacer';
import { Wrapper } from './Styles';
import { InputBox } from './TextBox';
import { H1 } from './TypoGraphy';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top:20px
`;
const NavbarItems = styled.div`
  display: flex;
  justify-content: center;
`;
const NavbarMenu = styled.div`
  display: flex;
  margin-left: 30px;
`;
export function Footer() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  return (
    <NavbarWrapper>
      <div
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
      </div>
      <NavbarItems style={{ alignItems: 'center' }}>
        <div
          style={{
            display: 'flex',
          }}
        >
          <Image src='/assets/footer.png' width={'102px'}   alt='Footer'/>
        </div>
      </NavbarItems>
    </NavbarWrapper>
  );
}
