import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
@Component({
  selector: 'ustymchyk-base-layout',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [HeaderComponent, RouterModule],
  template: `
    <ustymchyk-header></ustymchyk-header>
    <router-outlet></router-outlet>
  `,
})
export class BaseLayoutComponent {}
