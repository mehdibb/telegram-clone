import React, {useCallback, useEffect, useState} from 'react';
import api, {GetChatsResponse} from '../../api';
import {assertUnreachable, State} from '../../lib/utilities';
import {Form, IsTypingWrapper, LoadingWrapper, MessageList, SendButton, StyledChatPage} from './styles';
import Message from './message';
import Input from './input';
import uuid from 'uuid';
import {AVATAR_PLACE_HOLDER_IMAGE_SRC, LOGGED_IN_USER} from '../../constants';


interface Props {
  className?: string;
  contactId: string;
}

function ChatPageComponent({className, contactId}: Props): React.ReactElement {
  const [dataState, setDataState] = useState<State>(State.Loading);
  const [chatsData, setChatsData] = useState<GetChatsResponse['messages']>();
  const [timerIds, setTimerIds] = useState<NodeJS.Timer[]>([]);

  const [inputValue, setInputValue] = useState<string>('');
  
  const [sendingMessageState, setSendingMessageState] = useState<State>(State.Success);

  const [isTyping, setIsTyping] = useState<boolean>(false);
  
  useEffect(() => {
    return () => {
      timerIds.forEach((timerId) => {
        clearTimeout(timerId);
      })
    }
  }, [timerIds])
  
  useEffect(() => {
    async function fetchData(): Promise<void> {
      setDataState(State.Loading);
      setChatsData(undefined);

      try {
        const response = await api.getChat({contactId});

        switch (response.status) {
          case 200:
            setChatsData(response.body.messages)
            setDataState(State.Success);
            break;
          default:
            assertUnreachable(response.status);
        }
      }
      catch {
        setDataState(State.Error);
      }
    }

    fetchData()
    // TODO: remove this after this the rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contactId]);

  const handleInputChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  }, []);

  const triggerReplyMessage = useCallback(() => {
    // FIXME: when a message is sent while the other user is typing 2 messages will be received
    timerIds.forEach((timerId) => {
      clearTimeout(timerId);
    })
    setIsTyping(false);
    
    let timerId1: NodeJS.Timer;
    let timerId2: NodeJS.Timer;

    timerId1 = setTimeout(() => {
      setIsTyping(true);

      timerId2 = setTimeout(() => {
        setChatsData((previousChatsData) => [
          {
            date: new Date(),
            id: uuid(),
            sender: {
              id: contactId,
              // FIXME:
              name: 'sender name',
              imageSrc: AVATAR_PLACE_HOLDER_IMAGE_SRC,
            },
            text: 'incoming message',
          },
          ...previousChatsData || [],
        ]);
  
        setIsTyping(false);
      }, 2000);
    }, 2000);

    setTimerIds((previousTimerIds) => [
      ...previousTimerIds,
      timerId1,
      timerId2,
    ])
  }, [contactId, timerIds]);
  
  const handleSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setSendingMessageState(State.Loading);

    async function sendMessage(): Promise<void> {
      try {
        const response = await api.sendMessage({message: inputValue, receiverId: contactId});

        switch (response.status) {
          case 200:
            setSendingMessageState(State.Success);
            setChatsData((previousChatsData) => [
              {
                date: new Date(),
                id: uuid(),
                sender: {
                  ...LOGGED_IN_USER,
                  imageSrc: AVATAR_PLACE_HOLDER_IMAGE_SRC,
                },
                text: inputValue,
              },
              ...previousChatsData || [],
            ]);
            setInputValue('');
            triggerReplyMessage();
            break;
          default:
            assertUnreachable(response.status);
        }
      }
      catch {
        setSendingMessageState(State.Error);
      }
    }

    sendMessage();
  }, [contactId, inputValue, triggerReplyMessage]);
  
  return (
    <div className={className}>
      {dataState === State.Loading
        // TODO: implement Loading component
        ? <LoadingWrapper>Loading...</LoadingWrapper>
        : dataState === State.Error
          // TODO: implement Error component
          ? 'Error loading the chats please try again.'
          : chatsData
            ? <>
              <MessageList>
                {chatsData.map((message) => (
                  <Message key={message.id} message={message}></Message>
                ))}
              </MessageList>
              <IsTypingWrapper>{isTyping ? `${contactId} is typing...` : null}</IsTypingWrapper>
              <Form onSubmit={handleSubmit}>
                <Input placeholder="Write a message..." value={inputValue} onChange={handleInputChange}/>
                <SendButton
                  type="submit"
                  value="Send"
                  disabled={sendingMessageState === State.Loading || inputValue === ''}
                />
              </Form>
            </>
            : 'You can now start chatting.'}
    </div>
  )
}

export default StyledChatPage.withComponent(ChatPageComponent);
