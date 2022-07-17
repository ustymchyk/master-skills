import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'ustymchyk-header',
  standalone: true,
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, RouterModule],
  template: `
    <mat-toolbar color="primary">
      <button mat-button [routerLink]="['/']">Master skills</button>
      <span class="spacer"></span>
      <button mat-icon-button [routerLink]="['/history']">
        <mat-icon>notifications</mat-icon>
      </button>
    </mat-toolbar>
  `,
  styles: ['.spacer { flex-grow: 1}'],
})
export class HeaderComponent {}
