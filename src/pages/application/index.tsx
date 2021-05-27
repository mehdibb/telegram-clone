import {
  Content,
  StyledApplication,
  StyledNavigationBar as NavigationBar,
  LeftColumn,
  Placeholder,
  StyledChatList as ChatList,
} from './styles';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {CHATS_LIST} from '../../constants';
import { useCallback, useState } from 'react';
import { ChatListItem } from '../../lib/utilities';


interface Props {
  className?: string;
}

function ApplicationComponent({className}: Props) {
  const [chatListActiveItem, setChatListActiveItem] = useState<ChatListItem>();
  
  const handleChatListActiveItemChange = useCallback((item: ChatListItem) => {
    setChatListActiveItem(item);
  }, []);
  
  return (
    <div className={className}>
      <NavigationBar />
      <LeftColumn>
        <ChatList
          items={CHATS_LIST}
          onActiveItemChange={handleChatListActiveItemChange}
          activeItem={chatListActiveItem}
        />
      </LeftColumn>
      <Content>
        <Router>
          <Switch>
            <Route exact path="/">
              <Placeholder>Please select a chat to start messaging</Placeholder>
            </Route>
          </Switch>
        </Router>
      </Content>
    </div>
  );
}

export default StyledApplication.withComponent(ApplicationComponent);
