import styled from '@emotion/styled';


export const IconWrapper = styled.div`
  margin-right: 48px;

  svg {
    width: 24px;
    height: 24px;
    fill: var(--white);
  }
`;

export const TextWrapper = styled.span`
  color: var(--white);
  font-size: 16px;
`;

export const NavBarItem = styled.button`
  display: flex;
  align-items: center;
  width: calc(100% / 3);
  height: 100%;
  padding: 16px;
  border: unset;
  color: var(--white);
  text-align: unset;
  cursor: pointer;
  background-color: var(--main-blue);

  :hover {
    background-color: var(--navbar-item-hover-background-color);
  }
`;

export const AvatarImage = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 16px;
  border-radius: 50%;
`;

export const NameWrapper = styled.span`
  margin-right: 8px;
  font-weight: 600;
`;

export const LastSeenWrapper = styled.span`
  color: var(--light-grey);
  font-size: 10px;
`;

export const CurrentChatUserInfo = styled(NavBarItem)`
  width: calc(100% * 2 / 3);
`;

export const StyledNavigationBar = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  color: var(--white);
  background-color: var(--main-blue);
`;