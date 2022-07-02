export const NotificationTypes = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
} as const;

export const NotificationStatus = {
  NEW: 'NEW',
  VIEWED: 'VIEWED',
} as const;

export interface Notification {
  id: string;
  title: string;
  type: keyof typeof NotificationTypes;
  description: string;
}

export interface FullNotification extends Notification {
  created: number;
  status: keyof typeof NotificationStatus;
  fullDescription: string;
}
