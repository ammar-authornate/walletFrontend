import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { H1, H2 } from './TypoGraphy';
import { Image } from './Image';
import Spacer, { MarginSpacer } from './Spacer';
const Container = styled.div`
  background: #262626;
  border-radius: 30px;
  width: ${(props) => props.width || '100%'};
  height: ${(props) => props.height || '100%'};
  margin-top: ${(props) => props.marginTop || ''};
  margin-right: ${(props) => props.mr || ''};
  position: relative;
`;
const Wrapper = styled.div`
  margin-top: 100px;
`;
const Header = styled.div`
  padding: 10px 25px;
  border-bottom: ${(props) =>
    props.border_bottom_flag ? `` : '1px solid #282828'};
  display: flex;
  justify-items: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-family: Tofino, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 29px;
  // text-transform: uppercase;
  letter-spacing: 2px;
  color: #1b1a1a;
`;

const SubLink = styled.span`
  font-family: Tofino, sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  letter-spacing: 2px;
  color: #1b1a1a;
  cursor: pointer;
  margin-left: 20px;
`;

const Body = ({
  title,
  links,
  children,
  left,
  containerWidth,
  noCross,
  marginLeft,
  marginRight,
  marginTop,
  back,
  height,
  cross,
  mr,
  src,
}) => {
  const [subPage, setSubPage] = useState('Featured');

  // useEffect(() => {
  //   setSubPage(asPath.split('#')[1].replace('%20', ' '))
  // }, [asPath])

  return (
    <div style={{width:'70%',display:'flex',justifyContent:'center'}}>
      <>
        <Container
          mr={mr}
          marginTop={marginTop}
          width={`${containerWidth ? containerWidth : '100%'}`}
          height={height}
        >
          <Header border_bottom_flag={left}>
            <>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  width: '100%',
                }}
              >
                <H2
                  lineHeight='100%'
                  ml={marginLeft}
                  mr={marginRight}
                  font='Roobert'
                  size='32px'
                  weight='bold'
                  align='center'
                  style={{
                    verticalAlign: 'top',
                  }}
                >
                  {title}
                </H2>
                <Image src='/assets/tick.png' alt='hello' />
              </div>
            </>
          </Header>
          {children}
        </Container>
      </>
    </div>
  );
};

export default Body;
