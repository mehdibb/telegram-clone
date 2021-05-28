import styled from '@emotion/styled';


export const DialogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 500px;
  max-width: 80%;
  max-height: max(90vh, calc(var(--min-height) * 0.9));
  margin: auto;
  border: none;
  overflow: auto;
  overflow: overlay;
  word-break: break-word;
  background-color: var(--white);
`;

export const StyledDialog = styled.dialog`
  display: flex;
  z-index: var(--z-index-modal);
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  height: 100%;
  max-height: 100%;
  margin: 0;
  padding: 0;
  border: none;
  overflow: auto;
  overflow: overlay;
  cursor: auto;
  background-color: transparent;
`;