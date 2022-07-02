import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getNotifications, Notification } from '@ustymchyk/data-access';
import { trackById } from '@ustymchyk/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'ustymchyk-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NotificationsComponent {
  trackById = trackById;
  notifications$: Observable<Notification[]> = getNotifications();
}
