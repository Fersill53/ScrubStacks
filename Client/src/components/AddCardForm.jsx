import { useState } from 'react';
import axios from 'axios';
import './../App.css';

function AddCardForm({ onCardAdded }) {
  const [surgeonName, setSurgeonName] = useState('');
  const [procedure, setProcedure] = useState('');
  const [instruments, setInstruments] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const instrumentsArray = instruments
      .split(',')
      .map((item) => item.trim())
      .filter(Boolean);

    try {
      await axios.post('https://scrubstacks.onrender.com/api/cards', {
        surgeonName,
        procedure,
        instruments: instrumentsArray,
        notes
      });

      // Clear the form
      setSurgeonName('');
      setProcedure('');
      setInstruments('');
      setNotes('');

      // Notify parent
      if (onCardAdded) onCardAdded();
    } catch (err) {
      console.error('Error adding card:', err);
    }
  };

  return (
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
      <button type="submit">Add Card</button>
    </form>
  );
}

export default AddCardForm;
