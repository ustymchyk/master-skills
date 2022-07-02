import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotificationService } from './notification';
import { NotificationStateService } from './notification-state.service';
import { FullNotification, Notification } from './types';

@Injectable()
export class NotificationServiceImplementation implements NotificationService {
  constructor(private readonly state: NotificationStateService) {}

  listenNewNotifications(): Observable<Notification> {
    return this.state.listenNewNotifications();
  }

  getNotifications(): Observable<Notification[]> {
    return this.state.getNotificationList();
  }

  getFullNotification(id: Notification['id']): Observable<FullNotification> {
    return this.state.getFullNotification(id);
  }

  viewNotification(id: Notification['id']): void {
    this.state.viewNotification(id);
  }
}
