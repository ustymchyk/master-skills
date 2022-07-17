import { DOCUMENT } from '@angular/common';
import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Inject,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
} from '@angular/core';
import { createPositionProvider, ToasterPosition } from '../toaster-position';
import { ToasterContainerComponent } from '../container/container.component';

export interface Portal {
  componentRef: ComponentRef<ToasterContainerComponent>;
  destroy: () => void;
}

@Injectable({ providedIn: 'root' })
export class PortalManagerService {
  private portals: Map<ToasterPosition, Portal> = new Map();

  private renderer: Renderer2;

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private readonly document: Document,
    private readonly injector: Injector,
    private readonly appRef: ApplicationRef,
    private readonly componentFactoryResolver: ComponentFactoryResolver
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  public getPortal(position: ToasterPosition): Portal {
    if (!this.portals.has(position)) {
      this.portals.set(position, this.createPortal(position));
    }

    return this.portals.get(position) as Portal;
  }

  private createPortal(position: ToasterPosition): Portal {
    const componentRef = this.componentFactoryResolver.resolveComponentFactory(ToasterContainerComponent).create(
      Injector.create({
        providers: [createPositionProvider(position)],
        parent: this.injector,
      })
    );

    this.appRef.attachView(componentRef.hostView);

    this.renderer.appendChild(
      this.document.body,
      (componentRef.hostView as EmbeddedViewRef<unknown>).rootNodes[0] as HTMLElement
    );

    return {
      componentRef,
      destroy: () => {
        this.appRef.detachView(componentRef.hostView);
        componentRef.destroy();
        this.portals.delete(position);
      },
    };
  }
}
