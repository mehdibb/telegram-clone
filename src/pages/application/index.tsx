import {
  Content,
  StyledApplication,
  StyledNavigationBar as NavigationBar,
  LeftColumn,
  Placeholder,
  ContactDialogWrapper,
  Header,
  Title,
  ActionsWrapper,
  Button,
} from './styles';
import {Route, Switch, useHistory, useRouteMatch} from 'react-router-dom';
import {CHATS_LIST, MinimalContactInResponse} from '../../constants';
import {useCallback, useEffect, useMemo, useState} from 'react';
import {ChatListItem} from '../../lib/utilities';
import {ChatList, ChatPage, ContactInfo, ContactList} from '..';
import {Item} from '../../lib/components/NavigationBar/Menu/Item';
import {User} from '../../lib/assets/images';
import {useDialog} from '../../lib/hooks';


interface Props {
  className?: string;
}

function ApplicationComponent({className}: Props) {
  const [chatListActiveItem, setChatListActiveItem] = useState<ChatListItem>();
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [showingInfoContact, setShowingInfoContact] = useState<MinimalContactInResponse>();

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
  }, [match?.params.contactId]);

  const handleCloseContactsDialog = useCallback(() => {
    setIsDialogOpen(false);
  }, []);
  
  const handleShowContactsDialog = useCallback(() => {
    setIsDialogOpen(true);
  }, []);

  const handleActivateItem = useCallback((contact: MinimalContactInResponse) => {
    setShowingInfoContact(contact);
    handleShowContactInfoDialog();
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  const handleShowContactInfoDialog = useCallback(() => {
    showDialog();
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleCloseContactInfoDialog = useCallback(() => {
    closeDialog();
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const {dialog: contactInfoDialog, closeDialog, showDialog} = useDialog(
    {
      easyDismiss: true,
      onClose: handleCloseContactInfoDialog,
    },
    <>
      {showingInfoContact
        ? <ContactInfo contactId={showingInfoContact.id} onClose={handleCloseContactInfoDialog}/>
        : null}
    </>
  );
  
  const {dialog: contactListDialog} = useDialog(
    {
      easyDismiss: true,
      isShown: isDialogOpen,
      onClose: handleCloseContactsDialog,
    },
    <ContactDialogWrapper>
      <Header>
        <Title>Contacts</Title>
        <ActionsWrapper>
          <Button>Edit</Button>
          <Button onClick={handleCloseContactsDialog}>Close</Button>
        </ActionsWrapper>
      </Header>
      <ContactList onClose={handleCloseContactsDialog} onActivateItem={handleActivateItem} />
    </ContactDialogWrapper>
  );
  
  const navigationBarMenuItems = useMemo((): Item[] => [
    {
      Icon: User,
      callback: handleShowContactsDialog,
      id: 'contacts',
      text: 'Contacts',
    }
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ], [])
  
  return (
    <div className={className}>
        <NavigationBar
          menuItems={navigationBarMenuItems}
          currentChatUser={chatListActiveItem
            // This is not memoized due to the overhead of memoization
            ? {
              id: chatListActiveItem.userId,
              lastSeenAt: chatListActiveItem.lastSeenAt,
              displayName: chatListActiveItem.title,
              image: chatListActiveItem.avatarImage,
            }
            : undefined}
        />
        {contactListDialog}
        {contactInfoDialog}
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
                  ? <ChatPage
                    contact={{displayName: chatListActiveItem.title, id: chatListActiveItem.userId}}
                    key={chatListActiveItem.id}
                  />
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
