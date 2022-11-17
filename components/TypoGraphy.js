import styled, { css } from 'styled-components';

export const H1 = styled.h1`
  margin: 0px;
  color: ${(props) => (props.color ? props.color : 'white')};
  font-family: Tofino, sans-serif;
  letter-spacing: 1px;
  ${(props) =>
    props.capatilazie &&
    css`
      text-transform: uppercase;
    `}
  ${(props) =>
    props.sidebar &&
    css`
      text-transform: uppercase;
      font-weight: 700;
      font-size: ${(props) => (props.size ? `${props.size}px` : '24px')};
      line-height: 29px;
      font-family: Tofino, sans-serif;
      cursor: pointer;
      :hover {
        color: #cef458;
      }
    `}
    ${(props) =>
    props.Bets &&
    css`
      font-weight: 700;
      font-size: 24px;
      font-family: Tofino, sans-serif;
      line-height: 29px;
      opacity: 0.9;
    `}
    ${(props) =>
    props.green &&
    css`
      color: #cef458;
    `}
`;
export const P = styled.p`
  color: ${(props) => (props.color ? props.color : 'white')};
  font-weight: 700;
  font-size: 14px;
  line-height: 10px;
  font-family: Tofino;
  ${(props) =>
    props.opacity &&
    css`
      opacity: 0.6;
    `}
`;
export const H2 = styled.h2`
  font-size: ${(props) => (props.font ? props.font : '16px')};
  color: white;
  font-family: Tofino, sans-serif;
  letter-spacing: 2px;
  ${(props) =>
    props.feature &&
    css`
      font-style: normal;
      font-weight: 900;

      line-height: 25px;
      color: rgba(255, 255, 255, 0.6);
    `}

  ${(props) =>
    props.capatilazie &&
    css`
      text-transform: uppercase;
    `}
    ${(props) =>
    props.pointer &&
    css`
      cursor: pointer;
      :hover {
        color: white;
      }
    `}
`;
export const H3 = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  margin-top: 4px;
  color: rgba(255, 255, 255, 0.6);
  font-family: Tofino, sans-serif;
  letter-spacing: 1px;
  ${(props) =>
    props.green &&
    css`
      color: #cef458;
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
    `}
`;