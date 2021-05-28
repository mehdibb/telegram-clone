import {
  Content,
  StyledApplication,
  StyledNavigationBar as NavigationBar,
  LeftColumn,
  Placeholder,
} from './styles';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import {CHATS_LIST} from '../../constants';
import {useCallback, useEffect, useState} from 'react';
import {ChatListItem} from '../../lib/utilities';
import {ChatList, ChatPage} from '..';


interface Props {
  className?: string;
}

function ApplicationComponent({className}: Props) {
  const [chatListActiveItem, setChatListActiveItem] = useState<ChatListItem>();

  const history = useHistory();
  
  const handleChatListActiveItemChange = useCallback((item: ChatListItem) => {
    setChatListActiveItem(item);
    history.push(`/chat/${item.userId}`)
    // TODO: remove this after the rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const match = useRouteMatch<{contactId?: string}>('/chat/:contactId');

  useEffect(() => {
    if (match?.params.contactId) {
      setChatListActiveItem(CHATS_LIST.find(({userId}) => userId === match.params.contactId));
    }
  }, [match?.params.contactId])
  
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
            <Switch>
              <Route exact path="/">
                <Placeholder>Please select a chat to start messaging.</Placeholder>
              </Route>
              <Route path="/chat/:contactId">
                {chatListActiveItem?.userId
                  ? <ChatPage contactId={chatListActiveItem?.userId} key={chatListActiveItem.id}/>
                  : <Placeholder>Sorry the user is not accessible.</Placeholder>}
              </Route>
              <Route path="*">
                404 Not Found
              </Route>
            </Switch>
        </Content>
    </div>
  );
}

export default StyledApplication.withComponent(ApplicationComponent);
