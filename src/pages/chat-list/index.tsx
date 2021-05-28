import {StyledChatList} from './styles';
import ChatItem from './item';
import {ChatListItem} from '../../lib/utilities';
import {useCallback} from 'react';


interface Props {
  className?: string;
  items: ChatListItem[];
  activeItem?: ChatListItem;
  onActiveItemChange: (item: ChatListItem) => void;
}

function ChatListComponent({
  className,
  items,
  activeItem,
  onActiveItemChange,
}: Props): React.ReactElement {
  const handleChatItemActivate = useCallback((item: ChatListItem) => {
    onActiveItemChange(item);
  }, [onActiveItemChange]);

  return (
    <ul className={className}>
      {items.map((item) => (
        <ChatItem key={item.id} item={item} onActivate={handleChatItemActivate} activated={item.id === activeItem?.id} />
      ))}
    </ul>
  )
}

export default StyledChatList.withComponent(ChatListComponent);
