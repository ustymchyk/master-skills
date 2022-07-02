import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { FullNotification, Notification, NotificationStatus, NotificationTypes } from './types';

const notificationList: FullNotification[] = [...Array(10).keys()].map((id) => ({
  id: String(id),
  title: `Title ${id}`,
  type: Math.random() < 0.5 ? NotificationTypes.SUCCESS : NotificationTypes.ERROR,
  description: `Notification description ${id}`,
  fullDescription: `Full description of ${id} notification`,
  created: Date.now(),
  status: Math.random() < 0.5 ? NotificationStatus.NEW : NotificationStatus.VIEWED,
}));

@Injectable({ providedIn: 'root' })
export class NotificationStateService {
  private notificationList$ = new BehaviorSubject<FullNotification[]>(notificationList);

  getNotificationList(): Observable<Notification[]> {
    return this.notificationList$.asObservable();
  }

  listenNewNotifications(): Observable<Notification> {
    return new Observable();
  }

  getFullNotification(id: Notification['id']): Observable<FullNotification> {
    return of<FullNotification>(
      this.notificationList$.getValue().find((notification) => notification.id === id) as FullNotification
    );
  }

  viewNotification(id: Notification['id']): void {
    this.notificationList$.next(
      this.notificationList$.getValue().map((notification) => {
        if (notification.id === id) {
          return {
            ...notification,
            status: NotificationStatus.VIEWED,
          };
        }

        return notification;
      })
    );
  }
}
