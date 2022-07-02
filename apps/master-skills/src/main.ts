import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { notificationRootProvider } from '@ustymchyk/data-access';
import { AppComponent } from './app/app.component';
import { routingRootProvider } from './app/routes';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [routingRootProvider(), notificationRootProvider()],
});
