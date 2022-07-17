import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { ToasterService } from '@ustymchyk/cdk';
import { Notification, NotificationPosition, NotificationTypes } from '@ustymchyk/data-access';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ustymchyk-home',
  standalone: true,
  imports: [ReactiveFormsModule, MatFormFieldModule, MatSelectModule, CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: ['.form { display: flex; flex-direction: column; width: 200px; margin-left: auto; margin-right: auto}'],
  template: `
    <div class="form">
      <mat-form-field appearance="fill">
        <mat-label>Position</mat-label>
        <mat-select [formControl]="positionControl">
          <mat-option *ngFor="let position of positionOptions" [value]="position">
            {{ position }}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <br />

      <mat-form-field appearance="fill">
        <mat-label>Type</mat-label>
        <mat-select [formControl]="typeControl">
          <mat-option *ngFor="let type of typeOptions" [value]="type">
            {{ type }}
          </mat-option>
        </mat-select>
      </mat-form-field>

      <br />

      <button mat-button color="primary" (click)="showNotification()">Show notification</button>
    </div>
  `,
})
export class HomeComponent {
  private index = 0;

  public positionOptions: NotificationPosition[] = ['LB', 'LT', 'RB', 'RT'];

  public typeOptions: NotificationTypes[] = ['SUCCESS', 'ERROR'];

  public positionControl = new FormControl(this.positionOptions[0]);
  public typeControl = new FormControl(this.typeOptions[0]);

  constructor(private readonly toaster: ToasterService) {}

  public showNotification(): void {
    const notification = this.getNotification(
      String(this.index++),
      this.typeControl.value || this.typeOptions[0],
      this.positionControl.value || this.positionOptions[0]
    );

    this.toaster.show({
      data: notification,
      position: notification.position || 'RB',
      time: 3000,
      type: notification.type,
    });
  }

  private getNotification(id: string, type: NotificationTypes, position: NotificationPosition): Notification {
    return {
      id,
      type,
      position,
      title: `Notification title ${id}`,
      description: `Notification description ${id}`,
    };
  }
}
