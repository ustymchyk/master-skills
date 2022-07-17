import { inject, InjectionToken, Provider } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationServiceImplementation } from './notification.service';
import { FullNotification, Notification } from './types';

export interface NotificationService {
  listenNewNotifications(): Observable<Notification>;
  getNotifications(): Observable<Notification[]>;
  getFullNotification(id: Notification['id']): Observable<FullNotification>;
  viewNotification(id: Notification['id']): void;
}

const NotificationService = new InjectionToken<NotificationService>('NotificationService');

export const notificationRootProvider = (): Provider => ({
  provide: NotificationService,
  useClass: NotificationServiceImplementation,
});

export const getNotifications = (): ReturnType<NotificationService['getNotifications']> => {
  return inject(NotificationService).getNotifications();
};
