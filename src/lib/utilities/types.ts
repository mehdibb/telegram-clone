

export interface Image {
  src: string;
  alt: string;
}

export interface ChatListItem {
  id: string;
  title: string;
  description: string;
  date: Date;
  avatarImage: Image;
  unreadMessagesCount?: number;
}