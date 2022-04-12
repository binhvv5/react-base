export interface INotification {
  id: string;
  contentType: number;
  title: string;
  content: string;
  isRead: boolean;
}

export const defaultValue: Readonly<INotification> = {
  id: '',
  contentType: null,
  title: '',
  content: '',
  isRead: false,
};
