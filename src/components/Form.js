import React, { useState } from "react";

function Form({
  title,
  setTitle,
  description,
  setDescription,
  notes,
  setNotes,
}) {
  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");

  const inputHandler = (e) => {
    if (e.target.id === "title") {
      setTitle(e.target.value);
      setTitleError(e.target.value.trim() === "" ? "Please enter a title" : "");
    } else if (e.target.id === "desc") {
      setDescription(e.target.value);
      setDescriptionError(
        e.target.value.trim() === "" ? "Please enter a description" : ""
      );
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    // Set error states for both fields if they are empty
    if (title.trim() === "") {
      setTitleError("Please enter a title");
    } else {
      setTitleError("");
    }

    if (description.trim() === "") {
      setDescriptionError("Please enter a description");
    } else {
      setDescriptionError("");
    }

    if (title.trim() === "" || description.trim() === "") {
      return;
    }

    setNotes((note) => {
      return [
        ...note,
        {
          title: title,
          description: description,
          id: new Date().getTime(),
        },
      ];
    });

    setTitle("");
    setDescription("");
  };

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <form
            style={{
              border: "2px solid grey",
              borderRadius: "10px",
              padding: "30px",
            }}
          >
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title
              </label>
              <input
                type="text"
                className="form-control"
                id="title"
                placeholder="Enter your Title"
                value={title}
                onChange={inputHandler}
              />
              {titleError && <div className="text-danger">{titleError}</div>}
            </div>
            <div className="mb-3">
              <label htmlFor="desc" className="form-label">
                Description
              </label>
              <textarea
                name="desc"
                id="desc"
                rows="3"
                className="form-control"
                placeholder="Enter your Description"
                value={description}
                onChange={inputHandler}
              ></textarea>
              {descriptionError && (
                <div className="text-danger">{descriptionError}</div>
              )}
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={submitHandler}
            >
              Add Notes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;
