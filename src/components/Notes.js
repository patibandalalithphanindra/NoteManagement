function Notes({element, notes, setNotes, setEditId}) {
  const deleteHandler = (id) => {
  const newNotes = notes.filter((element) => {
    if(element.id!==id){
      return element;
    }
  })
  setNotes(newNotes);
  }

  const editHandler = (id) => {
    setEditId(id);
    notes.filter((element) => {
      if(element.id === id){
        document.getElementById("edittitle").value = element.title;
        document.getElementById("editdesc").value = element.description;
      }
    })
  }
  return (
    <>
      <div className="card mb-3">
        <div className="card-body" style={{textTransform : "capitalize"}}>
          <h5 className="card-title">{element.title}</h5>
          <p className="card-text">
            {element.description}
          </p>
          <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={()=> {
          editHandler(element.id)
        }}
      >
        Edit
      </button>
         <button className="btn btn-danger mx-2" onClick={()=> {
          deleteHandler(element.id);
         }}>
            Delete
         </button>
        </div>
      </div>
    </>
  );
}

export default Notes;
