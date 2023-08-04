import './Card.css';
import { ICard } from '../../models/ICard';

export default function Card({ key, value }: ICard) {
  return <div className="Card" key={key}><a>{value}</a></div>;
}
