import './PageContainer.css'
import EditCardForm from "./EditCardForm";
//import "./../App.css";

function EditCards() {
  return (
    <div className="fullPage">
      <h1>Edit Preference Cards</h1>
      <p>Select and update existing surgeon preference cards.</p>
      <EditCardForm />
    </div>
  );
}

export default EditCards;
