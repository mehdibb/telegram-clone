import styled from '@emotion/styled';


export const IconWrapper = styled.div`
  margin-right: 48px;

  svg {
    width: 24px;
    height: 24px;
    fill: var(--main-blue);
  }
`;

export const TextWrapper = styled.span`
  color: var(--main-blue);
`;

export const StyledItem = styled.li`
  display: flex;
  align-items: center;
  padding: 16px;
  box-shadow: 0px 1px 2px 1px var(--box-shadow-color);
  
  :hover {
    background-color: var(--list-item-hover-background-color);
  }
`;