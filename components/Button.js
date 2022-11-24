import styled from 'styled-components';

export const Button = styled.button`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  border: none;
  height: 100%;
  font-size:18px;
  font-weight:500;
  height: 56px;
  size:10px;
  background: #44c454;
  border-radius: 70px;
  &:before {
    content: url(${(props) => (props.icon ? props.icon : '')});
    margin-right: 5px;
  }
  cursor: pointer;
  :hover {
    opacity: 0.6;
  }
`;
const IconButton = styled(Button)`
  width: fit-content;
  margin: 0 10px 0 0;
  display: inline;
`;
export { IconButton };
