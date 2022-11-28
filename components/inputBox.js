import styled from 'styled-components';

const Textbox = styled.input`
  padding: 8px 10px 10px;
  gap: 8px;
  width: calc(100% - 50px);
  border: none;
  font-style: normal;
  font-weight: 700;
  outline: none;
  font-size: 16px;
  color: ${(props) => (props.color ? props.color : 'rgba(255, 255, 255, 0.6)')};
  display: flex;
  align-items: center;
  box-sizing: border-box;

  background: url(${(props) => (props.icon ? props.icon : '')}) no-repeat scroll
      20px center,
    transparent;
  padding-left: 60px;
`;

const Input = styled.input`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 24px 12px;
  border-radius: 100px;
  border: 0px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  width: 256px;

  background: url(${(props) => (props.icon ? props.icon : '')}) no-repeat scroll
      90% center,
    #232328;

  &:hover {
    border: 1px solid #cef458;
  }
`;

const Dropdown = styled.select`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 11px 24px 12px;
  border-radius: 100px;
  border: 0px;
  font-family: 'Tofino';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  width: 256px;
  -webkit-appearance: none;
  -moz-appearance: none;

  background: url(/assets/down-arrow.svg) no-repeat scroll 90% center, #232328;

  &:hover {
    border: 1px solid #cef458;
  }
`;

export default Textbox;
export { Input, Dropdown };
