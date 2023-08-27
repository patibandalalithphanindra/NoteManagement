function Form({title, setTitle, description, setDescription, notes, setNotes}) {
  const inputHandler = (e) => {
    if(e.target.id === "title"){
      setTitle(e.target.value);
    }
    else {
      setDescription(e.target.value);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
   if(title!== "" && description!==""){
    setNotes((note) => {
      return (
        [...note, {
          title : title,
          description : description,
          id : new Date().getTime()
        }]
      )
    })
   }
    setTitle("");
    setDescription("");
  };
  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form styles={{border:"2px solid grey",borderRadius:"10px", padding:"30px"}}>
            <div className="mb-3">
              <label for="title" className="form-label">
                Title
              </label>
              <input 
              type="email" 
              className="form-control" 
              id="title" 
              placeholder="Enter your Title"
              value={title}
              onChange={inputHandler}
              />
            </div>
            <div className="mb-3">
              <label for="desc" className="form-label">
                Description
              </label>
              <textarea
                na me="desc"
                id="desc"
                rows="3"
                className="form-control"
                placeholder="Enter your Description"
                value={description}
                onChange={inputHandler}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" onClick={submitHandler}>
              Add Notes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
