import styled from 'styled-components';

export const Loader = styled.div`
  position: fixed;
  top: 72px;
  left: 0;
  width: 100vw;
  height: calc(100vh - 72px);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 1200;
`;
