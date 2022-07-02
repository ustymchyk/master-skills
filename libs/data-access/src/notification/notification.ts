import { inject, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationServiceImplementation } from './notification.service';
import { FullNotification, Notification } from './types';

export const notificationRootProvider = (): Provider => ({
  provide: NotificationService,
  useClass: NotificationServiceImplementation,
});

export const getNotifications = (): ReturnType<NotificationService['getNotifications']> => {
  return inject(NotificationService).getNotifications();
};

export abstract class NotificationService {
  abstract listenNewNotifications(): Observable<Notification>;
  abstract getNotifications(): Observable<Notification[]>;
  abstract getFullNotification(id: Notification['id']): Observable<FullNotification>;
  abstract viewNotification(id: Notification['id']): void;
}
