import styled from 'styled-components';

const Spacer = styled.div`
  height: ${(props) => (props.height || '50') + 'px'};
  width: ${(props) => props.width || '50'};
`;
const MarginSpacer = styled.div`
  margin-top: ${(props) => props.mt || ''};
  margin-bottom: ${(props) => props.mb || ''};
  margin-left: ${(props) => props.ml || ''};
  margin-right: ${(props) => props.mr || ''};
  padding-right: ${(props) => props.pr || ''};
  padding-left: ${(props) => props.pl || ''};
  padding-top: ${(props) => props.pt || ''};
`;
export default Spacer;
export { MarginSpacer };