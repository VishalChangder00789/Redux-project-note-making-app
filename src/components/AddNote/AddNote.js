import React, { useState } from "react";
import "./AddNote.css";
import { addNewNote } from "../../store";
import { useDispatch } from "react-redux";

const AddNotes = ({ note }) => {
  const [heading, setHeading] = useState("");
  const [data, setData] = useState("");
  const dispatch = useDispatch();

  const handleSaveButton = (data, heading) => {
    const obj = {
      data,
      heading,
    };
    dispatch(addNewNote(obj));
    setData("");
    setHeading("");
  };

  return (
    <div className="AddNotesOuter">
      <input
        placeholder="Give Heading"
        value={heading}
        onChange={(e) => setHeading(e.target.value)}
        className="AddNotesHeading"
      ></input>
      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Give Text"
        className="AddNotesData"
      ></textarea>
      <button
        onClick={() => handleSaveButton(data, heading)}
        className="SaveButton"
      >
        SAVE NOTE
      </button>
    </div>
  );
};

export default AddNotes;
