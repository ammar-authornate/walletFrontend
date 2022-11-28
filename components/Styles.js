import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 20px;
`;

export const MainHome = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CenterItems = styled.div`
  display: flex;
  flex-wrap:wrap;
  justify-content:center;
  gap:2em;
  margin:2.5em
  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;
export const BoxHomeWrapper = styled.div`
  padding: 25px;
`;
export const Center = styled.div`
  align-items: center;
  text-align: center;
  padding: 20px;
`;
export const CenterText = styled.div`
  align-items: center;
  padding: 20px;
`;
export const AlignCenter = styled.div`
  display: flex;
  align-items: center;
`;
