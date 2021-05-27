import styled from '@emotion/styled';
import { ChatList } from '..';
import { NavigationBar } from '../../lib/components';


export const StyledNavigationBar = styled(NavigationBar)`
  grid-area: navigation-bar;
`;

export const StyledChatList = styled(ChatList)`
  height: 100%;
`;

export const LeftColumn = styled.div`
  min-height: 0;
  grid-area: left-column;
  
  :not(:hover) {
    box-shadow: inset -2px 0px 0px 0px var(--border-color-light-grey);
  }
`;

export const Placeholder = styled.span`
  color: var(--grey);
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  grid-area: content;
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