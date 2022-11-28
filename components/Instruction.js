import React from 'react';
import { Image } from './Image';
import { MarginSpacer } from './Spacer';
import { H1 } from './TypoGraphy';
import styled from 'styled-components';

function Instruction() {
  const data = [
    {
      image: 'document',
      instr:
        'You can improve your score by holding assets for a longer time. <br /> Dropping values will decrease the score rate quickly.',
      instr2:
        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as <br /> opposed tousing .Content here, content here, making it look like readable English.',
    },
    {
      image: 'coins',
      instr:
        'You can improve your score by holding assets for a longer time. <br /> Dropping values will decrease the score rate quickly.',
      instr2:
        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as <br /> opposed tousing .Content here, content here, making it look like readable English.',
    },
    {
      image: 'laptop',
      instr:
        'You can improve your score by holding assets for a longer time. <br /> Dropping values will decrease the score rate quickly.',
      instr2:
        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as <br /> opposed tousing .Content here, content here, making it look like readable English.',
    },
    {
      image: 'person',
      instr:
        'You can improve your score by holding assets for a longer time. <br /> Dropping values will decrease the score rate quickly.',
      instr2:
        'it is a long established fact that a reader will be distracted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has amore-or-less normal distribution of letters, as <br /> opposed tousing .Content here, content here, making it look like readable English.',
    },
  ];
  const Wrapper = styled.div`
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  background: #131313;
  border-radius:20px;
  padding:40px;
  gap:2em;
  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 2em;
    gap:2em;
    margin-bottom: 2em;
  }

  `;

  return (
    <div>
      {data.map((data, index) => {
        return (
          <div key={index}>
            <Wrapper>
              <Image
                src={`/assets/${data.image}.png`}
                height={'200px'}
                alt='group'
              />
              <div>
                <H1 style={{ lineHeight: '50px' }}>{data.instr}</H1>
                <H1
                  style={{
                    fontSize: '17px',
                    opacity: '0.5',
                  }}
                >
                  {data.instr2}
                </H1>
              </div>
            </Wrapper>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
                gap: '0.5em',
              }}
            >
              <div
                style={{
                  width: '100px',
                  borderWidth: '0.00001px',
                  borderStyle: 'solid',
                  height: '1px',
                  borderImage:
                    'linear-gradient(213deg,#fff 1%,#fff 50%,#000) 100% 0 100% 0/3px 0 3px 0 stretch',
                }}
              ></div>
              <Image src='/assets/greendot.png' alt='greendot' width={'20px'} />
              <div
                style={{
                  width: '100px',
                  borderWidth: '0.00001px',
                  borderStyle: 'solid',
                  height: '1px',
                  borderImage:
                    'linear-gradient(90deg,#fff 1%,#fff 50%,#000) 100% 0 100% 0/3px 0 3px 0 stretch',
                }}
              ></div>
            </div>
            <MarginSpacer mt='2vh' />
          </div>
        );
      })}
    </div>
  );
}

export default Instruction;
