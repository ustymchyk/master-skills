import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { mockNotificationList } from './mock';
import { FullNotification, Notification, NotificationStatus } from './types';

@Injectable({ providedIn: 'root' })
export class NotificationStateService {
  private notificationList$ = new BehaviorSubject<FullNotification[]>(mockNotificationList());

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
            status: 'VIEWED',
          };
        }

        return notification;
      })
    );
  }
}
