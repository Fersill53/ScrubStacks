import { useEffect, useState } from 'react';
import axios from 'axios';
//import './../App.css';
import './PageContainer.css'


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
      console.error('Error fetching cards:', err);
    }
  };

  return (
    <div className="fullpage">
      <h1>View Preference Cards</h1>
      <p>Here you can browse all saved surgeon preference cards.</p>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        <div className="cards-list">
          {cards.map(card => (
            <div className="card" key={card._id}>
              <h3>{card.surgeonName}</h3>
              <p><strong>Procedure:</strong> {card.procedure}</p>
              <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
              <p><strong>Notes:</strong> {card.notes}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewCards;
