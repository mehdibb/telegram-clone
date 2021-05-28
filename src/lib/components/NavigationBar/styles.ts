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
  cursor: pointer;
  background-color: var(--main-blue);

  :hover {
    background-color: var(--navbar-item-hover-background-color);
  }
`;

export const StyledNavigationBar = styled.nav`
  display: flex;
  position: relative;
  align-items: center;
  color: var(--white);
  background-color: var(--main-blue);
`;