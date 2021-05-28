import {useCallback, useEffect, useState} from 'react';
import {ContactInResponse} from '../../constants';
import {assertUnreachable, dateFormat, State} from '../../lib/utilities';
import {
  ActionButton,
  Actions,
  Avatar,
  BottomSection,
  ContactOverview,
  Header,
  LastSeen,
  LoadingWrapper,
  MessageButton,
  Name,
  NameAndLastSeenWrapper,
  StyledContactInfo,
  TopSection,
} from './styles';
import InfoItem from './info-item';
import {About, Message, Phone, User} from '../../lib/assets/images';
import api from '../../api';
import {useHistory} from 'react-router-dom';


const iconsMap: Record<
  ContactInResponse['infoItems'][0]['type'],
  React.FunctionComponent<React.SVGProps<SVGSVGElement>>
> = {
  about: About,
  phone: Phone,
  'user-name': User,
}

interface Props {
  className?: string;
  contactId: string;
  onClose: () => void;
}

function ContactInfoComponent({className, contactId, onClose}: Props): React.ReactElement {
  const [contactData, setContactData] = useState<ContactInResponse>();
  const [contactDataState, setContactDataState] = useState<State>(State.Loading);
  
  const history = useHistory();
  
  const fetchContactData = useCallback(async () => {
    setContactDataState(State.Loading);
    
    try {
      const response = await api.getContact({contactId});

      switch (response.status) {
        case 200:
          setContactData(response.body.contact);
          setContactDataState(State.Success);
          break;
        default:
          assertUnreachable(response.status);
      }
    }
    catch {
      setContactDataState(State.Error);
    }
  }, [contactId]);

  const handleMessageButtonClick = useCallback(() => {
    onClose();
    history.push(`/chat/${contactId}`);
    // TODO: remove this after this rule is disabled in eslintrc.js
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  useEffect(() => {
    fetchContactData();
  }, [contactId, fetchContactData]);
  
  return (
    <div className={className}>
      <TopSection>
        <Header>
          Contact info
          <Actions>
            <ActionButton>
              Edit
            </ActionButton>
            <ActionButton onClick={onClose}>
              Close
            </ActionButton>
          </Actions>
        </Header>
        {contactDataState === State.Loading
        // TODO: use Loading component when implemented
        ? <LoadingWrapper>'Loading...'</LoadingWrapper>
        : contactDataState === State.Error
          // TODO: use Error component when implemented
          ? 'Error while fetching contact data, please try again later.'
          : contactData
            ? <ContactOverview>
          <Avatar src={contactData.image.src} alt={contactData.image.alt}/>
          <NameAndLastSeenWrapper>
            <Name>{contactData.displayName}</Name>
            {/* TODO: improve the last seen representation */}
            <LastSeen>{`last seen at ${dateFormat(contactData.lastSeenAt)}`}</LastSeen>
          </NameAndLastSeenWrapper>
          <MessageButton onClick={handleMessageButtonClick}><Message /></MessageButton>
        </ContactOverview>
        : null}
      </TopSection>
      {contactDataState === State.Success && contactData
        ? <BottomSection>
          {contactData.infoItems.map(({text, title, type}) => (
            // since backend doesn't provide id here a unique key is made up
            <InfoItem
              key={`${title}:${text}:${type}`}
              Icon={iconsMap[type]}
              text={text}
              title={title}
            />
          ))}
        </BottomSection>
        : null}
    </div>)
}

export default StyledContactInfo.withComponent(ContactInfoComponent);