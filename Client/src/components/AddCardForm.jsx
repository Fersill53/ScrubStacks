/*import { useState } from 'react';
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

export default AddCardForm; */

import { useState } from "react";
import axios from "axios";
import './AddCardForm.css';

function AddCardForm({ onCardAdded }) {
  const [formData, setFromData] = useState({
    //General Info
    surgeonName: '',
    specialty: '',
    procedure: '',
    procedureCode: '',
    serviceLine: '',
    anesthesiaType: '',
    estimatedDuration: '',
    positioning: '',
    positioningAids: '',

    // Room Setup
    roomType: '',
    tableType: '',
    bedOrientation: '',
    specialEquipment: [],

    // Patient Prep
    prepArea: '',
    prepSolution: '',
    hairRemoval: '',
    catheter: '',
    dvtProphylaxis: '',

    // Drapes
    drapes: [],
    customDraping: '',

    // Instruments
    instrumentsDetailed: [{ qty: '', name: '', notes: '' }],

    // Implants / Devices
    vendors: '',
    implants: '',
    repName: '',
    repRequired: false,

    // Supplies
    supplies: [{ qty: '', name: '', sizeOrNotes: ''}],

    // Medications
    medications: [{ name: '', dose: '', route: '', timing: ''}],

    // Sutures
    sutures: [{ type: '', size: '', needle: '', useSite: ''}],

    // Closing
    fascia: '',
    subcuticular: '',
    skinClosure: '',

    // Notes
    notes: '',

  });

const handleChange = async (e) => {
  const { name, value, type, checked } = e.target;
  setFromData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  const cardData = { ...formData };
  try {
    await axios.post('https://scrubstacks.onrender.com/api/cards', cardData);
    if (onCardAdded) onCardAdded();
  } catch (err) {
    console.error('Error adding Card', err);
  }

};

return (
  <form className="add-card-form" onSubmit={handleSubmit}>
    <h2>General Information</h2>
    <input name="surgeonName" placeholder="Surgeon Name" value={formData.surgeonName} onChange={handleChange} />
    <input name="specialty" placeholder="Specialty" value={formData.specialty} onChange={handleChange} />
    <input name="procedure" placeholder="Procedure" value={formData.procedure} onChange={handleChange} />
    <input name="procedureCode" placeholder="Procedure Code" value={formData.procedureCode} onChange={handleChange} />
    <input name="serviceLine" placeholder="Service Line" value={formData.serviceLine} onChange={handleChange} />
    <input name="anesthesiaType" placeholder="Anesthesia Type" value={formData.anesthesiaType} onChange={handleChange} />
    <input name="positioning" placeholder="Positioning" value={formData.positioning} onChange={handleChange} />
    <input name="positioningAids" placeholder="Positioning Aids" value={formData.positioningAids} onChange={handleChange} />

    <h2>Room Setup</h2>
    <input name="roomType" placeholder="Room Type/Size" value={formData.roomType} onChange={handleChange} />
    <input name="tableType" placeholder="Table Type" value={formData.tableType} onChange={handleChange} />
    <input name="bedOrientation" placeholder="Bed Orientation" value={formData.bedOrientation} onChange={handleChange} />
    <input name="specialEquipment" placeholder="Special Equipment (comma-separated)" value={formData.specialEquipment} onChange={handleChange} />

    <h2>Patient Preparation</h2>
    <input name="prepArea" placeholder="Prep Area" value={formData.prepArea} onChange={handleChange} />
    <input name="prepSolution" placeholder="Prep Solution" value={formData.prepSolution} onChange={handleChange} />
    <input name="hairRemoval" placeholder="Hair Removal" value={formData.hairRemoval} onChange={handleChange} />
    <input name="catheter" placeholder="Catheter" value={formData.catheter} onChange={handleChange} />      
    <input name="dvtProphylaxis" placeholder="DVT Prophylaxis" value={formData.dvtProphylaxis} onChange={handleChange} />

    <h2>Drapes</h2>
    <input name="drapes" placeholder="Drapes (comma-separated)" value={formData.drapes} onChange={handleChange} />
    <textarea name="customDraping" placeholder="Custom Draping Instructions" value={formData.customDraping} onChange={handleChange} />

    <h2>Instruments</h2>
    {formData.instrumentsDetailed.map((inst, idx) => (
      <div key={idx}>
        <input placeholder="Qty" value={inst.qty} onChange={e => {
          const copy = [...formData.instrumentsDetailed];
          copy[idx].qty = e.target.value;
          setFromData({ ...formData, instrumentsDetailed: copy });
        }} />
        <input placeholder="Name" value={inst.name} onChange={e => {
          const copy = [...formData.instrumentsDetailed];
          copy[idx].name = e.target.value;
          setFromData({ ...formData, instrumentsDetailed: copy });
        }} />
        <input placeholder="Notes" value={inst.notes} onChange={e => {
          const copy = [...formData.instrumentsDetailed];
          copy[idx].notes = e.target.value;
          setFromData({ ...formData, instrumentsDetailed: copy });
        }} />
      </div>
    ))}
    <button type="button" onClick={() => setFromData({ ...formData, instrumentsDetailed: [...formData.instrumentsDetailed, { qty: '', name: '', notes: '' }] })}>Add Instrument</button>

    <h2>Implants / Devices</h2>
    <input name="vendors" placeholder="Vendors" value={formData.vendors} onChange={handleChange} />
    <input name="implants" placeholder="Implants" value={formData.implants} onChange={handleChange} />
    <input name="repName" placeholder="Rep Name / Phone" value={formData.repName} onChange={handleChange} />
      <label>
        <input type="checkbox" name="repRequired" checked={formData.repRequired} onChange={handleChange} />
        Rep Required In-Room
      </label>

    <h2>Supplies</h2>
    {formData.supplies.map((supply, idx) => (
      <div key={idx}>
        <input placeholder="Qty" value={supply.qty} onChange={e => {
          const copy = [...formData.supplies];
          copy[idx].qty = e.target.value;
          setFromData({ ...formData, supplies: copy });
        }} />
        <input placeholder="Name" value={supply.name} onChange={e => {
          const copy = [...formData.supplies];
          copy[idx].name = e.target.value;
          setFromData({ ...formData, supplies: copy });
        }} />
        <input placeholder="Size/Notes" value={supply.sizeOrNotes} onChange={e => {
          const copy = [...formData.supplies];
          copy[idx].sizeOrNotes = e.target.value;
          setFromData({ ...formData, supplies: copy});
        }} />
      </div>
    ))}
    <button type="button" onClick={() => setFromData({ ...formData, supplies: [...formData.supplies, { qty: '', name: '', sizeOrNotes: '' }] })}>Add Supply</button>

    <h2>Medications</h2>
    {formData.medications.map ((med, idx) => (
      <div key={idx}>
        <input placeholder="Name" value={med.name} onChange={e => {
          const copy = [...formData.medications];
          copy[idx].name = e.target.value;
          setFromData({ ...formData, medications: copy });
        }} />
        <input placeholder="Dose" value={med.dose} onChange={e => {
          const copy = [...formData.medications];
          copy[idx].dose = e.target.value;
          setFromData({ ...formData, medications: copy });
        }} />
        <input placeholder="Route" value={med.route} onChange={e => {
          const copy = [...formData.medications];
          copy[idx].route = e.target.value;
          setFromData({ ...formData, medications: copy });
        }} />
        <input placeholder="Timing" value={med.timing} onChange={e => {
          const copy = [...formData.medications];
          copy[idx].timing = e.target.value;
          setFromData({ ...formData, medications: copy });
        }} />
      </div>
    ))}
    <button type="button" onClick={() => setFromData({ ...formData, medications: [...formData.medications, { name: '', dose: '', route: '', timing: ''}] })}>Medications</button>

    <h2>Sutures</h2>
    {formData.sutures.map ((suture, idx) => (
      <div key={idx}>
        <select value={suture.size} onChange={e => {
          const copy = [...formData.sutures];
          copy[idx].size = e.target.value;
          setFromData({ ...formData, sutures: copy });
        }}>
          <option value="">Select Size</option>
          {["5", "4", "3", "2", "1", "0", "2-0", "3-0", "4-0", "5-0", "6-0", "7-0", "8-0", "9-0", "10-0"].map(opt => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <input placeholder="Type" value={suture.type} onChange={e => {
          const copy = [...formData.sutures];
          copy[idx].type = e.target.value;
          setFromData({ ...formData, sutures: copy });
        }}/>
        <input placeholder="Needle" value={suture.needle} onChange={e => {
          const copy = [...formData.sutures];
          copy[idx].needle = e.target.value;
          setFromData({ ...formData, sutures: copy});
        }} />
        <input placeholder="Use Site" value={suture.useSite} onChange={e => {
          const copy = [...formData.sutures];
          copy[idx].useSite = e.target.value;
          setFromData({ ...formData, sutures: copy });
        }} />
      </div>
    ))}
    <button type="button" onClick={() => setFromData({ ...formData, sutures: [...formData.sutures, { type: '', size: '', needle: '', useSite: ''}] })}>Add Suture</button>

    <h2>Closing Prefernces</h2>
    <input name="fascia" placeholder="Fascia" value={formData.fascia} onChange={handleChange} />
    <input name="subcuticular" placeholder="Subcuticular" value={formData.subcuticular} onChange={handleChange} />
    <input name="skinClosure" placeholder="Skin Closuree" value={formData.skinClosure} onChange={handleChange} />

    <h2>Notes / Special Instructions</h2>
    <textarea name="notes" placeholder="Notes" value={formData.notes} onChange={handleChange} />

    <button type='submit'>Add Card</button>

  </form>
);

}

export default AddCardForm;
