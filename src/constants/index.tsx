import uuid from "uuid";
import { MessageInResponse } from "../api";
import { ChatListItem } from "../lib/utilities";


export const AVATAR_PLACE_HOLDER_IMAGE_SRC = 'https://i.pinimg.com/originals/de/f6/0b/def60b47cb139c8072b8bfda45047db2.jpg';

export const LOGGED_IN_USER = {
  id: 'logged-in-user-id',
  name: 'logged in user',
}

export const MESSAGES: MessageInResponse[] = [
  {
    date: new Date(),
    id: uuid(),
    text: `message text 1 message text 1 message text 1 message text 1 message text 1 message text 1 message text 1 
    message text 1 message text 1`,
    sender: {
      imageSrc: AVATAR_PLACE_HOLDER_IMAGE_SRC,
      name: 'sender name 1',
      id: 'sender id 1', 
    }
  },
  {
    date: new Date(),
    id: uuid(),
    text: 'message text 2',
    sender: {
      imageSrc: AVATAR_PLACE_HOLDER_IMAGE_SRC,
      name: 'sender name 2',
      id: 'sender id 2', 
    }
  }
]

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
  },
]