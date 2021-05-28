import {useCallback} from 'react';
import {ContactInfo} from '../..';
import {MessageInResponse} from '../../../api';
import {useDialog} from '../../../lib/hooks';
import {dateFormat} from '../../../lib/utilities';
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
  const handleShowDialog = useCallback(() => {
    showDialog();
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleCloseDialog = useCallback(() => {
    closeDialog();
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const {dialog, closeDialog, showDialog} = useDialog(
    {
      easyDismiss: true,
      onClose: handleCloseDialog,
    },
    <ContactInfo contactId={message.sender.id} onClose={handleCloseDialog}/>
  );

  return (
    <li className={className}>
      {dialog}
      <Avatar src={message.sender.imageSrc} alt={`image of ${message.sender.name}`} onClick={handleShowDialog}/>
      <TitleAndTextWrapper>
        <Title onClick={handleShowDialog}>{message.sender.name}</Title>
        <Text>{message.text}</Text>
      </TitleAndTextWrapper>
      <DateWrapper>{dateFormat(message.date)}</DateWrapper>
    </li>
  )
}

export default StyledMessage.withComponent(MessageComponent);
