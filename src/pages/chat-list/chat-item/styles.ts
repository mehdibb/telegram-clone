import styled from '@emotion/styled';
import { Props } from '.';


export const AvatarImage = styled.img`
  width: 48px;
  height: 48px;
  margin-right: 16px;
  border-radius: 50%;
`;

export const Title = styled.span`
  font-weight: 700;
`;

export const Description = styled.span`
  color: var(--list-item-description-color);
`;

export const TitleAndDescriptionWrapper = styled.div<{activated?: boolean}>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  min-width: 0;
  height: 100%;
  font-size: 12px;

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    ${({activated}): string => activated ? 'color: var(--white);' : ''}
  }
`;

export const Date = styled.span`
  color: var(--list-item-date-color);
  font-size: 12px;
`;

export const UnreadMessagesCount = styled.span`
  min-width: 20px;
  height: 20px;
  padding: 2px 5px;
  border-radius: 11px;
  color: var(--white);
  font-weight: 700;
  font-size: 12px;
  background-color: var(--unread-messages-count-background-color);
`;

export const InfoWrapper = styled.div<{activated?: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
  padding: 4px 0;

  span:first-of-type {
    ${({activated}): string => activated ? 'color: var(--white);' : ''}
  }

  span:nth-of-type(2) {
    ${({activated}): string => activated ? 'background-color: var(--white); color: var(--main-blue);' : ''}
  }
`;

export const StyledChatItem = styled.li<Props>`
  display: flex;
  align-items: center;
  height: 64px;
  padding: 8px 16px;
  white-space: nowrap;
  cursor: pointer;

  ${({activated}): string => activated
    ? ''
    : `
      :hover {
        background-color: var(--list-item-hover-background-color);
      }
    `}
  
  ${({activated}): string => activated ? 'background-color: var(--main-blue);' : ''}
`;