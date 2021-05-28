import styled from '@emotion/styled';
import { NavigationBar } from '../../lib/components';


export const StyledNavigationBar = styled(NavigationBar)`
  grid-area: navigation-bar;
`;

export const LeftColumn = styled.aside`
  min-height: 0;
  grid-area: left-column;

  >* {
    height: 100%;
  }
  
  /* The chat list scroll thumb is visible only when hovered, and there should always be a border as well */
  /* so this trick will make it look like there is a border that will have a scroll thumb on it */
  :not(:hover) {
    box-shadow: inset -2px 0px 0px 0px var(--border-color-light-grey);
  }
`;

export const Placeholder = styled.span`
  color: var(--grey);
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-area: content;
  min-height: 0;
`;

export const StyledApplication = styled.div`
  display: grid;
  width: 1010px;
  height: 100%;
  margin: auto;
  background-color: var(--white);
  grid-template-areas: 'navigation-bar navigation-bar'
    'left-column content';
  grid-template-rows: 48px auto;
  grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
`;