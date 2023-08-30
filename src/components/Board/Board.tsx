import Card from "../Card/Card";
import './Board.css';
import { useState } from 'react'
import { ICard } from '../../models/ICard';



export default function Board() {
  const [pair, setPair] = useState([])

  const [cards, setCards] = useState([
    { value: 'A', isOpened: false, id: 1, openCardHandler: openCard },
    { value: 'A', isOpened: false, id: 2, openCardHandler: openCard },
    { value: 'B', isOpened: false, id: 3, openCardHandler: openCard },
    { value: 'B', isOpened: false, id: 4, openCardHandler: openCard },
    { value: 'C', isOpened: false, id: 5, openCardHandler: openCard },
    { value: 'C', isOpened: false, id: 6, openCardHandler: openCard },
    { value: 'D', isOpened: false, id: 7, openCardHandler: openCard },
    { value: 'D', isOpened: false, id: 8, openCardHandler: openCard },
    { value: 'E', isOpened: false, id: 9, openCardHandler: openCard },
    { value: 'E', isOpened: false, id: 10, openCardHandler: openCard },
    { value: 'F', isOpened: false, id: 11, openCardHandler: openCard },
    { value: 'F', isOpened: false, id: 12, openCardHandler: openCard }
  ].sort(() => Math.random() - 0.5));

  function openCard(id: number) {
    let cardsCopy: ICard[] = [...cards]
    cardsCopy.forEach((elem: ICard) => {
      if (elem.id === id) {
        elem.isOpened = !(elem.isOpened);
      }
    });
    setCards(cardsCopy)
  }

  return (
    <div className="Board">
      <div className="Cards">
        {
          cards.map((e: ICard) => {
            return <Card value={e.value} id={e.id} isOpened={e.isOpened} openCardHandler={e.openCardHandler} />
          })
        }
      </div>
    </div>
  );
}
