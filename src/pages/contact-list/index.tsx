import {useCallback, useEffect, useState} from 'react';
import api from '../../api';
import {ContactsResponse, MinimalContactInResponse} from '../../constants';
import {assertUnreachable, State} from '../../lib/utilities';
import {ContactsWrapper, LoadingWrapper, StyledContactList} from './styles';
import ContactListItem from './item';


interface Props {
  className?: string;
  onClose: () => void;
  onActivateItem: (contact: MinimalContactInResponse) => void;
}

function ContactList({className, onClose, onActivateItem}: Props): React.ReactElement {
  const [contactsData, setContactsData] = useState<ContactsResponse>();
  const [contactsDataState, setContactsDataState] = useState<State>(State.Loading);
  
  useEffect(() => {
    async function fetchContacts(): Promise<void> {
      setContactsDataState(State.Loading);

      try {
        const response = await api.getContacts();

        switch (response.status) {
          case 200:
            setContactsData(response.body);
            setContactsDataState(State.Success);
            break;
          default:
            assertUnreachable(response.status);
        }
      }
      catch {
        setContactsDataState(State.Error);
      }
    }

    fetchContacts();
  }, []);
  
  const handleContactListItemActivate = useCallback((contact: MinimalContactInResponse) => {
    onClose();
    onActivateItem(contact);
  }, [onActivateItem, onClose]);
  
  return (
    <div className={className}>
      {contactsDataState === State.Loading
        // TODO: use Loading component when implemented
        ? <LoadingWrapper>Loading...</LoadingWrapper>
        : contactsDataState === State.Error
          ? 'Error while fetching contacts list from the server, please try again later.'
          : contactsData
            ? <ContactsWrapper>
              {contactsData.contacts.map((contact) => (
                <ContactListItem key={contact.id} contact={contact} onActivate={handleContactListItemActivate}/>
              ))}
            </ContactsWrapper>
            : null}
    </div>
  )
}

export default StyledContactList.withComponent(ContactList);