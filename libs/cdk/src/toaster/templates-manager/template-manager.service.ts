import { Inject, Injectable, Type } from '@angular/core';
import { ToasterTemplate, TOASTER_TEMPLATE } from './template-manager';

@Injectable({ providedIn: 'root' })
export class TemplateManagerService {
  private componentsMap: Map<ToasterTemplate['type'], ToasterTemplate['component']>;

  constructor(@Inject(TOASTER_TEMPLATE) components: ToasterTemplate[]) {
    this.componentsMap = this.createMap(components);
  }

  public getComponent(type: ToasterTemplate['type']): ToasterTemplate['component'] {
    if (!this.componentsMap.has(type)) {
      throw new Error('Notification component for such type is not provided');
    }

    return this.componentsMap.get(type) as Type<unknown>;
  }

  private createMap(components: ToasterTemplate[]): Map<ToasterTemplate['type'], ToasterTemplate['component']> {
    return new Map(components.map(({ component, type }) => [type, component]));
  }
}
