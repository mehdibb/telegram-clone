import styled from '@emotion/styled';


export const AvatarImage = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  border-radius: 50%;
`;

export const Title = styled.span`
  font-size: 12px;
`;

export const LastSeen = styled.span`
  color: var(--grey);
  font-size: 10px;
`;

export const TitleAndLastSeenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledItem = styled.li`
  display: flex;
  padding: 8px 16px;
  cursor: pointer;

  :hover {
    background-color: var(--list-item-hover-background-color);
  }
`;