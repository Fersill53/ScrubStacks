import { useState, useEffect } from 'react';
import axios from 'axios';

function EditCardForm({ card, onCancel, onCardUpdated }) {
  if (!card) {
    return (
      <div className="page-container">
        <h2>No card selected to edit</h2>
        <button onClick={onCancel}>Go Back</button>
      </div>
    );
  }

  const [surgeonName, setSurgeonName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState('');

  useEffect(() => {
    setSurgeonName(card.surgeonName || '');
    setProcedure(card.procedure || '');
    setInstruments(card.instruments?.join(', ') || '');
    setNotes(card.notes || '');
  }, [card]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const instrumentsArray = instruments.split(',').map(item => item.trim()).filter(Boolean);

    try {
      await axios.put(`http://localhost:5000/api/cards/${card._id}`, {
        surgeonName,
        procedure,
        instruments: instrumentsArray,
        notes
      });
      if (onCardUpdated) onCardUpdated();
      if (onCancel) onCancel();
    } catch (err) {
      console.error('Error updating card:', err);
    }
  };

  return (
    <div className="page-container">
      <h1>Edit Preference Card</h1>
      <p>Update details below and save changes.</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Surgeon Name"
          value={surgeonName}
          onChange={(e) => setSurgeonName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Instruments (comma-separated)"
          value={instruments}
          onChange={(e) => setInstruments(e.target.value)}
          required
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </form>
    </div>
  );
}

export default EditCardForm;
