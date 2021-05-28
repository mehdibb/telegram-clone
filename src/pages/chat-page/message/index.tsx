import {MessageInResponse} from '../../../api';
import {
  Avatar,
  StyledMessage,
  Title,
  TitleAndTextWrapper,
  Text,
  DateWrapper,
} from './styles';


interface Props {
  className?: string;
  message: MessageInResponse; 
}

function MessageComponent({className, message}: Props): React.ReactElement {

  return (
    <li className={className}>
      <Avatar src={message.sender.imageSrc} alt={`image of ${message.sender.name}`}/>
      <TitleAndTextWrapper>
        <Title>{message.sender.name}</Title>
        <Text>{message.text}</Text>
      </TitleAndTextWrapper>
      {/* TODO: improve the logic and the format of the date shown and memoize it*/}
      <DateWrapper>
        {`${message.date.getHours() % 12}:${message.date.getMinutes() < 10
          ? `0${message.date.getMinutes()}`
          : message.date.getMinutes()}
        ${message.date.getHours() < 12 ? 'AM' : 'PM'}`}
      </DateWrapper>
    </li>
  )
}

export default StyledMessage.withComponent(MessageComponent);
