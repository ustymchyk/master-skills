import { ToasterPosition } from './toaster-position';

export type ToasterConfig<Data = unknown> = {
  data: Data;
  time: number;
  position: ToasterPosition;
  type: string;
};
