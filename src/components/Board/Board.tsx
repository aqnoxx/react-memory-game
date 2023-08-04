import Card from "../Card/Card";
import './Board.css';
import { useState } from 'react'
import { ICard } from '../../models/ICard';



export default function Board() {
  const [cards, setCards] = useState([
    { key: 0, value: 'A' },
    { key: 1, value: 'A' },
    { key: 2, value: 'B' },
    { key: 3, value: 'B' },
    { key: 4, value: 'C' },
    { key: 5, value: 'C' },
    { key: 6, value: 'D' },
    { key: 7, value: 'D' },
    { key: 8, value: 'E' },
    { key: 9, value: 'E' },
    { key: 10, value: 'F' },
    { key: 11, value: 'F' }
  ].sort(() => Math.random() - 0.5));

  return (
    <div className="Board">
      <div className="Cards">
        {
          cards.map((e: ICard) => {
            return <Card key={e.key} value={e.value} />
          })
        }
      </div>
    </div>
  );
}
