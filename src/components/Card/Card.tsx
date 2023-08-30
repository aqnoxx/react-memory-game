import './Card.css';
import { ICard } from '../../models/ICard';


export default function Card({ value, isOpened, id, openCardHandler }: ICard) {
  console.log(id)
  return <div className="Card" key={id} onClick={() => openCardHandler(id)} ><a>{(isOpened) ? value : null}</a></div>;
}
