import {useCallback} from 'react';
import {MinimalContactInResponse} from '../../../constants';
import {dateFormat} from '../../../lib/utilities';
import {AvatarImage, LastSeen, StyledItem, Title, TitleAndLastSeenWrapper} from './styles';


interface Props {
  className?: string;
  contact: MinimalContactInResponse;
  onActivate: (contact: MinimalContactInResponse) => void;
}

function ItemComponent({className, contact, onActivate}: Props): React.ReactElement {
  const handleClick = useCallback(() => {
    onActivate(contact);
  }, [onActivate, contact]);

  return (
    <li className={className} onClick={handleClick}>
      <AvatarImage src={contact.image.src} alt={contact.image.alt}/>
      <TitleAndLastSeenWrapper>
        <Title>{contact.displayName}</Title>
        <LastSeen>{dateFormat(contact.lastSeenAt)}</LastSeen>
      </TitleAndLastSeenWrapper>
    </li>
  )
}

export default StyledItem.withComponent(ItemComponent);