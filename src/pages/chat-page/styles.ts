import styled from '@emotion/styled';


export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

export const IsTypingWrapper = styled.span`
  margin-top: 8px;
  color: var(--grey);
  font-size: 10px;
`;

export const SendButton = styled.input`
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  margin-left: 16px;
  border: none;
  color: var(--main-blue);
  text-transform: uppercase;
  cursor: pointer;
  background-color: unset;

  ${({disabled}): string => disabled
    ? 'cursor: not-allowed; color: var(--grey);'
    : `
      :hover {
        color: var(--dark-blue);
      }
  `}
`;

export const Form = styled.form`
  display: flex;
`;

export const MessageList = styled.ul`
  display: flex;
  flex-direction: column-reverse;
  height: 100%;
  min-height: 0;
  margin: 0 -64px;
  overflow-y: overlay;
  list-style: none;
`;

export const StyledChatPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 0 64px 24px;
`;