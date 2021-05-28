

export enum State {
  Loading,
  Success,
  Error,
}

export interface ResponseWithBody<S extends number, T> {
  body: T;
  status: S;
}

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
  userId: string;
  unreadMessagesCount?: number;
}

export function assertUnreachable(_: never): never {
  throw new Error('Didn\'t expect to get here');
}