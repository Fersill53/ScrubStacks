import { useState, useEffect } from 'react';
import axios from 'axios';

function EditCardForm({ card, onCancel, onCardUpdated }) {
  // Early return if card is not available
  if (!card) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h3 style={{ color: 'red' }}>No card selected to edit.</h3>
        <button onClick={onCancel}>Go Back</button>
      </div>
    );
  }

  // Form state
  const [surgeonName, setSurgeonName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState('');

  // Sync form state when card changes
  useEffect(() => {
    setSurgeonName(card.surgeonName || '');
    setProcedure(card.procedure || '');
    setInstruments(card.instruments?.join(', ') || '');
    setNotes(card.notes || '');
  }, [card]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const instrumentsArray = instruments.split(',').map(item => item.trim()).filter(Boolean);

    try {
      await axios.put(`http://localhost:5000/api/cards/${card._id}`, {
        surgeonName,
        procedure,
        instruments: instrumentsArray,
        notes,
      });
      if (onCardUpdated) onCardUpdated();
      if (onCancel) onCancel();
    } catch (err) {
      console.error('Error updating card:', err);
    }
  };

  return (
    <div style={{
      border: '1px solid #444',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px auto',
      maxWidth: '400px',
      backgroundColor: '#111',
      color: '#eee'
    }}>
      <h2>Edit Preference Card</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Surgeon Name"
          value={surgeonName}
          onChange={(e) => setSurgeonName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Procedure"
          value={procedure}
          onChange={(e) => setProcedure(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <input
          type="text"
          placeholder="Instruments (comma-separated)"
          value={instruments}
          onChange={(e) => setInstruments(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
        />
        <textarea
          placeholder="Notes"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px', height: '100px' }}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <button type="submit" style={{ padding: '8px 16px' }}>Save</button>
          <button type="button" onClick={onCancel} style={{ padding: '8px 16px' }}>Cancel</button>
        </div>
      </form>
    </div>
  );
}

export default EditCardForm;
