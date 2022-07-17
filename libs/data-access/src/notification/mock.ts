import { FullNotification } from './types';

export const mockNotificationList: (length?: number) => FullNotification[] = (length = 10) =>
  [...Array(length).keys()].map((id) => ({
    id: String(id),
    title: `Title ${id}`,
    type: Math.random() < 0.5 ? 'SUCCESS' : 'ERROR',
    description: `Notification description ${id}`,
    fullDescription: `Full description of ${id} notification`,
    created: Date.now(),
    status: Math.random() < 0.5 ? 'NEW' : 'VIEWED',
    position: 'RB',
  }));
