import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { notificationRootProvider, NotificationTypes } from '@ustymchyk/data-access';
import { AppComponent } from './app/app.component';
import { routingRootProvider } from './app/routes';

import { environment } from './environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SuccessNotificationComponent } from './app/ui/notification/success-notification.component';
import { toasterTemplatesRootProvider } from '@ustymchyk/cdk';
import { ErrorNotificationComponent } from './app/ui/notification/error-notification.component';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    routingRootProvider(),
    notificationRootProvider(),
    importProvidersFrom(BrowserAnimationsModule),
    toasterTemplatesRootProvider(
      { type: 'SUCCESS', component: SuccessNotificationComponent },
      { type: 'ERROR', component: ErrorNotificationComponent }
    ),
  ],
});
