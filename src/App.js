import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Notes from "./components/Notes";
import EditModal from "./components/EditModal";
import { useState } from "react";
function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState(getNotesFromLocalStorage);
  const [editId, setEditId] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);


  localStorage.setItem("notes", JSON.stringify(notes));

  function getNotesFromLocalStorage(){
    const note = JSON.parse(localStorage.getItem("notes"));
    if(note){
      return note;
    }
    else {
      return [];
    }
  }

  return (
    <div className="App">
      <EditModal notes={notes} setNotes={setNotes} editId={editId} />
      <Navbar notes={notes} setFilteredNotes={setFilteredNotes}/>
      <Form
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        notes={notes}
        setNotes={setNotes}
      />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10">
            <h1 className="mb-3">Your Notes</h1>
            {notes.length === 0 ? (
              <>
                {" "}
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">Notes</h5>
                    <p className="card-text">
                      No Note is Available Here! Add a Note to display it here.
                    </p>
                  </div>
                </div>
              </>
            ) : notes.map((element) => {
              return (
                <Notes 
                element={element} 
                key={element.id} 
                notes={notes} 
                setNotes={setNotes} 
                setEditId={setEditId}/>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
