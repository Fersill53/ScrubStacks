/*import { useEffect, useState } from 'react';
import axios from 'axios';
//import './../App.css';
import './PageContainer.css'
import './ViewCards.css';



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
    <div className="fullPage">
      <h1>View Preference Cards</h1>
      <p>Here you can browse all saved surgeon preference cards.</p>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        <div className="card-container">
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

export default ViewCards; */

import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageContainer.css';
import './ViewCards.css';
import { useNavigate } from 'react-router-dom';
const navigate = useNavigate();

function ViewCards() {
  const [cards, setCards] = useState([]);
  const [expandedCardId, setExpandedCardId] = useState(null);

  useEffect(() => {
    fetchCards();
  }, []);

  const fetchCards = async () => {
    try {
      const res = await axios.get('https://scrubstacks.onrender.com/api/cards');
      setCards(res.data);
    } catch (err) {
      console.error('Error fetching cards:', err);
    }
  };

  const toggleExpand = (id) => {
    setExpandedCardId(prev => (prev === id ? null : id));
  };

  return (
    <div className="fullPage">
      <h1>View Preference Cards</h1>
      <p>Here you can browse all saved surgeon preference cards.</p>
      
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        <div className="card-container">
          {cards.map(card => (
            <div
              className={`card ${expandedCardId === card._id ? 'expanded' : ''}`}
              key={card._id}
              onClick={() => toggleExpand(card._id)}
            >
              <h3>{card.surgeonName}</h3>
              <p><strong>Procedure:</strong> {card.procedure}</p>

              {expandedCardId === card._id && (
                <>
                  <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
                  <p><strong>Notes:</strong> {card.notes}</p>
                  <button onClick={(e) => {
                    e.stopPropagation();
                    Navigate(`/cards/${card._id}`)
                  }}>
                    View Full Card
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ViewCards;


