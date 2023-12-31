import React, { useState, useEffect } from "react";

function EditModal({ editId, notes, setNotes }) {
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  useEffect(() => {
    const noteToEdit = notes.find((note) => note.id === editId);
    if (noteToEdit) {
      setEditTitle(noteToEdit.title);
      setEditDescription(noteToEdit.description);
    }
  }, [editId, notes]);

  const updateHandler = () => {
    const updatedNotes = notes.map((element) => {
      if (editId === element.id) {
        return {
          ...element,
          title: editTitle,
          description: editDescription,
        };
      } else {
        return element;
      }
    });
    setNotes(updatedNotes);
  };

  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Edit Notes
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form
              style={{
                border: "2px solid grey",
                borderRadius: "10px",
                padding: "30px",
              }}
            >
              <div className="mb-3">
                <label htmlFor="edittitle" className="form-label">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="edittitle"
                  placeholder="Enter your Title"
                  value={editTitle}
                  onChange={(e) => setEditTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="editdesc" className="form-label">
                  Description
                </label>
                <textarea
                  id="editdesc"
                  rows="3"
                  className="form-control"
                  placeholder="Enter your Description"
                  value={editDescription}
                  onChange={(e) => setEditDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-dismiss="modal"
              onClick={updateHandler}
            >
              Edit Notes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditModal;
