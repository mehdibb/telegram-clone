import {CHATS_LIST, ContactInResponse, CONTACT_RESPONSE, MESSAGES} from "../constants";
import {ResponseWithBody} from "../lib/utilities";


export interface MessageInResponse {
  id: string;
  text: string;
  date: Date;
  sender: {
    imageSrc: string;
    name: string;
    id: string;
  }
}

export interface GetChatsResponse {
  messages: MessageInResponse[]
}

export interface GetContactResponse {
  contact: ContactInResponse;
}

const BACKEND_DELAY = 200;

const api = {
  getChat({contactId}: {contactId: string}): Promise<ResponseWithBody<200, GetChatsResponse>> {
    return new Promise((resolve, reject) => {
      const foundContact = CHATS_LIST.find(({userId}) => userId === contactId);
      
      if (!foundContact) {
        reject(new Error(`Unable to find a user with id ${contactId}`));
      }

      setTimeout(
        () => resolve({
          body: {
            messages: MESSAGES, 
          },
          status: 200,
        }),
        BACKEND_DELAY
      );
    })
  },

  getContact({contactId}: {contactId: string}): Promise<ResponseWithBody<200, GetContactResponse>> {
    return new Promise((resolve, reject) => {
      const foundContact = CHATS_LIST.find(({userId}) => userId === contactId);

      if (!foundContact) {
        reject(new Error(`Unable to find a user with id ${contactId}`));
      }

      setTimeout(
        () => resolve({
          body: {
            contact: CONTACT_RESPONSE,
          },
          status: 200,
        }),
        BACKEND_DELAY,
      );
    });
  },

  sendMessage({
    message,
    receiverId,
  }: {message: string; receiverId: string}): Promise<ResponseWithBody<200, {}>> {
    return new Promise((resolve, reject) => {
      const foundContact = CHATS_LIST.find(({userId}) => userId === receiverId)
      
      if (!foundContact) {
        reject(new Error(`Unable to find a contact with id: ${receiverId}`))
      }
      
      setTimeout(
        () => resolve({
          body: {},
          status: 200,
        }),
        BACKEND_DELAY,
      );
    })
  }
}

export default api;