import { useEffect, useState } from 'react';
import axios from 'axios';

function ViewCards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cards');
      setCards(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">
      <h1>View Preference Cards</h1>
      <p>Here you can browse all saved surgeon preference cards.</p>
      <div className="cards-list">
        {cards.map(card => (
          <div key={card._id} className="card">
            <h3>{card.surgeonName}</h3>
            <p><strong>Procedure:</strong> {card.procedure}</p>
            <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
            <p><strong>Notes:</strong> {card.notes}</p>
          </div>
        ))}
        {cards.length === 0 && <p>No cards found.</p>}
      </div>
    </div>
  );
}

export default ViewCards;
