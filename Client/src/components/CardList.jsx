import { useEffect, useState } from 'react';
import axios from 'axios';
import AddCardForm from './AddCardForm';

function CardList() {
  const [cards, setCards] = useState([]);

  const fetchCards = () => {
    axios.get('http://localhost:5000/api/cards')
      .then(res => {
        setCards(res.data);
      })
      .catch(err => {
        console.error('Error fetching cards:', err);
      });
  };

  useEffect(() => {
    fetchCards();
  }, []);

  return (
    <div>
      <h2>Surgeon Preference Cards</h2>
      {cards.length === 0 && <p>No cards yet.</p>}
      <ul>
        {cards.map(card => (
          <li key={card._id}>
            <h3>{card.surgeonName}</h3>
            <p>Procedure: {card.procedure}</p>
            <p>Instruments: {card.instruments.join(', ')}</p>
            <p>Notes: {card.notes}</p>
          </li>
        ))}
      </ul>
      <AddCardForm onCardAdded={fetchCards} />
    </div>
  );
}

export default CardList;
