import {CHATS_LIST, MESSAGES} from "../constants";
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

const api = {
  getChat({contactId}: {contactId: string}): Promise<ResponseWithBody<200, GetChatsResponse>> {
    return new Promise((resolve, reject) => {
      const foundContactId = CHATS_LIST.find(({userId}) => userId === contactId);
      
      if (!foundContactId) {
        reject(new Error(`Unable to find a user with id ${contactId}`));
      }
      
      setTimeout(
        () => resolve({
          body: {
            messages: MESSAGES, 
          },
          status: 200,
        }),
        200
      )
    })
  },

  sendMessage({
    message,
    receiverId,
  }: {message: string; receiverId: string}): Promise<ResponseWithBody<200, {}>> {
    return new Promise((resolve, reject) => {
      
      if (message)
      
      setTimeout(
        () => resolve({
          body: {},
          status: 200,
        }),
        200
      )
    })
  }
}

export default api;