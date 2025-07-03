import { useEffect, useState } from 'react';
import axios from 'axios';

function CardList() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/cards')
      .then(res => {
        setCards(res.data);
      })
      .catch(err => {
        console.error('Error fetching cards:', err);
      });
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
    </div>
  );
}

export default CardList;
