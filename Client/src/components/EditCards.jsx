import { useEffect, useState } from 'react';
import axios from 'axios';

function EditCards() {
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

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cards/${id}`);
      fetchCards();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="page-container">
      <h1>Edit Preference Cards</h1>
      <p>Select and update existing surgeon preference cards.</p>
      <div className="cards-list">
        {cards.map(card => (
          <div key={card._id} className="card">
            <h3>{card.surgeonName}</h3>
            <p><strong>Procedure:</strong> {card.procedure}</p>
            <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
            <p><strong>Notes:</strong> {card.notes}</p>
            <button onClick={() => handleDelete(card._id)}>Delete</button>
            {/* You can add an Edit button here that opens your EditCardForm in a modal or inline */}
          </div>
        ))}
        {cards.length === 0 && <p>No cards available to edit.</p>}
      </div>
    </div>
  );
}

export default EditCards;
