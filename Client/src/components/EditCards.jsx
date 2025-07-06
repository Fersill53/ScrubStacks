/*import './PageContainer.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import EditCardForm from './EditCardForm';

function EditCards() {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  // Fetch cards from the server
  const fetchCards = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/cards');
      setCards(res.data);
    } catch (err) {
      console.error('Error fetching cards:', err);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleDelete = async (id) => {
  try {
    await axios.delete(`http://localhost:5000/api/cards/${id}`);
    fetchCards(); // Refresh the list after delete
  } catch (err) {
    console.error('Error deleting card:', err);
  }
};


  const handleCancelEdit = () => {
    setSelectedCard(null);
  };

  const handleCardUpdated = () => {
    fetchCards();
    setSelectedCard(null);
  };

  return (
    <div className="fullPage">
      <h1>Edit Preference Cards</h1>
      <p>Select and update existing surgeon preference cards.</p>

      {selectedCard ? (
        <EditCardForm
          card={selectedCard}
          onCancel={handleCancelEdit}
          onCardUpdated={handleCardUpdated}
        />
      ) : (
        <div className="card-list">
          {cards.length === 0 ? (
            <p>No cards available.</p>
          ) : (
            cards.map(card => (
              <div key={card._id} className="card">
                <h3>{card.surgeonName}</h3>
                <p><strong>Procedure:</strong> {card.procedure}</p>
                <p><strong>Instruments:</strong> {card.instruments.join(', ')}</p>
                <p><strong>Notes:</strong> {card.notes}</p>
                <button onClick={() => setSelectedCard(card)}>Edit This Card</button>
                <button onClick={() => handleDelete(card._id)}>Delete</button>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default EditCards; */

import { useEffect, useState } from 'react';
import axios from 'axios';
import './PageContainer.css';
import './EditCards.css';

function EditCards() {
  const [cards, setCards] = useState([]);
  const [editingCardId, setEditingCardId] = useState(null);
  const [editData, setEditData] = useState({});

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

  const handleEditClick = (card) => {
    if (editingCardId === card._id) {
      setEditingCardId(null);
    } else {
      setEditingCardId(card._id);
      setEditData({
        procedure: card.procedure,
        instruments: card.instruments.join(', '),
        notes: card.notes
      });
    }
  };

  const handleChange = (e) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value
    });
  };

  const handleSave = async (id) => {
    try {
      const updated = {
        ...editData,
        instruments: editData.instruments.split(',').map(item => item.trim())
      };
      await axios.put(`http://localhost:5000/api/cards/${id}`, updated);
      fetchCards();
      setEditingCardId(null);
    } catch (err) {
      console.error('Error saving card:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/cards/${id}`);
      fetchCards();
    } catch (err) {
      console.error('Error deleting card:', err);
    }
  };

  return (
    <div className="fullPage">
      <h1>Edit Preference Cards</h1>
      <p>Click a card to expand and edit its details.</p>
      {cards.length === 0 ? (
        <p>No cards found.</p>
      ) : (
        <div className="card-container">
          {cards.map(card => (
            <div
              className={`card ${editingCardId === card._id ? 'expanded' : ''}`}
              key={card._id}
            >
              <h3 onClick={() => handleEditClick(card)}>{card.surgeonName}</h3>
              <p><strong>Procedure:</strong> {card.procedure}</p>

              {editingCardId === card._id && (
                <div className="edit-form">
                  <label>
                    Procedure:
                    <input
                      type="text"
                      name="procedure"
                      value={editData.procedure}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Instruments (comma separated):
                    <input
                      type="text"
                      name="instruments"
                      value={editData.instruments}
                      onChange={handleChange}
                    />
                  </label>
                  <label>
                    Notes:
                    <textarea
                      name="notes"
                      value={editData.notes}
                      onChange={handleChange}
                    />
                  </label>
                  <div className="button-row">
                    <button onClick={() => handleSave(card._id)}>Save</button>
                    <button onClick={() => setEditingCardId(null)}>Cancel</button>
                    <button onClick={() => handleDelete(card._id)}>Delete</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default EditCards;

