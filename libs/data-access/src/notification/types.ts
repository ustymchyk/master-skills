export type NotificationTypes = 'SUCCESS' | 'ERROR';

export type NotificationStatus = 'NEW' | 'VIEWED';

export type NotificationPosition = 'LT' | 'RT' | 'RB' | 'LB';

export interface Notification {
  id: string;
  title: string;
  type: NotificationTypes;
  description: string;
  position?: NotificationPosition;
}

export interface FullNotification extends Notification {
  created: number;
  status: NotificationStatus;
  fullDescription: string;
}
