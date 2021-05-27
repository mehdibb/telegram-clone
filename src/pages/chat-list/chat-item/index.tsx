import React, { useCallback } from 'react';
import { ChatListItem } from '../../../lib/utilities';
import {
  AvatarImage,
  Description,
  StyledChatItem,
  Title,
  TitleAndDescriptionWrapper,
  InfoWrapper,
  Date,
  UnreadMessagesCount,
} from './styles'


export interface Props {
  className?: string;
  item: ChatListItem;
  activated?: boolean;
  onActivate: (item: ChatListItem) => void;
}

function ChatItemComponent({className, item, activated, onActivate}: Props): React.ReactElement {
  const handleClick = useCallback(() => {
    onActivate(item);
  }, [item, onActivate]);

  const handleKeyPress = useCallback((event: React.KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onActivate(item);
    }
  }, [item, onActivate]);

  return (
    <li className={className} onClick={handleClick} onKeyPress={handleKeyPress} tabIndex={0}>
      <AvatarImage src={item.avatarImage.src} alt={item.avatarImage.alt} />
      <TitleAndDescriptionWrapper activated={activated}>
        <Title title={item.title}>{item.title}</Title>
        <Description title={item.description}>{item.description}</Description>
      </TitleAndDescriptionWrapper>
      <InfoWrapper activated={activated}>
        {/* TODO: improve the logic and the format of the date shown and memoize it*/}
        <Date>
          {`${item.date.getHours() % 12}:${item.date.getMinutes() < 10 ? `0${item.date.getMinutes()}` : item.date.getMinutes()}
          ${item.date.getHours() < 12 ? 'AM' : 'PM'}`}
        </Date>
        {item.unreadMessagesCount ? <UnreadMessagesCount>{item.unreadMessagesCount}</UnreadMessagesCount> : null}
      </InfoWrapper>
    </li>
  )
}

export default StyledChatItem.withComponent(ChatItemComponent);