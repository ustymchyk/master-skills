import { InjectionToken, Provider, Type } from '@angular/core';

export const TOASTER_TEMPLATE = new InjectionToken<ToasterTemplate>('NOTIFICATION_COMPONENT');

export interface ToasterTemplate {
  type: string;
  component: Type<unknown>;
}

export const toasterTemplatesRootProvider = (...templates: ToasterTemplate[]): Provider[] =>
  templates.map((component) => ({
    provide: TOASTER_TEMPLATE,
    useValue: component,
    multi: true,
  }));
