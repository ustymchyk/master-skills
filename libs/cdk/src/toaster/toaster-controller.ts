export class ToasterController<Data = unknown> {
  constructor(public readonly data: Data, public close: () => void) {}
}
