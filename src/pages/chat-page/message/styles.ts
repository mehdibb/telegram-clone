import styled from '@emotion/styled';


export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  border-radius: 50%;
  align-self: baseline;
`;

export const Title = styled.button`
  width: max-content;
  border: unset;
  overflow: hidden;
  color: var(--main-blue);
  font-weight: 700;
  text-overflow: ellipsis;
  cursor: pointer;
  background-color: unset;

  :hover {
    text-decoration: underline;
  }
`;

export const Text = styled.span`
  white-space: normal;
  word-break: break-word;
`;

export const TitleAndTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-width: 0;
  height: 100%;
`;

export const DateWrapper = styled.span`
  align-self: start;
  color: var(--list-item-date-color);
`;

export const StyledMessage = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 64px;
  font-size: 12px;
  white-space: nowrap;
  cursor: pointer;
`;
