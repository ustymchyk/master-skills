import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { getNotifications, Notification } from '@ustymchyk/data-access';
import { trackById } from '@ustymchyk/utils';
import { Observable } from 'rxjs';

@Component({
  selector: 'ustymchyk-history',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule],
  template: `
    <ul>
      <li *ngFor="let notification of notifications$ | async; trackBy: trackById">
        <h3>{{ notification.title }}</h3>
        <p>{{ notification.description }}</p>
      </li>
    </ul>
  `,
})
export class HistoryComponent {
  trackById = trackById;
  notifications$: Observable<Notification[]> = getNotifications();
}
