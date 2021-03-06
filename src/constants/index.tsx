import uuid from "uuid";
import { MessageInResponse } from "../api";
import { ChatListItem, Image } from "../lib/utilities";


export const AVATAR_PLACE_HOLDER_IMAGE_SRC = 'https://i.pinimg.com/originals/de/f6/0b/def60b47cb139c8072b8bfda45047db2.jpg';

export const LOGGED_IN_USER = {
  id: 'logged-in-user-id',
  name: 'logged in user',
}

export interface InfoItem {
  title: string;
  text: string;
  type: 'phone' | 'user-name' | 'about';
}

export interface MinimalContactInResponse {
  displayName: string;
  lastSeenAt: Date;
  id: string;
  image: Image;
}

export interface ContactsResponse {
  contacts: MinimalContactInResponse[];
}

export interface ContactInResponse {
  displayName: string;
  lastSeenAt: Date;
  id: string;
  image: Image;
  infoItems: InfoItem[]
}

export interface ContactResponse {
  contact: ContactInResponse;
}

//FIXME: provide meaningful alt and src for chat list items' avatar image
export const CHATS_LIST: ChatListItem[] = [
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 1',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 1',
    id: uuid(),
    title: 'title 1 title 1 title 1 title 1',
    unreadMessagesCount: 10,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 2',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 2',
    id: uuid(),
    title: 'title 2',
    unreadMessagesCount: 310,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 3',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    id: uuid(),
    title: 'title 3',
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 4',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 4',
    id: uuid(),
    title: 'title 4',
    unreadMessagesCount: 52,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 1',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 1',
    id: uuid(),
    title: 'title 1 title 1 title 1 title 1',
    unreadMessagesCount: 10,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 2',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 2',
    id: uuid(),
    title: 'title 2',
    unreadMessagesCount: 310,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 3',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    id: uuid(),
    title: 'title 3',
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 4',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 4',
    id: uuid(),
    title: 'title 4',
    unreadMessagesCount: 52,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 1',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 1',
    id: uuid(),
    title: 'title 1 title 1 title 1 title 1',
    unreadMessagesCount: 10,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 2',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 2',
    id: uuid(),
    title: 'title 2',
    unreadMessagesCount: 310,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 3',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    id: uuid(),
    title: 'title 3',
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 4',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 4',
    id: uuid(),
    title: 'title 4',
    unreadMessagesCount: 52,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 1',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 1',
    id: uuid(),
    title: 'title 1 title 1 title 1 title 1',
    unreadMessagesCount: 10,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 2',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 2',
    id: uuid(),
    title: 'title 2',
    unreadMessagesCount: 310,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 3',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    id: uuid(),
    title: 'title 3',
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 4',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 4',
    id: uuid(),
    title: 'title 4',
    unreadMessagesCount: 52,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 1',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 1',
    id: uuid(),
    title: 'title 1 title 1 title 1 title 1',
    unreadMessagesCount: 10,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 2',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 2',
    id: uuid(),
    title: 'title 2',
    unreadMessagesCount: 310,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 3',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    id: uuid(),
    title: 'title 3',
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 4',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 4',
    id: uuid(),
    title: 'title 4',
    unreadMessagesCount: 52,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 1',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 1',
    id: uuid(),
    title: 'title 1 title 1 title 1 title 1',
    unreadMessagesCount: 10,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 2',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 2',
    id: uuid(),
    title: 'title 2',
    unreadMessagesCount: 310,
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 3',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 3 description 3 description 3 description 3 description 3 description 3 description 3',
    id: uuid(),
    title: 'title 3',
    lastSeenAt: new Date(),
  },
  {
    userId: uuid(),
    avatarImage: {
      alt: 'alternative text 4',
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
    },
    date: new Date(),
    description: 'description 4',
    id: uuid(),
    title: 'title 4',
    unreadMessagesCount: 52,
    lastSeenAt: new Date(),
  },
];

export const MESSAGES: MessageInResponse[] = [
  {
    date: new Date(),
    id: uuid(),
    text: `message text 1 message text 1 message text 1 message text 1 message text 1 message text 1 message text 1 
    message text 1 message text 1`,
    sender: {
      imageSrc: AVATAR_PLACE_HOLDER_IMAGE_SRC,
      name: 'sender name 1',
      id: CHATS_LIST[0].userId, 
    }
  },
  {
    date: new Date(),
    id: uuid(),
    text: 'message text 2',
    sender: {
      imageSrc: AVATAR_PLACE_HOLDER_IMAGE_SRC,
      name: 'sender name 2',
      id: CHATS_LIST[0].userId, 
    }
  }
]

export const CONTACT_RESPONSE: ContactResponse = {
  contact: {
    displayName: 'Contact Display Name',
    image: {
      src: AVATAR_PLACE_HOLDER_IMAGE_SRC,
      alt: 'a picture of the user',
    },
    lastSeenAt: new Date(),
    infoItems: [
      {
        text: '+989123456789',
        title: 'Phone',
        type: 'phone',
      },
      {
        text: '@userName',
        title: 'Username',
        type: 'user-name',
      },
      {
        text: 'Life is sometimes beautiful',
        type: 'about',
        title: 'Bio',
      }
    ],
    id: CHATS_LIST[0].userId,
  }
}

export const CONTACTS_RESPONSE: ContactsResponse = {
  contacts: CHATS_LIST.map(({avatarImage, date, description, id, title, userId, unreadMessagesCount}) => ({
    lastSeenAt: new Date(),
    displayName: title,
    id: userId,
    image: avatarImage,
  }))
}