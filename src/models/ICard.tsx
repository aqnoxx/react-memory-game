export interface ICard {
  value: string,
  isOpened: boolean,
  id: number,
  openCardHandler: (key: number) => void
}
