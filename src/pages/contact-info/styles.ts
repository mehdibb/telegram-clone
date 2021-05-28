import styled from '@emotion/styled';


export const LoadingWrapper = styled.span`
  color: var(--white);
`;

export const LastSeen = styled.span`
  color: var(--light-grey);
  font-size: 12px;
`;

export const Name = styled.span`
  overflow: hidden;
  color: var(--white);
  font-weight: 700;
  font-size: 14px;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const NameAndLastSeenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  height: 48px;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  margin-right: 16px;
  border-radius: 50%;
`;

export const ContactOverview = styled.div`
  display: flex;
  align-items: center;
`;

export const ActionButton = styled.button`
  border: unset;
  color: var(--light-grey);
  font-weight: 600;
  cursor: pointer;
  background-color: unset;
  
  :not(:last-of-type) {
    margin-right: 24px;
  }

  :hover {
    color: var(--white);
  }
`;

export const Actions = styled.div`
  display: flex;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  color: var(--white);
  font-weight: 600;
`;

export const MessageButton = styled.button`
  display: flex;
  position: absolute;
  right: 16px;
  bottom: 0;
  justify-content: center;
  align-items: center;
  padding: 12px;
  border: unset;
  border-radius: 50%;
  cursor: pointer;
  background-color: var(--white);
  box-shadow: 0 1px 2px 0 var(--box-shadow-color);
  transform: translateY(50%);
  
  svg {
    width: 24px;
    height: 24px;
    fill: var(--grey);
  }

  :hover svg {
    fill: var(--main-blue)
  }
`;

export const TopSection = styled.section`
  position: relative;
  margin: -16px -16px 0;
  padding: 16px 16px 24px;
  background-color: var(--main-blue);
`;

export const BottomSection = styled.section`
  padding: 16px 0 0;
`;

export const StyledContactInfo = styled.div`
  padding: 16px;
  font-size: 12px;
`;