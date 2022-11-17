import styled from 'styled-components';

const InputWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: ${(props) => (props.align ? props.align : 'stretch')};
  padding: ${(props) => (props.padding ? props.padding : '11px 24px')};
  width: ${(props) => (props.width ? props.width : '100%')};
  margin-right: ${(props) => (props.marginRight ? props.marginRight : '0px')}; 
  height: 100%;
  border: ${(props) => (props.textBorder ? props.textBorder : '')};
  background: ${(props) => (props.background ? props.background : '#262626')};
  border-radius: ${(props) => (props.border ? props.border : '100px')};
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;

export function InputBox({ children, width, padding, background,align,border,marginRight,textBorder }) {
  return (
    <InputWrapper background={background} padding={padding} width={width} align={align} border={border} marginRight={marginRight} textBorder={textBorder}>
      {children}
    </InputWrapper>
  );
}