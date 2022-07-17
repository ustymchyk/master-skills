import { InjectionToken, StaticProvider } from '@angular/core';

export const TOASTER_POSITION = new InjectionToken<ToasterPosition>('NOTIFICATION_POSITION');

export const createPositionProvider = (position: ToasterPosition): StaticProvider => {
  return {
    provide: TOASTER_POSITION,
    useValue: position,
  };
};

export type ToasterPosition = 'LT' | 'RT' | 'RB' | 'LB';
