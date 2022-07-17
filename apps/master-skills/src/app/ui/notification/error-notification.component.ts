import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ToasterController } from '@ustymchyk/cdk';
import { Notification } from '@ustymchyk/data-access';

@Component({
  selector: 'ustymchyk-notification',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
  template: `
    <div class="mat-snack-bar-container">
      <div class="mat-simple-snackbar">
        <span class="mat-simple-snack-bar-content">{{ controller.data.description }}</span>
        <div class="mat-simple-snackbar-action">
          <button (click)="this.controller.close()" mat-button color="accent">Close</button>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .mat-snack-bar-container {
        border-radius: 4px;
        box-sizing: border-box;
        display: block;
        max-width: 33vw;
        min-width: 344px;
        padding: 14px 16px;
        min-height: 48px;
        transform-origin: center;
      }

      .mat-simple-snackbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        line-height: 20px;
        opacity: 1;
      }

      .mat-simple-snackbar-action {
        flex-shrink: 0;
        margin: -8px -8px -8px 8px;
      }
    `,
  ],
})
export class ErrorNotificationComponent {
  constructor(public readonly controller: ToasterController<Notification>) {}
}
