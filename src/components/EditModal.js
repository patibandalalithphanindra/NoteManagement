function EditModal({editId, notes, setNotes}) {
  const updateHandler = () => {
    const updatedNotes = notes.map((element) => {
      if (editId === element.id) {
        return {
          ...element,
          title: document.getElementById('edittitle').value,
          description: document.getElementById('editdesc').value,
        };
      } else {
        return element;
      }
    });
    setNotes(updatedNotes);
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
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
            <form styles={{border:"2px solid grey",borderRadius:"10px", padding:"30px"}}>
            <div className="mb-3">
              <label for="title" className="form-label">
                Title
              </label>
              <input type="email" className="form-control" id="edittitle" placeholder="Enter your Title"/>
            </div>
            <div className="mb-3">
              <label for="desc" className="form-label">
                Description
              </label>
              <textarea
                name="desc"
                id="editdesc"
                rows="3"
                className="form-control"
                placeholder="Enter your Description"
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
    </>
  );
}

export default EditModal;
