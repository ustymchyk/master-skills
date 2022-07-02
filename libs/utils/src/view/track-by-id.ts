export function trackById<T extends { id: string | number | symbol }>(i: number, item: T): T['id'] {
  return item.id;
}
