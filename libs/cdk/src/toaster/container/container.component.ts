import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  Inject,
  Injector,
  OnDestroy,
  Type,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ToasterController } from '../toaster-controller';
import { ToasterPosition, TOASTER_POSITION } from '../toaster-position';

@Component({
  selector: 'ustymchyk-notifications',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./container.component.scss'],
  templateUrl: './container.component.html',
})
export class ToasterContainerComponent implements OnDestroy {
  private notifications: Map<symbol, ComponentRef<unknown>> = new Map();

  @ViewChild('container', { read: ViewContainerRef, static: true })
  private container?: ViewContainerRef;

  constructor(@Inject(TOASTER_POSITION) public readonly position: ToasterPosition) {}

  public add(data: unknown, component: Type<unknown>, time: number): void {
    const id = Symbol();

    const componentRef = this.container?.createComponent(component, {
      injector: Injector.create({
        providers: [
          {
            provide: ToasterController,
            useValue: new ToasterController(data, () => {
              this.close(id);
            }),
          },
        ],
      }),
    });

    if (componentRef) {
      componentRef.changeDetectorRef.markForCheck();
      this.notifications.set(id, componentRef);
      this.scheduleAutoClose(id, time);
    }
  }

  private scheduleAutoClose(id: symbol, time: number) {
    setTimeout(() => {
      this.close(id);
    }, time);
  }

  public registerDetach(detach: () => void): void {
    this.detach = detach;
  }

  private detach(): void {
    return;
  }

  private close(id: symbol): void {
    const componentRef = this.notifications.get(id);

    if (!componentRef) {
      return;
    }

    componentRef.destroy();
    this.notifications.delete(id);

    if (this.notifications.size < 1) {
      this.detach();
    }
  }

  public ngOnDestroy(): void {
    this.detach();
  }
}
