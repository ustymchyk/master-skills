import { Injectable } from '@angular/core';
import { PortalManagerService } from './portal/portal-manager.service';
import { TemplateManagerService } from './templates-manager';
import { ToasterConfig } from './toaster-config';

@Injectable({ providedIn: 'root' })
export class ToasterService {
  constructor(
    private readonly portalManager: PortalManagerService,
    private readonly componentManger: TemplateManagerService
  ) {}

  public show({ data, position, time, type }: ToasterConfig): void {
    const { componentRef, destroy } = this.portalManager.getPortal(position);
    const component = this.componentManger.getComponent(type);

    componentRef.instance.add(data, component, time);
    componentRef.instance.registerDetach(destroy);
  }
}
